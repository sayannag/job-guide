FG.page({
  track: "analytical",
  id: "playbook",
  order: 5,
  nav: "Search playbook",
  kicker: "Analytical & QC · How to search",
  title: "The job-search playbook",
  lede: "How to run the search like a project: which channels work for lab roles, an eight-week plan, a weekly rhythm, message templates, and how to leave your current lab well.",
  blocks: [
    { type: "h2", text: "Channels, ranked for lab roles" },
    {
      type: "cards",
      cols: 2,
      items: [
        { kicker: "Highest hit rate", title: "Referrals and direct outreach", text: "Lab heads and QC managers often hire before they post. Use university alumni, ex-colleagues and LinkedIn to reach them." },
        { kicker: "Most volume", title: "Naukri", text: "Indian testing labs and manufacturers post here most. Keep the profile fresh; recruiters search it every day." },
        { kicker: "MNCs and CROs", title: "LinkedIn", text: "Best for global labs, CROs and instrument companies. Use alerts, apply early, and message the person who posted." },
        { kicker: "Hidden roles", title: "Company career pages", text: "Some roles never reach job boards. Check your top 20 employers every couple of weeks." },
        { kicker: "Bangalore", title: "Walk-in drives", text: "CROs and pharma companies sometimes hold walk-ins for analysts. They are announced on Naukri and LinkedIn." },
        { kicker: "Slow but steady", title: "Government and institute notices", text: "FSSAI, BIS, EIC, ICAR and university project posts. See the [Government route](#/analytical/government)." }
      ]
    },
    {
      type: "callout",
      title: "About consultancies",
      text: "Placement consultants can help for mid-level roles. Genuine consultants are paid by the employer. Never pay a candidate fee."
    },

    { type: "h2", text: "An eight-week plan", sub: "Tick items as you go; progress is saved in this browser." },
    {
      type: "steps",
      id: "a-sprint",
      items: [
        { when: "Week 1", title: "Get the assets ready", checks: ["Resume rewritten with summary, grouped skills and numbers", "LinkedIn and Naukri profiles updated to match", "Tracker sheet created (columns below)", "Twenty target employers shortlisted"] },
        { when: "Week 2", title: "Switch on the pipeline", checks: ["Alerts saved on LinkedIn, Naukri and Indeed for four or five keywords in both cities", "First ten applications sent", "Five outreach messages sent to lab heads, QC managers or alumni"] },
        { when: "Weeks 3–4", title: "Volume, with quality", checks: ["Ten to fifteen tailored applications a week", "Five outreach messages a week", "Study plan weeks 1–2 completed", "Followed up on applications older than seven days"] },
        { when: "Weeks 5–6", title: "Interviews", checks: ["Introduction rehearsed until it sounds natural", "Two mock interviews done", "Calculations revised for written tests", "Thank-you note sent after every interview"] },
        { when: "Weeks 7–8", title: "Offers and the move", checks: ["Offers compared on fixed pay, not only CTC", "Negotiated once, politely, with a specific number", "Resignation handled cleanly; relieving and experience letters requested", "Documents ready for background verification"] }
      ]
    },

    { type: "h2", text: "A weekly rhythm", sub: "About an hour on weekdays, more at the weekend." },
    {
      type: "table",
      head: ["Day", "Focus"],
      rows: [
        ["Monday", "Review new postings from alerts; apply to the best three to five."],
        ["Tuesday", "Outreach: five messages to lab heads, alumni or recruiters."],
        ["Wednesday", "Study one topic and practise five interview questions aloud."],
        ["Thursday", "Check company career pages and government notices."],
        ["Friday", "Follow-ups; update the tracker."],
        ["Weekend", "One mock interview or a long study block; plan the next week."]
      ]
    },

    { type: "h2", text: "Track everything", sub: "A simple Google Sheet or Excel file with these columns is enough." },
    {
      type: "chips",
      items: ["Company", "Role", "City", "Source", "Applied on", "Contact", "Status", "Next step and date", "Notes"]
    },

    { type: "h2", text: "Message templates", sub: "Short, specific and polite. Replace everything in brackets." },
    {
      type: "template",
      title: "LinkedIn connection note (under 300 characters)",
      body: "Hi [Name], I’m a residue analyst (LC-MS/MS, GC-MS/MS) in an NABL-accredited food lab in Kolkata, exploring roles in [city]. I’d value connecting and following your team’s work."
    },
    {
      type: "template",
      title: "Referral request to an alum or ex-colleague",
      body: "Hi [Name], hope you’re well. I’m an analytical chemist in residue analysis (LC-MS/MS and GC-MS/MS) at an NABL-accredited food lab in Kolkata. I noticed [Company] is hiring for [Role], and my experience with [pesticide residues / mycotoxins / antibiotic residues] seems a close fit. Would you be comfortable referring me, or pointing me to the hiring manager? I can send my resume. Thank you!"
    },
    {
      type: "template",
      title: "Note to a lab head or QC manager",
      body: "Dear [Name],\n\nI’m an analytical chemist with over two years of LC-MS/MS and GC-MS/MS residue analysis in an NABL-accredited food-testing laboratory, covering pesticides, mycotoxins and veterinary-drug residues.\n\nI’m exploring roles in [city] and admire [Company]’s work in [area]. If your team expects openings for analysts, I’d be grateful to be considered. My resume is attached.\n\nThank you for your time,\n[Your name]"
    },
    {
      type: "template",
      title: "Follow-up, 7–10 days after applying",
      body: "Dear [Name],\n\nI applied for the [Role] position (ref. [ID]) on [date] and wanted to confirm my continued interest. My experience with [two specific requirements from the posting] matches the role closely. Please let me know if any further information would help.\n\nThank you,\n[Your name]"
    },
    {
      type: "template",
      title: "Thank-you note after an interview",
      body: "Dear [Name],\n\nThank you for speaking with me today about the [Role]. I enjoyed learning about [something specific they mentioned]. Our conversation about [topic] strengthened my interest, and I’m confident my LC-MS/MS and audit experience would help the team.\n\nI look forward to hearing from you.\n[Your name]"
    },

    { type: "h2", text: "Spot fake offers" },
    {
      type: "callout",
      variant: "warn",
      title: "Walk away if you see any of these",
      items: [
        "Any fee for registration, training, interviews, equipment or an offer letter.",
        "An offer without an interview, or interviews held only over chat.",
        "A personal email address (Gmail, Yahoo) claiming to be HR at a large company.",
        "Pressure to share Aadhaar, PAN or bank details before a verified written offer.",
        "When unsure, check the email domain and call the company’s official number."
      ]
    },

    { type: "h2", text: "Leaving your current lab well" },
    {
      type: "list",
      items: [
        "Before accepting, check your notice period and any training bond in your appointment letter.",
        "Resign in writing only after you hold a signed offer letter.",
        "If the new employer needs you sooner, ask for early release; a buy-out (paying salary in lieu of notice) is sometimes possible.",
        "Collect your relieving letter, experience letter, last three payslips and Form 16. Background checks and future negotiations need them.",
        "Hand over cleanly: methods, logbooks, pending samples. Lab circles are small and references matter."
      ]
    },

    { type: "h2", text: "If the move is to Bangalore" },
    {
      type: "list",
      items: [
        "Budget for a deposit and a month’s rent before the first salary arrives; deposits are often several months’ rent.",
        "Live near the lab cluster. Cross-city commutes can take over an hour each way.",
        "Ask about relocation support or a joining bonus during negotiation.",
        "Shared flats and PGs near industrial areas usually cost less than central neighbourhoods."
      ]
    }
  ]
});
