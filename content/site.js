/* Site-wide settings, the home page and the About page. */
FG.site({
  updated: "12 Oct 2026",
  tracks: {
    analytical: {
      id: "analytical", label: "Analytical & QC", short: "Analytical", kicker: "Primary track",
      title: "Analytical, QC & residue-testing careers", locations: ["Kolkata", "Bangalore"]
    },
    creative: {
      id: "creative", label: "Interior & Creative", short: "Creative", kicker: "Secondary track",
      title: "Interior design & creative careers", locations: ["Kolkata", "Bangalore", "Remote"]
    }
  }
});

FG.page({
  track: "site",
  id: "home",
  title: "Field Guide",
  docTitle: "Field Guide — Analytical & QC careers in Kolkata and Bangalore",
  hideHead: true,
  blocks: [
    {
      type: "hero",
      kicker: "Career field guide · Kolkata · Bangalore",
      titleHTML: "From the residue lab<br>to the <em>next role</em><span class=\"amp\">.</span>",
      lede: "A focused guide for an analytical chemist with about two and a half years of residue analysis in an NABL-accredited food-testing lab: LC-MS/MS, GC-MS/MS, QuEChERS, mycotoxins, veterinary-drug residues and audit-ready documentation. Every role, employer and job link is filtered for **Kolkata** and **Bangalore**, with a second track into interior design."
    },
    {
      type: "tracks",
      items: [
        {
          href: "#/analytical", kicker: "Primary track", title: "Analytical & QC",
          text: "Residue analyst, LC-MS/MS chemist, QC executive, CRO research associate and more: roles that match this experience, with study notes, interview prep and live openings.",
          tags: ["Kolkata", "Bangalore"], cta: "Start here"
        },
        {
          href: "#/creative", variant: "creative", kicker: "Secondary track", title: "Interior & Creative",
          text: "A realistic, part-time route into interior design: what to learn, which courses and software, how to build a portfolio, and where the jobs are.",
          tags: ["Kolkata", "Bangalore", "Remote"], cta: "Explore"
        }
      ]
    },
    { type: "h2", text: "The profile this guide is built around", sub: "Role-based, not person-based. Use it to sanity-check whether a job is a match." },
    {
      type: "kv",
      items: [
        ["Current role", "Trainee Chemist, residue analysis department of an NABL-accredited (ISO/IEC 17025) food-testing laboratory in Kolkata, since May 2024"],
        ["Instruments", "LC-MS/MS and GC-MS/MS (triple quadrupole), GC-MS with purge & trap"],
        ["Analytes", "Pesticide residues in food; aflatoxins B/G and M1, melamine, vitamins; antibiotic residues (chloramphenicol, nitrofurans, nitroimidazoles, sulfonamides) in fish and feed; PAH, PCB, THM and other contaminants"],
        ["Quality", "NABL, FSSAI and BIS audits, surprise inspections and client audits; SOP compliance; LIMS; data integrity and traceability"],
        ["Education", "M.Sc. Biotechnology · B.Sc. Botany"],
        ["Languages", "English, Bengali"],
        ["Aiming for", "QC or Analytical Chemist roles in testing labs, food & FMCG, botanicals and CROs, in Kolkata or Bangalore"]
      ]
    },
    { type: "h2", text: "If you only have this week", sub: "Four moves that matter more than anything else on this site." },
    {
      type: "cards",
      cols: 2,
      items: [
        { href: "#/analytical/resume", kicker: "Days 1–2", title: "Upgrade the resume", text: "Replace the objective with a keyword-rich summary and rewrite each bullet with matrices, instruments and numbers." },
        { href: "#/analytical/openings", kicker: "Day 2", title: "Set up job alerts", text: "One-click live searches on LinkedIn, Naukri, Indeed and more, already filtered for Kolkata and Bangalore." },
        { href: "#/analytical/employers", kicker: "Day 3", title: "Shortlist 20 employers", text: "Testing labs, food and FMCG, botanicals, CROs, instrument makers and government labs, each with a careers link." },
        { href: "#/analytical/study", kicker: "Daily, 45 minutes", title: "Revise the core topics", text: "LC-MS/MS, GC-MS/MS, QuEChERS, SANTE validation and ISO/IEC 17025. Tick topics off as you go." }
      ]
    },
    {
      type: "callout",
      variant: "tip",
      title: "How to use this guide",
      items: [
        "Press **/** (or Ctrl/⌘ + K) anywhere to search every page, role, question and employer.",
        "Checklists and study topics remember your ticks in this browser only. Nothing is uploaded.",
        "Job postings are a dated snapshot. Use the live-search buttons for anything newer and always confirm on the source site."
      ]
    }
  ]
});

FG.page({
  track: "site",
  id: "about",
  title: "About this guide",
  kicker: "Notes",
  lede: "What this site is, how fresh the information is, and how to update it.",
  blocks: [
    { type: "h2", text: "What it is" },
    { type: "p", text: "A static, role-based career guide. It is written around one profile (an analytical chemist in residue testing who is also drawn to interior design), but it names no one and holds no personal contact details, so it is safe to host publicly." },
    { type: "h2", text: "How fresh is it?" },
    {
      type: "list",
      items: [
        "Snapshot date: **12 October 2026**. Postings expire quickly; treat them as examples of what is out there and use the live-search links for the latest.",
        "Salary figures are indicative ranges from public salary sites and postings. Real offers depend on the employer, instrument depth and negotiation.",
        "Regulations, exam rules and course fees change. Topics link to official sources; check them before relying on a detail."
      ]
    },
    { type: "h2", text: "How to update it" },
    {
      type: "kv",
      items: [
        ["`index.html`", "The single page shell. You rarely need to touch it."],
        ["`content/manifest.js`", "The list of content files to load. Add a line when you create a new file, and bump `version` after any edit so browsers fetch fresh copies."],
        ["`content/site.js`", "Track names, cities, the home page and this page."],
        ["`content/analytical/`", "One file per page of the Analytical & QC track."],
        ["`content/creative/`", "One file per page of the Interior & Creative track."],
        ["`*/openings.js`", "Job postings. Copy an existing entry, edit the fields, save and refresh."],
        ["`assets/`", "Stylesheet, the small renderer script and the icon."]
      ]
    },
    {
      type: "callout",
      title: "Why JavaScript files instead of JSON?",
      text: "Browsers block `fetch()` of local JSON files when you double-click `index.html`. Plain script files load everywhere: on GitHub Pages, on any static host, and straight from your disk."
    },
    { type: "h2", text: "Publish on GitHub Pages" },
    {
      type: "list",
      ordered: true,
      items: [
        "Create a GitHub repository and upload everything in this folder, keeping the folder structure (including the empty `.nojekyll` file).",
        "Open **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.",
        "After a minute, open the address GitHub shows, which looks like `https://username.github.io/repository/`.",
        "To update later, edit a file in `content/`, commit, and refresh the site after a minute or two."
      ]
    }
  ]
});
