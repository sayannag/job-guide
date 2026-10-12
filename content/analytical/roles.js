FG.page({
  track: "analytical",
  id: "roles",
  order: 2,
  nav: "Target roles",
  kicker: "Analytical & QC · Roles",
  title: "Roles that fit this experience",
  lede: "Twelve roles in Kolkata and Bangalore, ranked by how directly the current residue-analysis work transfers. Job titles vary a lot between employers, so each card lists the names the same job appears under.",
  blocks: [
    {
      type: "callout",
      variant: "tip",
      title: "Read the fit badges like this",
      items: [
        "**Strong fit:** apply now; the resume already matches most requirements.",
        "**Good fit:** apply now, but prepare one or two gap topics before interviews.",
        "**Stretch:** worth targeting in 6–18 months, or now if a posting is flexible on experience."
      ]
    },
    {
      type: "roles",
      items: [
        {
          id: "role-residue",
          title: "Analyst / Chemist — Pesticide Residues",
          aka: ["Residue Analyst", "Chemist – LC-MS/MS", "Executive – Chemical Testing", "Senior Analyst – Pesticides"],
          fit: "strong",
          what: "Runs multi-residue methods for hundreds of pesticides in fruit, vegetables, cereals, spices, tea and processed food: QuEChERS extraction, LC-MS/MS and GC-MS/MS acquisition, data review and reporting against FSSAI, EU and Codex limits.",
          why: ["This is the current job, so the move is about title, scope and pay", "Hands-on on both LC-MS/MS and GC-MS/MS", "Already audit-ready under NABL and FSSAI"],
          gaps: ["Own a method end to end: validation, uncertainty, PT follow-up", "Put throughput and analyte counts on the resume", "Know the SANTE identification criteria by heart"],
          where: ["Global testing networks (largest presence in Bangalore)", "Private NABL food labs in Kolkata", "APEDA- and Tea Board-listed export labs"],
          pay: "about ₹2.5–4.5 LPA at 2–3 years; more for Senior Analyst",
          search: "pesticide residue analyst"
        },
        {
          id: "role-vetdrug",
          title: "Veterinary-Drug Residue Analyst",
          aka: ["Antibiotic Residue Analyst", "Chemist – Seafood Testing", "Analyst – Residue Monitoring"],
          fit: "strong",
          what: "Screens and confirms banned and restricted antibiotics (chloramphenicol, nitrofuran metabolites, nitroimidazoles) plus sulfonamides, tetracyclines and quinolones in shrimp, fish, honey, eggs, milk and feed at sub-µg/kg levels, mostly for export certification.",
          why: ["Direct experience with chloramphenicol, nitrofurans, nitroimidazoles and sulfonamides", "West Bengal is a major seafood and honey sourcing region", "A niche skill few candidates can show"],
          gaps: ["Nitrofuran derivatisation chemistry (2-nitrobenzaldehyde)", "EU reference points for action under Regulation (EU) 2019/1871", "Screening vs confirmation, decision limits (CCα)"],
          where: ["Export-focused private labs", "Export Inspection Agency laboratory, Kolkata (government)", "Seafood exporters with QC labs"],
          pay: "Similar to residue analyst roles; the niche helps in negotiation",
          search: "antibiotic residue LC-MS/MS"
        },
        {
          id: "role-mycotoxin",
          title: "Mycotoxin & Contaminants Analyst",
          aka: ["Analyst – Contaminants", "Chemist – Mycotoxins", "Food Safety Analyst"],
          fit: "strong",
          what: "Tests aflatoxins, ochratoxin A and other mycotoxins, plus contaminants and adulterants such as melamine and PAHs, in nuts, spices, cereals, dairy and feed, using immunoaffinity clean-up with LC-MS/MS or HPLC with fluorescence detection.",
          why: ["Hands-on aflatoxin B/G, M1 and melamine by LC-MS/MS", "PAH work on GC-MS/MS", "Spices, nuts and dairy are tested daily in both cities"],
          gaps: ["Immunoaffinity columns and HPLC-FLD with derivatisation", "Limits in Regulation (EU) 2023/915 and the FSSAI contaminants regulations", "Safe handling and decontamination of aflatoxin standards"],
          where: ["Food testing labs", "Spice, dairy and nut processors with in-house labs", "Feed manufacturers"],
          pay: "Similar to residue analyst roles",
          search: "mycotoxin analyst"
        },
        {
          id: "role-water",
          title: "Environmental & Water Testing Chemist",
          aka: ["Chemist – Water Testing", "GC-MS Analyst – VOCs", "Environmental Analyst"],
          fit: "good",
          what: "Analyses drinking, packaged and waste water and soil: VOCs and THMs by purge-and-trap GC-MS, PAHs, PCBs and pesticides by GC-MS/MS, plus metals and wet chemistry against IS 10500, IS 14543 and pollution-control norms.",
          why: ["Purge-and-trap GC-MS experience is uncommon", "PAH, PCB and THM already on the resume", "Steady demand from packaged-water plants and pollution-control compliance"],
          gaps: ["IS 3025 test methods and the IS 10500 limits table", "ICP-MS or ICP-OES and wet-chemistry basics", "Sampling and chain of custody"],
          where: ["Environmental and water testing labs", "Packaged drinking water and beverage plants", "BIS and pollution-control board labs (government)"],
          pay: "Often slightly below food testing at the same level",
          search: "GC-MS chemist water testing"
        },
        {
          id: "role-qc-food",
          title: "QC Chemist / QC Executive — Food, Tea, Spices & FMCG",
          aka: ["QC Executive", "Quality Control Chemist", "Lab Chemist – Food"],
          fit: "good",
          what: "Industry-side quality control: raw-material and finished-product testing against specifications, certificate-of-analysis review, and managing outside labs for residue and contaminant testing.",
          why: ["Knows exactly what outside labs do and how to read their reports", "Kolkata has tea, FMCG and food companies; Bangalore has big FMCG R&D", "Usually more regular hours than commercial testing labs"],
          gaps: ["Routine wet chemistry and HPLC (moisture, fat, acid value and so on)", "FSSAI product standards and labelling rules", "GMP, HACCP and FSSC 22000 basics"],
          where: ["Tea packers and blenders (Kolkata)", "FMCG and packaged-food manufacturers", "Spice and ready-to-eat processors"],
          pay: "about ₹3–6 LPA at executive level; large FMCG pays more",
          search: "QC chemist food"
        },
        {
          id: "role-botanicals",
          title: "QC Analyst — Botanical Extracts & Nutraceuticals",
          aka: ["Analyst – Herbal QC", "QC Executive – Nutraceuticals", "Analytical Chemist – Phytochemicals"],
          fit: "good",
          what: "Tests herbal raw materials, extracts and supplements: marker compounds by HPLC or HPTLC, pesticide residues (USP <561>, Ph. Eur. 2.8.13), heavy metals, aflatoxins and microbial limits, mostly for export to the US and Europe.",
          why: ["A botany degree plus residue testing is a rare combination", "Pesticide and aflatoxin testing of botanicals is routine for export", "Bangalore is a hub for extract and supplement makers"],
          gaps: ["HPLC/HPTLC marker assays and pharmacopoeial monographs", "GMP documentation, deviations and change control", "Heavy metals by ICP-MS (awareness)"],
          where: ["Herbal extract and nutraceutical manufacturers in Bangalore", "Contract labs serving them"],
          pay: "about ₹3–6 LPA at 2–4 years",
          search: "QC analyst herbal extracts"
        },
        {
          id: "role-glp",
          title: "GLP Residue Chemistry Analyst (Agrochemicals)",
          aka: ["Research Associate – Residue Chemistry", "Scientist – Analytical (Agrochemicals)", "Study Analyst – GLP"],
          fit: "good",
          what: "Runs residue, storage-stability and environmental-fate studies for pesticide registration (EU, US EPA, India) under OECD Good Laboratory Practice: method validation, field-trial samples and meticulous raw-data documentation.",
          why: ["Same chemistry (LC-MS/MS, GC-MS/MS) applied to regulatory studies", "Bangalore hosts GLP-certified agrochemical labs and R&D centres", "Strong documentation habits transfer directly"],
          gaps: ["OECD GLP principles, study plans and the role of the study director", "Validation for registration studies (EU and OECD guidance)", "Even stricter documentation than routine testing"],
          where: ["GLP-certified contract labs in Bangalore", "Agrochemical company R&D centres"],
          pay: "about ₹3–6 LPA at 2–4 years (limited public data)",
          search: "GLP residue analysis"
        },
        {
          id: "role-qa",
          title: "Quality Assurance Executive — ISO/IEC 17025 Lab",
          aka: ["QA Executive", "Quality Officer", "Quality Manager (junior)"],
          fit: "good",
          what: "Keeps the lab accredited: document control, internal audits, proficiency-testing schedules, measurement-uncertainty files, corrective actions, management review, and hosting NABL assessments.",
          why: ["Has already supported NABL, FSSAI and BIS audits", "A bench background makes QA credible with analysts", "Every accredited lab needs QA staff"],
          gaps: ["ISO/IEC 17025:2017 internal auditor training", "Writing SOPs, quality-manual sections and CAPA reports", "PT evaluation (z-scores) and uncertainty budgets"],
          where: ["Any NABL-accredited testing lab", "Food and pharma company QA departments"],
          pay: "about ₹3–5.5 LPA at 2–4 years",
          search: "quality assurance executive ISO 17025"
        },
        {
          id: "role-bioanalytical",
          title: "Research Associate — Bioanalytical LC-MS/MS (CRO)",
          aka: ["Research Associate – Bioanalytical", "Scientist – DMPK / Bioanalysis", "Analyst – BA/BE"],
          fit: "stretch",
          what: "Develops and runs LC-MS/MS methods for drugs and metabolites in plasma and tissue for discovery, preclinical and clinical studies, under GLP or GCP and the ICH M10 guideline.",
          why: ["LC-MS/MS skills transfer directly", "The biotechnology degree fits the biology side", "Bangalore has several large CROs"],
          gaps: ["ICH M10 validation (accuracy within ±15%, incurred-sample reanalysis)", "Plasma sample prep: protein precipitation, SPE, LLE", "Pharma documentation, GLP and audit trails"],
          where: ["Contract research organisations in Bangalore", "Pharma discovery and DMPK units"],
          pay: "about ₹2.5–6 LPA at Research Associate levels (Bangalore average near ₹3.2 LPA)",
          search: "research associate bioanalytical LC-MS"
        },
        {
          id: "role-applications",
          title: "Application Specialist — LC-MS / GC-MS",
          aka: ["Application Chemist", "Field Application Scientist", "Applications Engineer"],
          fit: "stretch",
          what: "An instrument-company role: demonstrates and sets up LC-MS/MS and GC-MS/MS methods for customers, trains users, troubleshoots, and supports sales with technical proposals. Travel is common.",
          why: ["Hands-on with both triple-quadrupole platforms", "Food safety is a large application segment", "Higher pay and broad exposure"],
          gaps: ["Usually asks for 3–5+ years and deep instrument knowledge", "Presentation and customer-handling skills", "Willingness to travel across the region"],
          where: ["Instrument makers and their distributors, with offices in Bangalore and Kolkata"],
          pay: "about ₹3–9 LPA in the first years; ₹8–12 LPA at 5+ years",
          search: "application specialist LC-MS"
        },
        {
          id: "role-regulatory",
          title: "Food Safety & Regulatory Executive",
          aka: ["Regulatory Affairs Executive – Food", "Food Safety Executive", "Compliance Executive"],
          fit: "stretch",
          what: "Handles FSSAI licensing and product approvals, label compliance, specifications and export documentation for food and supplement companies.",
          why: ["Knows FSSAI, BIS and APEDA requirements from the lab side", "A route off the bench, if that appeals"],
          gaps: ["FSSAI labelling, product-standards and health-supplement regulations", "Dossier and documentation writing", "Possibly a short course in food regulation"],
          where: ["Food, nutraceutical and FMCG companies", "Regulatory consultancies"],
          pay: "about ₹3–6 LPA at entry to mid level",
          search: "food regulatory executive FSSAI"
        },
        {
          id: "role-government",
          title: "Government Analyst / Technical Officer",
          aka: ["Food Analyst", "Junior Analyst", "Technical Assistant (Laboratory)", "Laboratory Assistant"],
          fit: "good",
          what: "Public-sector lab and regulatory posts at FSSAI, BIS, the Export Inspection Agency, the customs laboratory, state food labs and research institutes. Entry is by exam or notified recruitment, so timelines run to months.",
          why: ["M.Sc. Biotechnology is an eligible qualification for the FSSAI analyst exams", "Kolkata hosts several central laboratories", "Job security and structured pay"],
          gaps: ["Exam preparation and long timelines", "Watching notifications closely", "Some posts have age limits or need specific degrees"],
          where: ["Central and state food labs", "Standards, export-inspection and customs labs", "ICAR and university residue labs (project posts)"],
          pay: "Pay-matrix based. See the [Government route](#/analytical/government)."
        }
      ]
    },
    { type: "h2", text: "Keywords that surface these jobs", sub: "Titles are inconsistent, so search several variants. Use them in alerts and in the resume headline." },
    {
      type: "chips",
      items: ["LC-MS/MS", "GC-MS/MS", "pesticide residue", "residue analyst", "food testing chemist", "analytical chemist", "QC chemist", "QC executive", "mycotoxin", "antibiotic residue", "NABL", "ISO 17025", "food safety laboratory", "research associate bioanalytical", "GLP", "application specialist mass spectrometry", "herbal extracts QC", "water testing GC-MS"]
    },
    {
      type: "callout",
      title: "A note on pay figures",
      text: "Ranges are indicative for Kolkata and Bangalore from public salary data and postings (2025–26). Bangalore is usually at the top of each range. See [Salary & offers](#/analytical/salary) for sources and negotiation."
    }
  ]
});
