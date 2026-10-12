FG.page({
  track: "analytical",
  id: "salary",
  order: 9,
  nav: "Salary & offers",
  kicker: "Analytical & QC · Pay",
  title: "Salary ranges and how to negotiate",
  lede: "What these roles pay in Kolkata and Bangalore, how to read an Indian offer letter, and a simple way to ask for more without awkwardness.",
  blocks: [
    { type: "h2", text: "Indicative ranges, 2025–26", sub: "Annual CTC in ₹ lakh (LPA). Kolkata usually sits in the lower half of each range and Bangalore in the upper half." },
    {
      type: "table",
      head: ["Role", "Range (LPA)", "Notes"],
      rows: [
        ["Chemist / Analyst, food testing, 1–3 years", "2 – 4.5", "Entry roles can start near ₹1.5–2.5 LPA; LC-MS/MS skills push toward the top."],
        ["Chemist / Analyst, 3–6 years", "2.5 – 5", "Global testing networks tend to pay at the upper end."],
        ["Senior Analyst, food testing", "4.5 – 6.2", "Usually 4+ years with method ownership."],
        ["QC Executive, food or FMCG, 0–3 years", "2.5 – 4", "Large FMCG brands pay above this."],
        ["QC Executive, food or FMCG, 3–6 years", "4 – 6.5", ""],
        ["QA Executive, testing lab", "2.5 – 6.5", "Internal-auditor training helps at review time."],
        ["Research Associate, bioanalytical (Bangalore)", "2.4 – 9", "Average around ₹3.2 LPA; senior associates at large CROs reach the top."],
        ["Application Specialist, LC-MS", "3 – 12", "About ₹3–9 LPA in the early years; ₹8–12 LPA with 5+ years."],
        ["Government (central) lab posts", "Pay matrix", "For example, BIS Technical Assistant (Laboratory) is Level 6: ₹35,400–1,12,400 basic a month, plus allowances."]
      ],
      note: "Sources: AmbitionBox and Glassdoor profiles for these titles (2025–26) and published government pay levels. Indicative only; real offers depend on employer, instrument depth and negotiation."
    },

    { type: "h2", text: "CTC is not what you take home", sub: "Indian offers quote cost to company. Check the breakup before comparing." },
    {
      type: "kv",
      items: [
        ["Fixed pay", "Basic, HRA and allowances: what you actually receive each month before deductions."],
        ["Employer PF", "Usually 12% of basic. Part of CTC, but it goes into your PF account."],
        ["Gratuity", "About 4.8% of basic, paid only after five years of service; often counted in CTC."],
        ["Variable or bonus", "Paid only if targets are met. Do not treat it as guaranteed."],
        ["Insurance", "Group medical cover is often listed in CTC but is not cash."],
        ["Your deductions", "Employee PF (12% of basic), professional tax (up to ₹200 a month in both West Bengal and Karnataka) and any income tax."]
      ]
    },
    {
      type: "callout",
      variant: "tip",
      title: "Worked example",
      text: "A ₹4.2 LPA CTC with a basic pay of ₹15,000 a month includes about ₹21,600 of employer PF and about ₹8,700 of gratuity, leaving fixed pay of roughly ₹3.9 lakh. After employee PF (about ₹21,600) and professional tax (about ₹2,400), take-home is roughly **₹30,500 a month**. Little or no income tax is due at this level under the new tax regime."
    },

    { type: "h2", text: "How to negotiate" },
    {
      type: "list",
      items: [
        "Research the range for the role and city first, using the table above, AmbitionBox, Glassdoor and recruiters.",
        "When asked for expectations, give a range whose lower end you would genuinely accept.",
        "Job switches in India commonly come with a 20–30% raise. Moving up from a trainee title, from Kolkata to Bangalore, or into a niche (applications, CRO bioanalysis) can justify more.",
        "Negotiate fixed pay first, then joining bonus, relocation support, designation and the date of the first review.",
        "Ask for the right designation (Chemist, Analyst or Executive rather than Trainee). Titles shape the next move.",
        "Get everything into the written offer before you resign."
      ]
    },
    {
      type: "template",
      title: "Reply to an offer, asking for more",
      body: "Thank you for the offer. I’m excited about the role and the team.\n\nBased on my LC-MS/MS and GC-MS/MS experience across pesticides, mycotoxins and veterinary-drug residues, and the market for similar roles in [city], I was expecting a fixed component of around ₹[X] LPA. Is there flexibility to move closer to that?\n\nI’m keen to make this work and can confirm quickly."
    },

    { type: "h2", text: "Offer checklist" },
    {
      type: "checklist",
      id: "a-offer",
      items: [
        "Designation and grade are right",
        "CTC breakup in writing, with the fixed and variable split",
        "Probation length and how confirmation works",
        "Notice period in the new role",
        { text: "Any service bond or training agreement", note: "Read the amount, duration and exit terms carefully before signing." },
        "Shift pattern, Saturday working and overtime policy",
        "Joining date, relocation support and any joining bonus",
        "Medical insurance and leave policy",
        "Background-verification requirements and documents"
      ]
    }
  ]
});
