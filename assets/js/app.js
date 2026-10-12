/* Field Guide — a tiny, dependency-free renderer.
   All guide content lives in /content and is listed in content/manifest.js. */
(() => {
  "use strict";

  const FG = (window.FG = window.FG || {});
  const store = { pages: [], data: {}, site: { tracks: {} } };
  FG.page = (p) => { store.pages.push(p); };
  FG.data = (key, value) => { store.data[key] = value; };
  FG.site = (obj) => { Object.assign(store.site, obj); };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const arr = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);
  const enc = encodeURIComponent;
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "\u0027": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"\u0027]/g, (c) => ESC[c]);
  const slug = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64);
  const stripMd = (s) => String(s || "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, "");
  const pad = (n) => String(n).padStart(2, "0");
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  /* ---------- inline markdown: **bold**, *italic*, `code`, [text](url) ---------- */
  function inline(s) {
    return s
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^\w*])\*([^*\n]+)\*(?![\w*])/g, "$1<em>$2</em>");
  }
  function a(url, html, cls) {
    const ext = /^https?:/i.test(url);
    const c = [cls, ext ? "ext" : ""].filter(Boolean).join(" ");
    return `<a href="${esc(url)}"${ext ? " target=\"_blank\" rel=\"noopener\"" : ""}${c ? ` class="${c}"` : ""}>${html}</a>`;
  }
  function md(src) {
    if (src == null || src === "") return "";
    const stash = [];
    const keep = (html) => "\u0000" + (stash.push(html) - 1) + "\u0000";
    let s = String(src);
    s = s.replace(/`([^`]+)`/g, (_, c) => keep(`<code>${esc(c)}</code>`));
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => keep(a(u, inline(esc(t)))));
    s = inline(esc(s));
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => stash[Number(i)]);
  }
  const paras = (t) => arr(t).flatMap((x) => String(x).split(/\n\s*\n/)).map((p) => `<p>${md(p.trim())}</p>`).join("");
  const ul = (items, cls) => (arr(items).length ? `<ul class="${cls == null ? "list" : cls}">${arr(items).map((i) => `<li>${md(i)}</li>`).join("")}</ul>` : "");
  const label = (t) => `<div class="label">${esc(t)}</div>`;
  const linkBtn = (url, text) => `<a class="btn btn--ghost btn--sm" href="${esc(url)}" target="_blank" rel="noopener">${esc(text)} \u2197</a>`;

  /* ---------- progress, saved in this browser only ---------- */
  const DONE_KEY = "fg.v1.done";
  let done = {};
  try { done = JSON.parse(localStorage.getItem(DONE_KEY) || "{}") || {}; } catch (e) { done = {}; }
  const saveDone = () => { try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch (e) { /* storage blocked */ } };
  const itemId = (it, key) => (typeof it === "string" ? slug(it) : it.id || slug(it[key]));
  const groupsOf = (b) => b.groups || [{ items: b.items }];
  const checkbox = (id, text) => `<input type="checkbox" data-check="${esc(id)}" aria-label="${esc("Done: " + stripMd(text || ""))}"${done[id] ? " checked" : ""}><span class="box" aria-hidden="true"></span>`;
  const progressBar = () => `<div class="progress"><div class="progress__bar"><span></span></div><div class="progress__text"></div></div>`;
  function checkIds(p) {
    if (p._ids) return p._ids;
    const ids = [];
    arr(p.blocks).forEach((b) => {
      if (b.type === "topics") arr(b.items).forEach((t) => ids.push(`${b.id}.${itemId(t, "title")}`));
      if (b.type === "checklist") groupsOf(b).forEach((g) => arr(g.items).forEach((it) => ids.push(`${b.id}.${itemId(it, "text")}`)));
      if (b.type === "steps") arr(b.items).forEach((s) => arr(s.checks).forEach((c) => ids.push(`${b.id}.${itemId(c, "text")}`)));
    });
    return (p._ids = ids);
  }

  /* ---------- live job-search links ---------- */
  const CITY = {
    Kolkata: { li: "Kolkata, West Bengal, India", nk: "kolkata", in: "Kolkata, West Bengal", fi: "Kolkata", sh: "kolkata", g: "Kolkata" },
    Bangalore: { li: "Bengaluru, Karnataka, India", nk: "bangalore", in: "Bengaluru, Karnataka", fi: "Bangalore", sh: "bangalore", g: "Bengaluru" },
    Remote: { li: "India", nk: "", in: "Remote", fi: "", sh: "", g: "" }
  };
  const URLS = {
    linkedin: (k, c) => `https://www.linkedin.com/jobs/search/?keywords=${enc(k)}&location=${enc(CITY[c].li)}&f_TPR=r2592000${c === "Remote" ? "&f_WT=2" : ""}`,
    naukri: (k, c) => (c === "Remote" ? `https://www.naukri.com/${slug(k)}-jobs?k=${enc(k)}&wfhType=2` : `https://www.naukri.com/${slug(k)}-jobs-in-${CITY[c].nk}?k=${enc(k)}&l=${CITY[c].nk}`),
    indeed: (k, c) => `https://in.indeed.com/jobs?q=${enc(k)}&l=${enc(CITY[c].in)}&fromage=30`,
    foundit: (k, c) => `https://www.foundit.in/srp/results?query=${enc(k)}${c === "Remote" ? "" : "&locations=" + enc(CITY[c].fi)}`,
    shine: (k, c) => `https://www.shine.com/job-search/${slug(k)}-jobs${c === "Remote" ? "" : "-in-" + CITY[c].sh}`,
    google: (k, c) => `https://www.google.com/search?ibp=htl;jobs&q=${enc(c === "Remote" ? k + " remote jobs India" : k + " jobs in " + CITY[c].g)}`
  };
  FG.urls = URLS;
  const SITES = [
    ["LinkedIn", "Posted in the last 30 days", "linkedin"],
    ["Naukri", "Largest Indian job board", "naukri"],
    ["Indeed", "Posted in the last 30 days", "indeed"],
    ["foundit", "Formerly Monster India", "foundit"],
    ["Shine", "Good for lab and QC roles", "shine"],
    ["Google Jobs", "Pulls from many boards", "google"]
  ];

  /* ---------- block renderers ---------- */
  const FIT = { strong: "Strong fit", good: "Good fit", stretch: "Stretch" };
  const FIT_RANK = { strong: 0, good: 1, stretch: 2 };
  const R = {};

  R.h2 = (b) => `<h2 class="h2" id="${esc(b.id || slug(b.text))}">${md(b.text)}</h2>${b.sub ? `<p class="h2-sub">${md(b.sub)}</p>` : ""}`;
  R.h3 = (b) => `<h3 class="h3" id="${esc(b.id || slug(b.text))}">${md(b.text)}</h3>`;
  R.p = (b) => paras(b.text);
  R.divider = () => "<hr>";
  R.html = (b) => b.html || "";
  R.list = (b) => {
    const tag = b.ordered ? "ol" : "ul";
    return `<${tag} class="list${b.cols ? " list--cols" : ""}">${arr(b.items).map((i) => `<li>${md(i)}</li>`).join("")}</${tag}>`;
  };
  R.callout = (b) => `<div class="callout callout--${esc(b.variant || "note")}">${b.title ? `<div class="callout__title">${md(b.title)}</div>` : ""}${b.text ? paras(b.text) : ""}${b.items ? ul(b.items) : ""}</div>`;
  R.chips = (b) => `<div class="chips-block">${b.label ? label(b.label) : ""}<div class="chips">${arr(b.items).map((c) => `<span class="chip">${md(c)}</span>`).join("")}</div></div>`;
  R.kv = (b) => `<dl class="kv">${arr(b.items).map(([k, v]) => `<div><dt>${md(k)}</dt><dd>${md(v)}</dd></div>`).join("")}</dl>`;
  R.table = (b) => `<div class="table-wrap"><table class="table">${b.head ? `<thead><tr>${b.head.map((h) => `<th scope="col">${md(h)}</th>`).join("")}</tr></thead>` : ""}<tbody>${arr(b.rows).map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${md(c)}</th>` : `<td>${md(c)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>${b.note ? `<p class="note">${md(b.note)}</p>` : ""}`;

  function card(c) {
    const inner = `${c.kicker ? `<div class="kicker">${md(c.kicker)}</div>` : ""}<h3 class="card__title">${md(c.title)}</h3>${c.text ? `<div class="card__text">${paras(c.text)}</div>` : ""}${c.list ? ul(c.list, "card__list") : ""}${c.chips ? `<div class="chips">${arr(c.chips).map((x) => `<span class="chip">${md(x)}</span>`).join("")}</div>` : ""}${c.links ? `<div class="card__links">${arr(c.links).map((l) => a(l.url, md(l.label))).join("")}</div>` : ""}`;
    const id = c.id ? ` id="${esc(c.id)}"` : "";
    return c.href ? `<a class="card card--link" href="${esc(c.href)}"${id}>${inner}</a>` : `<div class="card"${id}>${inner}</div>`;
  }
  R.cards = (b) => `<div class="cards cards--${b.cols || 2}">${arr(b.items).map(card).join("")}</div>`;

  function searchLinks(k, ctx) {
    const cities = ctx.trackObj.locations;
    const set = (key) => cities.map((c) => a(URLS[key](k, c), esc(c))).join("");
    return `<span class="role__search"><span class="muted">LinkedIn</span>${set("linkedin")}<span class="muted">Naukri</span>${set("naukri")}</span>`;
  }
  function role(r, i, ctx) {
    const id = r.id || "role-" + slug(r.title);
    const cols = [["Why it fits", r.why], ["Gaps to close", r.gaps], [r.whereLabel || "Who hires", r.where]]
      .filter(([, v]) => arr(v).length)
      .map(([k, v]) => `<div>${label(k)}${ul(v, "")}</div>`).join("");
    const search = r.search ? searchLinks(r.search, ctx) : "";
    return `<article class="role" id="${esc(id)}">
      <div class="role__head"><span class="role__num">${pad(i + 1)}</span>
        <div class="role__titles"><h3>${md(r.title)}</h3>${r.aka ? `<div class="role__aka">Also listed as: ${md(arr(r.aka).join(" · "))}</div>` : ""}</div>
        ${r.fit ? `<span class="badge badge--${esc(r.fit)}">${esc(FIT[r.fit] || r.fit)}</span>` : ""}
      </div>
      ${r.what ? `<p class="role__what">${md(r.what)}</p>` : ""}
      ${cols ? `<div class="role__grid">${cols}</div>` : ""}
      ${r.pay || search ? `<div class="role__foot">${r.pay ? `<span><span class="muted">Typical pay</span>${md(r.pay)}</span>` : "<span></span>"}${search}</div>` : ""}
    </article>`;
  }
  R.roles = (b, ctx) => `<div class="roles">${arr(b.items).map((r, i) => role(r, i, ctx)).join("")}</div>`;

  function linksList(items) {
    return `<ul class="links">${arr(items).map((l) => `<li>${a(l.url, md(l.label))}${l.note ? `<span class="links__note">${md(l.note)}</span>` : ""}</li>`).join("")}</ul>`;
  }
  R.links = (b) => `<div class="linkgroups linkgroups--${b.cols || 2}">${arr(b.groups).map((g) => `<section class="linkgroup"${g.title ? ` id="${esc("l-" + slug(g.title))}"` : ""}>${g.title ? `<h3 class="h3">${md(g.title)}</h3>` : ""}${linksList(g.items)}</section>`).join("")}</div>`;

  function topicBody(t) {
    let h = "";
    if (t.text) h += paras(t.text);
    if (t.points) h += ul(t.points);
    if (t.ask) h += label("Be ready to answer") + ul(t.ask);
    if (t.links) h += label("Read") + linksList(t.links);
    return h;
  }
  R.topics = (b) => {
    const items = arr(b.items).map((t) => {
      const tid = itemId(t, "title");
      const cid = `${b.id}.${tid}`;
      return `<div class="topic${done[cid] ? " is-done" : ""}" id="${esc("t-" + tid)}">
        <label class="tick" title="Mark as done">${checkbox(cid, t.title)}</label>
        <details><summary><span class="topic__title">${md(t.title)}</span>${t.why ? `<span class="topic__why">${md(t.why)}</span>` : ""}</summary>
        <div class="topic__content">${topicBody(t)}</div></details>
      </div>`;
    }).join("");
    return `<div class="topics" data-group="${esc(b.id)}">${progressBar()}${items}</div>`;
  };
  const checkRow = (gid, it) => {
    const o = typeof it === "string" ? { text: it } : it;
    const cid = `${gid}.${itemId(o, "text")}`;
    return `<li><label class="check">${checkbox(cid, o.text)}<span class="check__text">${md(o.text)}${o.note ? `<span class="check__note">${md(o.note)}</span>` : ""}</span></label></li>`;
  };
  R.checklist = (b) => `<div class="checklist" data-group="${esc(b.id)}">${progressBar()}${groupsOf(b).map((g) => `${g.title ? `<h3 class="h3">${md(g.title)}</h3>` : ""}<ul class="checks">${arr(g.items).map((it) => checkRow(b.id, it)).join("")}</ul>`).join("")}</div>`;
  R.steps = (b) => {
    const hasChecks = arr(b.items).some((s) => arr(s.checks).length);
    const body = arr(b.items).map((s) => `<li class="step"${s.id ? ` id="${esc(s.id)}"` : ""}><div class="step__when">${md(s.when || "")}</div><div class="step__body"><h3 class="step__title">${md(s.title)}</h3>${s.text ? paras(s.text) : ""}${s.list ? ul(s.list) : ""}${arr(s.checks).length ? `<ul class="checks">${s.checks.map((c) => checkRow(b.id, c)).join("")}</ul>` : ""}</div></li>`).join("");
    return `<div class="steps-wrap"${hasChecks ? ` data-group="${esc(b.id)}"` : ""}>${hasChecks ? progressBar() : ""}<ol class="steps">${body}</ol></div>`;
  };
  R.qa = (b) => `<div class="qa">${arr(b.groups).map((g) => `${g.title ? `<h3 class="h3" id="${esc("qa-" + slug(g.title))}">${md(g.title)}</h3>` : ""}${arr(g.items).map((q) => `<details class="qa__item" id="${esc("q-" + (q.id || slug(q.q)))}"><summary>${md(q.q)}</summary><div class="qa__a">${paras(q.a)}${q.list ? ul(q.list) : ""}</div></details>`).join("")}`).join("")}</div>`;
  R.compare = (b) => `<div class="compare">${arr(b.items).map((c) => `<div class="compare__row"><div class="compare__before">${label(b.beforeLabel || "Before")}<p>${md(c.before)}</p></div><div class="compare__after">${label(b.afterLabel || "After")}<p>${md(c.after)}</p>${c.why ? `<p class="compare__why">${md(c.why)}</p>` : ""}</div></div>`).join("")}</div>`;
  R.template = (b) => `<div class="tpl"><div class="tpl__head"><span>${md(b.title)}</span><button class="btn btn--ghost btn--sm" type="button" data-copy>Copy</button></div><pre class="tpl__body">${esc(b.body)}</pre></div>${b.note ? `<p class="note">${md(b.note)}</p>` : ""}`;
  R.hero = (b) => `<section class="hero">${b.kicker ? `<div class="kicker">${md(b.kicker)}</div>` : ""}<h1 class="hero__title">${b.titleHTML || esc(b.title)}</h1>${b.lede ? `<p class="lede">${md(b.lede)}</p>` : ""}</section>`;
  R.tracks = (b) => `<div class="track-cards">${arr(b.items).map((t) => `<a class="track-card${t.variant === "creative" ? " track-card--creative" : ""}" href="${esc(t.href)}"><div class="kicker">${esc(t.kicker)}</div><h2>${esc(t.title)}</h2><p>${esc(t.text)}</p><div class="track-card__meta">${arr(t.tags).map((x) => `<span class="tag tag--city">${esc(x)}</span>`).join("")}</div><div class="track-card__cta">${esc(t.cta)} \u2192</div></a>`).join("")}</div>`;

  /* ---------- filterable lists: employers & openings ---------- */
  const chipBtns = (labels, vals) => labels.map((l, i) => `<button type="button" class="chip chip--btn${i === 0 ? " is-on" : ""}" data-val="${esc(vals ? vals[i] : i === 0 ? "All" : l)}">${esc(l)}</button>`).join("");

  R.directory = (b, ctx) => {
    const items = arr(store.data[b.source]);
    const cats = [...new Set(items.map((x) => x.category).filter(Boolean))];
    const cities = b.cities || ctx.trackObj.locations;
    return `<div class="directory" data-dir="${esc(b.source)}" data-noun="${esc(b.noun || "employers")}">
      <div class="filters"><div class="chips" data-filter="city">${chipBtns([b.allLabel || "All cities", ...cities], ["All", ...cities])}</div>
        <input class="filter-input" type="search" placeholder="${esc(b.placeholder || "Filter by name, speciality, notes\u2026")}" data-filter="q" aria-label="Filter list"></div>
      <div class="filters"><div class="chips" data-filter="cat">${chipBtns(["All types", ...cats], ["All", ...cats])}</div></div>
      <p class="filter-count" data-count></p><div class="dir" data-list></div></div>`;
  };
  R.postings = (b, ctx) => {
    const items = arr(store.data[b.source]);
    const meta = store.data[b.source + ".meta"] || {};
    const fams = [...new Set(items.map((x) => x.family).filter(Boolean))];
    return `<div class="postings" data-posts="${esc(b.source)}">
      ${meta.note ? `<p class="feed-meta">${md(meta.note)}</p>` : ""}
      <div class="filters"><div class="chips" data-filter="city">${chipBtns(["All", ...ctx.trackObj.locations], ["All", ...ctx.trackObj.locations])}</div>
        <div class="chips" data-filter="fit">${chipBtns(["Any fit", "Strong", "Good", "Stretch"], ["All", "strong", "good", "stretch"])}</div>
        <input class="filter-input" type="search" placeholder="Filter by title, company, skill\u2026" data-filter="q" aria-label="Filter openings"></div>
      ${fams.length > 1 ? `<div class="filters"><div class="chips" data-filter="fam">${chipBtns(["All role types", ...fams], ["All", ...fams])}</div></div>` : ""}
      <p class="filter-count" data-count></p><div class="posts" data-list></div></div>`;
  };
  function dirItem(x) {
    return `<article class="dir__item"><div class="dir__main"><h3 class="dir__name">${esc(x.name)}</h3>
      <div class="dir__meta">${arr(x.cities).map((c) => `<span class="tag tag--city">${esc(c)}</span>`).join("")}${x.category ? `<span class="tag">${esc(x.category)}</span>` : ""}${arr(x.tags).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${x.notes ? `<p class="dir__note">${md(x.notes)}</p>` : ""}</div>
      <div class="dir__links">${x.careers ? linkBtn(x.careers, "Careers") : ""}${x.url ? linkBtn(x.url, x.linkLabel || "Visit") : ""}${x.site ? a(x.site, "Website") : ""}</div></article>`;
  }
  function postItem(x) {
    const meta = [x.city, x.experience, x.salary, x.posted ? "Posted " + x.posted : ""].filter(Boolean).map(esc).join(" · ");
    return `<article class="post"><div class="post__top"><div><h3 class="post__title">${esc(x.title)}</h3><div class="post__co">${esc(x.company)}</div></div>${x.fit ? `<span class="badge badge--${esc(x.fit)}">${esc(FIT[x.fit] || x.fit)}</span>` : ""}</div>
      <div class="post__meta">${meta}</div>
      ${x.summary ? `<p class="post__sum">${md(x.summary)}</p>` : ""}
      ${arr(x.skills).length ? `<div class="chips">${arr(x.skills).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>` : ""}
      <div class="post__foot"><span class="post__meta">${esc([x.source, x.family].filter(Boolean).join(" · "))}</span>${x.url ? linkBtn(x.url, "View") : ""}</div></article>`;
  }
  function refreshList(root) {
    const isDir = root.hasAttribute("data-dir");
    const items = arr(store.data[root.dataset.dir || root.dataset.posts]);
    const val = (name) => { const on = $(`[data-filter="${name}"] .is-on`, root); return on ? on.dataset.val : "All"; };
    const q = ($("[data-filter=q]", root).value || "").trim().toLowerCase();
    const city = val("city");
    let out = items.filter((x) => {
      if (city !== "All" && !arr(x.cities || x.city).includes(city)) return false;
      if (isDir) { const cat = val("cat"); if (cat !== "All" && x.category !== cat) return false; }
      else {
        const fit = val("fit"); if (fit !== "All" && x.fit !== fit) return false;
        const fam = val("fam"); if (fam !== "All" && x.family !== fam) return false;
      }
      if (q) { const hay = JSON.stringify(x).toLowerCase(); if (!q.split(/\s+/).every((t) => hay.includes(t))) return false; }
      return true;
    });
    if (!isDir) out = out.slice().sort((p, n) => (FIT_RANK[p.fit] ?? 9) - (FIT_RANK[n.fit] ?? 9));
    $("[data-count]", root).textContent = `Showing ${out.length} of ${items.length} ${root.dataset.noun || (isDir ? "employers" : "openings")}`;
    $("[data-list]", root).innerHTML = out.length ? out.map(isDir ? dirItem : postItem).join("") : `<p class="empty">Nothing matches these filters. Clear the search box or pick \u201cAll\u201d.</p>`;
  }

  /* ---------- search-link builder ---------- */
  R.searchbuilder = (b, ctx) => {
    const ks = arr(b.keywords);
    const cities = b.cities || ctx.trackObj.locations;
    return `<div class="sb" data-sb>
      <div class="sb__row">${label("Pick a search, or type your own")}<div class="chips" data-sb-k>${ks.map((k, i) => `<button type="button" class="chip chip--btn${i === 0 ? " is-on" : ""}" data-val="${esc(k)}">${esc(k)}</button>`).join("")}</div>
        <input class="filter-input" type="search" value="${esc(ks[0] || "")}" data-sb-input aria-label="Search keywords"></div>
      <div class="sb__row">${label("Where")}<div class="chips" data-sb-c>${chipBtns(cities, cities)}</div></div>
      <div class="sb__out" data-sb-out></div></div>`;
  };
  function sbRender(root) {
    const k = $("[data-sb-input]", root).value.trim() || "analytical chemist";
    const on = $("[data-sb-c] .is-on", root);
    const c = CITY[on && on.dataset.val] ? on.dataset.val : "Kolkata";
    $("[data-sb-out]", root).innerHTML = `<p class="sb__summary">Opens a live search for \u201c${esc(k)}\u201d \u00b7 ${esc(c)}</p>` +
      SITES.map(([n, note, key]) => `<a class="sb__link" href="${esc(URLS[key](k, c))}" target="_blank" rel="noopener"><strong>${n} \u2197</strong><span>${key === "naukri" && c === "Remote" ? "Tick \u201cRemote\u201d in the filters" : note}</span></a>`).join("");
  }

  /* ---------- pages, sidebar, router ---------- */
  const shell = $("#shell");
  const sidebar = $("#sidebar");
  const main = $("#main");
  const byOrder = (p, n) => (p.order ?? 999) - (n.order ?? 999);
  const trackPages = (t) => store.pages.filter((p) => p.track === t).sort(byOrder);
  const find = (t, id) => store.pages.find((p) => p.track === t && p.id === id);
  const hrefOf = (p) => (store.site.tracks[p.track] ? `#/${p.track}/${p.id}` : `#/${p.id}`);
  const ctxOf = (p) => ({ page: p, trackObj: store.site.tracks[p.track] || { locations: ["Kolkata", "Bangalore"] } });

  function renderBlocks(blocks, ctx) {
    return arr(blocks).map((b) => {
      const fn = R[b.type];
      if (!fn) return "";
      return `<div class="block${b.type === "h2" || b.type === "h3" ? " block--h" : ""}">${fn(b, ctx)}</div>`;
    }).join("");
  }
  function badge(p) {
    const ids = checkIds(p);
    if (!ids.length) return "";
    const n = ids.filter((id) => done[id]).length;
    return `<span class="side__badge${n === ids.length ? " is-done" : ""}" data-badge="${esc(p.track + "/" + p.id)}">${n}/${ids.length}</span>`;
  }
  function sidebarHTML(page) {
    const t = store.site.tracks[page.track];
    const other = Object.values(store.site.tracks).find((x) => x.id !== page.track);
    const items = trackPages(page.track).map((p, i) => `<li><a href="${hrefOf(p)}"${p === page ? " class=\"is-active\" aria-current=\"page\"" : ""}><span class="side__num">${pad(i + 1)}</span><span>${esc(p.nav || p.title)}</span>${badge(p)}</a></li>`).join("");
    return `<div class="side__head"><div class="kicker">${esc(t.kicker)}</div><div class="side__title">${esc(t.title)}</div><div class="side__locs">${esc(t.locations.join(" \u00b7 "))}</div></div>
      <nav aria-label="${esc(t.label)} pages"><ul class="side__list">${items}</ul></nav>
      ${other ? `<a class="side__switch" href="#/${other.id}">Switch to ${esc(other.label)} \u2192</a>` : ""}`;
  }
  function pagerHTML(page) {
    const pages = trackPages(page.track);
    const i = pages.indexOf(page);
    const prev = pages[i - 1];
    const next = pages[i + 1];
    return `<nav class="pager" aria-label="Previous and next page">${prev ? `<a class="prev" href="${hrefOf(prev)}"><span>\u2190 Previous</span><strong>${esc(prev.nav || prev.title)}</strong></a>` : "<span></span>"}${next ? `<a class="next" href="${hrefOf(next)}"><span>Next \u2192</span><strong>${esc(next.nav || next.title)}</strong></a>` : ""}</nav>`;
  }
  function renderPage(page) {
    const track = store.site.tracks[page.track];
    document.body.dataset.track = track ? page.track : "site";
    shell.classList.toggle("shell--wide", !track);
    sidebar.innerHTML = track ? sidebarHTML(page) : "";
    const head = page.hideHead ? "" : `<header class="page__head">${page.kicker ? `<div class="kicker">${md(page.kicker)}</div>` : ""}<h1 class="page__title">${md(page.title)}</h1>${page.lede ? `<p class="lede">${md(page.lede)}</p>` : ""}${page.print ? `<div class="page__tools"><button class="btn btn--ghost btn--sm" type="button" data-print>Print or save as PDF</button></div>` : ""}</header>`;
    main.innerHTML = `<article class="page${track ? "" : " page--wide"}">${head}${renderBlocks(page.blocks, ctxOf(page))}${track ? pagerHTML(page) : ""}</article>`;
    $$("[data-dir],[data-posts]", main).forEach(refreshList);
    $$("[data-sb]", main).forEach(sbRender);
    updateProgress();
    $$(".tabs a").forEach((x) => x.classList.toggle("is-active", x.dataset.tab === page.track));
    document.title = track ? `${stripMd(page.nav || page.title)} \u00b7 ${track.short} \u00b7 Field Guide` : page.docTitle || `${stripMd(page.title)} \u00b7 Field Guide`;
    const act = $(".side__list a.is-active", sidebar);
    const list = $(".side__list", sidebar);
    if (act && list && list.scrollWidth > list.clientWidth) list.scrollLeft = act.offsetLeft - list.clientWidth / 2 + act.clientWidth / 2;
  }
  function focusAnchor(id) {
    const el = document.getElementById(id);
    if (!el) { window.scrollTo(0, 0); return; }
    const det = el.matches("details") ? el : el.querySelector("details");
    if (det) det.open = true;
    el.scrollIntoView({ block: "start" });
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }
  function route() {
    let h = location.hash.replace(/^#\/?/, "");
    try { h = decodeURIComponent(h); } catch (e) { /* keep the raw hash */ }
    const parts = h.split("/").filter(Boolean);
    const [t, p] = parts;
    let anchor = parts[2];
    let page;
    if (!t) page = find("site", "home");
    else if (store.site.tracks[t]) page = p ? find(t, p) : trackPages(t)[0];
    else { page = find("site", t); anchor = p; }
    if (!page) page = { track: "site", id: "404", title: "Page not found", lede: "That link does not match any page in this guide.", blocks: [{ type: "p", text: "[Go to the start page](#/) or press / to search." }] };
    renderPage(page);
    if (anchor) focusAnchor(anchor); else window.scrollTo(0, 0);
    closeSearch();
  }

  /* ---------- interactions ---------- */
  function updateProgress() {
    $$("[data-group]", main).forEach((g) => {
      const boxes = $$("input[data-check]", g);
      const n = boxes.filter((x) => x.checked).length;
      const bar = $(".progress__bar span", g);
      const txt = $(".progress__text", g);
      if (bar) bar.style.width = boxes.length ? `${(n / boxes.length) * 100}%` : "0";
      if (txt) txt.textContent = `${n} / ${boxes.length}`;
    });
  }
  function updateBadges() {
    $$("[data-badge]", sidebar).forEach((el) => {
      const [t, id] = el.dataset.badge.split("/");
      const ids = checkIds(find(t, id));
      const n = ids.filter((x) => done[x]).length;
      el.textContent = `${n}/${ids.length}`;
      el.classList.toggle("is-done", n === ids.length);
    });
  }
  function legacyCopy(t) {
    const ta = document.createElement("textarea");
    ta.value = t; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    ta.remove();
  }
  const copyText = (t) => (navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(t).catch(() => legacyCopy(t)) : Promise.resolve(legacyCopy(t)));

  main.addEventListener("change", (e) => {
    const cb = e.target.closest("input[data-check]");
    if (!cb) return;
    if (cb.checked) done[cb.dataset.check] = true; else delete done[cb.dataset.check];
    saveDone();
    const topic = cb.closest(".topic");
    if (topic) topic.classList.toggle("is-done", cb.checked);
    updateProgress();
    updateBadges();
  });
  main.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip--btn");
    if (chip) {
      $$(".chip--btn", chip.parentElement).forEach((c) => c.classList.toggle("is-on", c === chip));
      const sb = chip.closest("[data-sb]");
      if (sb) {
        if (chip.parentElement.hasAttribute("data-sb-k")) $("[data-sb-input]", sb).value = chip.dataset.val;
        sbRender(sb);
        return;
      }
      const list = chip.closest("[data-dir],[data-posts]");
      if (list) refreshList(list);
      return;
    }
    const copy = e.target.closest("[data-copy]");
    if (copy) {
      copyText($(".tpl__body", copy.closest(".tpl")).textContent).then(() => {
        copy.textContent = "Copied";
        copy.classList.add("copied");
        setTimeout(() => { copy.textContent = "Copy"; copy.classList.remove("copied"); }, 1600);
      });
      return;
    }
    if (e.target.closest("[data-print]")) window.print();
  });
  main.addEventListener("input", (e) => {
    if (e.target.matches("[data-filter=q]")) refreshList(e.target.closest("[data-dir],[data-posts]"));
    if (e.target.matches("[data-sb-input]")) {
      const sb = e.target.closest("[data-sb]");
      $$("[data-sb-k] .chip--btn", sb).forEach((c) => c.classList.toggle("is-on", c.dataset.val === e.target.value.trim()));
      sbRender(sb);
    }
  });

  /* ---------- site search ---------- */
  const searchEl = $("#search");
  const inputEl = $("#search-input");
  const resultsEl = $("#search-results");
  const KIND_W = { page: 3, role: 3, topic: 3, question: 3, section: 2, card: 2, step: 2, link: 1, template: 1, checklist: 1, employer: 1, opening: 1 };
  let index = null;
  let sel = 0;

  function buildIndex() {
    const out = [];
    const add = (page, anchor, title, text, kind) => {
      const tt = stripMd(title || page.nav || page.title);
      const tx = stripMd(text || "").replace(/\s+/g, " ").trim();
      const e = { page, anchor, title: tt, text: tx, kind, hay: `${tt} ${tx}`.toLowerCase() };
      out.push(e);
      return e;
    };
    const join = (...xs) => xs.flat(2).filter(Boolean).join(" ");
    store.pages.forEach((p) => {
      if (p.noindex) return;
      let last = add(p, "", p.nav || p.title, join(p.title, p.lede), "page");
      const append = (txt) => { const s = stripMd(txt); last.text += " " + s; last.hay += " " + s.toLowerCase(); };
      arr(p.blocks).forEach((b) => {
        switch (b.type) {
          case "h2": case "h3": last = add(p, b.id || slug(b.text), b.text, b.sub, "section"); break;
          case "p": append(join(b.text)); break;
          case "list": append(join(b.items)); break;
          case "kv": append(join(arr(b.items).map((x) => x.join(" ")))); break;
          case "compare": append(join(arr(b.items).map((x) => [x.before, x.after]))); break;
          case "callout": append(join(b.title, b.text, b.items)); break;
          case "chips": append(join(b.label, b.items)); break;
          case "table": append(join(b.head, arr(b.rows).map((r) => r.join(" ")))); break;
          case "roles": arr(b.items).forEach((r) => add(p, r.id || "role-" + slug(r.title), r.title, join(r.aka, r.what, r.why, r.gaps, r.where), "role")); break;
          case "topics": arr(b.items).forEach((t) => add(p, "t-" + itemId(t, "title"), t.title, join(t.why, t.text, t.points, t.ask), "topic")); break;
          case "qa": arr(b.groups).forEach((g) => arr(g.items).forEach((q) => add(p, "q-" + (q.id || slug(q.q)), q.q, join(q.a, q.list), "question"))); break;
          case "cards": arr(b.items).forEach((c) => add(p, c.id || "", c.title, join(c.kicker, c.text, c.list, c.chips), "card")); break;
          case "links": arr(b.groups).forEach((g) => arr(g.items).forEach((l) => add(p, g.title ? "l-" + slug(g.title) : "", l.label, join(l.note, g.title), "link"))); break;
          case "steps": arr(b.items).forEach((s) => add(p, s.id || "", s.title, join(s.when, s.text, s.list, arr(s.checks).map((c) => (typeof c === "string" ? c : c.text))), "step")); break;
          case "checklist": groupsOf(b).forEach((g) => add(p, "", g.title || p.nav || p.title, join(arr(g.items).map((i) => (typeof i === "string" ? i : [i.text, i.note]))), "checklist")); break;
          case "template": add(p, "", b.title, b.body, "template"); break;
          case "directory": arr(store.data[b.source]).forEach((x) => add(p, "", x.name, join(x.category, x.cities, x.notes), "employer")); break;
          case "postings": arr(store.data[b.source]).forEach((x) => add(p, "", `${x.title} \u2014 ${x.company}`, join(x.city, x.summary, x.skills), "opening")); break;
          default: break;
        }
      });
    });
    return out;
  }
  function snippet(text, toks) {
    if (!text) return "";
    const low = text.toLowerCase();
    let i = -1;
    toks.some((t) => (i = low.indexOf(t)) >= 0);
    if (i < 0) i = 0;
    const start = Math.max(0, i - 50);
    return (start > 0 ? "\u2026" : "") + text.slice(start, start + 170) + (start + 170 < text.length ? "\u2026" : "");
  }
  function hl(s, toks) {
    const ts = toks.filter((t) => t.length > 1);
    if (!ts.length) return esc(s);
    const re = new RegExp("(" + ts.map(reEsc).join("|") + ")", "ig");
    return String(s).split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join("");
  }
  function runSearch(q) {
    if (!index) index = buildIndex();
    const toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    sel = 0;
    if (!toks.length) { resultsEl.innerHTML = `<li class="search__empty">Search roles, study topics, interview questions, employers, openings and links.</li>`; return; }
    const res = [];
    index.forEach((e) => {
      if (!toks.every((t) => e.hay.includes(t))) return;
      const tl = e.title.toLowerCase();
      let s = KIND_W[e.kind] || 0;
      toks.forEach((t) => { s += 1; if (tl.includes(t)) s += 6; if (tl.startsWith(t)) s += 2; });
      res.push([s, e]);
    });
    res.sort((x, y) => y[0] - x[0]);
    const top = res.slice(0, 30).map((x) => x[1]);
    resultsEl.innerHTML = top.length ? top.map((e, i) => {
      const t = store.site.tracks[e.page.track];
      const href = hrefOf(e.page) + (e.anchor ? "/" + e.anchor : "");
      return `<li><a href="${esc(href)}"${i === 0 ? " class=\"is-active\"" : ""}><span class="r-title">${hl(e.title, toks)}</span><span class="r-track">${esc((t ? t.short + " \u00b7 " : "") + stripMd(e.page.nav || e.page.title))}</span>${e.text ? `<span class="r-snip">${hl(snippet(e.text, toks), toks)}</span>` : ""}</a></li>`;
    }).join("") : `<li class="search__empty">No matches. Try a shorter word such as \u201cLC-MS\u201d, \u201cNaukri\u201d or \u201cportfolio\u201d.</li>`;
  }
  function move(d) {
    const links = $$("a", resultsEl);
    if (!links.length) return;
    sel = (sel + d + links.length) % links.length;
    links.forEach((l, i) => l.classList.toggle("is-active", i === sel));
    links[sel].scrollIntoView({ block: "nearest" });
  }
  function openSearch() {
    searchEl.hidden = false;
    document.body.style.overflow = "hidden";
    inputEl.value = "";
    runSearch("");
    setTimeout(() => inputEl.focus(), 0);
  }
  function closeSearch() {
    if (searchEl.hidden) return;
    searchEl.hidden = true;
    document.body.style.overflow = "";
  }
  function go(href) {
    if (location.hash === href) route(); else location.hash = href;
    closeSearch();
  }
  inputEl.addEventListener("input", () => runSearch(inputEl.value));
  resultsEl.addEventListener("click", (e) => {
    const l = e.target.closest("a");
    if (!l) return;
    e.preventDefault();
    go(l.getAttribute("href"));
  });
  searchEl.addEventListener("click", (e) => { if (e.target === searchEl) closeSearch(); });
  $$("[data-search-open]").forEach((b) => b.addEventListener("click", openSearch));
  document.addEventListener("keydown", (e) => {
    const el = document.activeElement;
    const typing = el && ((el.tagName === "INPUT" && !/^(checkbox|radio|button|submit|reset)$/i.test(el.type)) || /^(TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable);
    if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); openSearch(); return; }
    if (searchEl.hidden) return;
    if (e.key === "Escape") closeSearch();
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); move(e.key === "ArrowDown" ? 1 : -1); }
    else if (e.key === "Enter") { const l = $("a.is-active", resultsEl); if (l) { e.preventDefault(); go(l.getAttribute("href")); } }
  });

  /* ---------- theme ---------- */
  $("[data-theme-toggle]").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("fg.theme", JSON.stringify(next)); } catch (e) { /* ignore */ }
    const m = $("meta[name=theme-color]");
    if (m) m.setAttribute("content", next === "dark" ? "#121210" : "#f7f6f2");
  });

  /* ---------- printing: expand collapsed notes, then restore ---------- */
  window.addEventListener("beforeprint", () => $$("details:not([open])", main).forEach((d) => { d.open = true; d.dataset.printOpened = "1"; }));
  window.addEventListener("afterprint", () => $$("details[data-print-opened]", main).forEach((d) => { d.open = false; delete d.dataset.printOpened; }));

  /* ---------- boot: load every content file listed in the manifest ---------- */
  function boot(failed) {
    const up = $("#footer-updated");
    if (up && store.site.updated) up.textContent = "Last updated " + store.site.updated;
    window.addEventListener("hashchange", route);
    route();
    if (failed.length) console.warn("Field Guide: could not load", failed);
  }
  function load() {
    const m = window.FG_MANIFEST || { files: [] };
    const files = arr(m.files);
    const failed = [];
    let left = files.length;
    if (!left) { boot(failed); return; }
    files.forEach((src) => {
      const s = document.createElement("script");
      s.src = src + (m.version ? "?v=" + enc(m.version) : "");
      s.async = false;
      s.onload = s.onerror = (ev) => {
        if (ev.type === "error") failed.push(src);
        left -= 1;
        if (left === 0) boot(failed);
      };
      document.body.appendChild(s);
    });
  }
  load();
})();
