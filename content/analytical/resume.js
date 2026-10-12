FG.page({
  track: "analytical",
  id: "resume",
  order: 6,
  nav: "Resume & LinkedIn",
  kicker: "Analytical & QC · Resume",
  title: "Make the resume match the experience",
  lede: "The work on this resume is stronger than the way it is written. These rewrites keep every claim true while making it specific, searchable and confident. Fill the [brackets] only with numbers you can defend in an interview.",
  print: true,
  blocks: [
    { type: "h2", text: "The fixes that matter most" },
    {
      type: "checklist",
      id: "a-resume-fixes",
      items: [
        { text: "Replace the Objective with a three-line professional summary.", note: "Lead with years, lab type, instruments and analytes. Template below." },
        { text: "Rebuild Skills into grouped technical skills.", note: "Instruments, sample prep, analytes, quality systems, regulations and software. Today the section lists only LIMS, Excel, Office and analytical skills." },
        { text: "Add numbers to every experience bullet.", note: "Samples per week, analytes in the method, matrices covered, audits supported." },
        { text: "Proofread names and acronyms.", note: "The employer’s name and acronym must match its official form exactly. A transposed acronym is exactly the kind of slip a QC reviewer notices." },
        { text: "Swap “assisted” and “under supervision” for what you do yourself.", note: "After two-plus years, describe ownership." },
        { text: "Cut the M.Sc. project to two lines and keep it below experience.", note: "Keep it longer only for biotech or bioinformatics roles." },
        { text: "Replace older webinars with relevant training.", note: "ISO/IEC 17025 internal auditor, vendor instrument courses, FSSAI training. See [Upskilling](#/analytical/upskill)." },
        { text: "Add a location line: Kolkata · open to Bengaluru." },
        { text: "Use the same headline on the resume, LinkedIn and Naukri." },
        { text: "Export a text-based PDF named like Name-Analytical-Chemist.pdf.", note: "LaTeX PDFs are fine as long as the text can be selected and copied." }
      ]
    },

    { type: "h2", text: "Professional summary" },
    {
      type: "template",
      title: "Replace the Objective with this",
      body: "Analytical Chemist with 2+ years in the residue analysis department of an NABL-accredited (ISO/IEC 17025:2017) food-testing laboratory. Hands-on with LC-MS/MS and GC-MS/MS for pesticide multi-residue analysis, mycotoxins, veterinary-drug residues and environmental contaminants across food, feed, fish and water. Experienced in QuEChERS and dSPE sample preparation, matrix-matched calibration, LIMS and audit-ready documentation for NABL, FSSAI and BIS. M.Sc. Biotechnology."
    },

    { type: "h2", text: "Headline options", sub: "For the top of the resume, the LinkedIn headline and the Naukri resume headline." },
    {
      type: "list",
      items: [
        "Analytical Chemist | Pesticide & Veterinary-Drug Residues | LC-MS/MS · GC-MS/MS | NABL (ISO/IEC 17025) Food Testing",
        "Residue Analyst — LC-MS/MS & GC-MS/MS | QuEChERS · Mycotoxins · Antibiotic Residues | FSSAI · NABL · BIS",
        "QC / Analytical Chemist (Food Safety) | Chromatography & Mass Spectrometry | Kolkata · Open to Bengaluru"
      ]
    },

    { type: "h2", text: "Bullet rewrites", sub: "Each current bullet, rewritten to show scope, technique and scale." },
    {
      type: "compare",
      beforeLabel: "Current",
      afterLabel: "Rewrite",
      items: [
        {
          before: "Performed routine analysis of pesticide residues in various food matrices using LC-MS/MS and GC-MS/MS in accordance with approved test methods.",
          after: "Analyse pesticide residues in [N]+ food matrices (cereals, spices, tea, fruit and vegetables) by LC-MS/MS and GC-MS/MS: QuEChERS extraction, dSPE clean-up, matrix-matched calibration and SANTE identification checks, for about [X] samples a week within turnaround time.",
          why: "Names matrices, techniques and volume. Recruiters search for QuEChERS, SANTE and matrix-matched."
        },
        {
          before: "Assisted in the analysis of mycotoxins including Aflatoxins (B & G), Aflatoxin M1, Melamine, and Vitamins in food samples using LC-MS/MS.",
          after: "Quantify aflatoxins B1, B2, G1, G2 and M1, melamine and vitamins in food and dairy by LC-MS/MS at low µg/kg levels, using [immunoaffinity clean-up / isotope-labelled internal standards].",
          why: "“Assisted” undersells two years of work. State what you do yourself."
        },
        {
          before: "Conducted analysis of antibiotic residues (CAP, NFM, NMZ, SFD) in fish and animal feed samples through LC-MS/MS under supervised laboratory conditions.",
          after: "Run veterinary-drug residue methods for chloramphenicol, nitrofuran metabolites, nitroimidazoles and sulfonamides in fish and feed by LC-MS/MS at sub-µg/kg levels for export-compliance testing.",
          why: "Spell out abbreviations once for search systems and non-specialist recruiters, and drop “under supervised conditions”."
        },
        {
          before: "Operated and supported routine testing on GC-MS (with purge & trap) and GC-MS/MS for analysis of PAH, PCB, THM, and multi-residue contaminants.",
          after: "Operate GC-MS with purge and trap (THMs and VOCs in water) and GC-MS/MS (PAHs, PCBs, multi-residue contaminants), including routine maintenance: liner and septum changes, column trimming and tuning.",
          why: "Maintenance shows ownership of the instrument, not just its use."
        },
        {
          before: "Supported laboratory operations during government and regulatory audits including NABL, FSSAI, BIS, surprise inspections, and client audits by ensuring documentation and SOP compliance.",
          after: "Supported [N] NABL (ISO/IEC 17025:2017), FSSAI and BIS assessments plus client audits and surprise inspections: maintained SOP-compliant records, reference-standard traceability and equipment logs for the residue section.",
          why: "Naming the standard and the records you kept makes the claim concrete."
        },
        {
          before: "Collaborated with laboratory and QA teams to record, verify, and manage analytical data, contributing to data integrity, traceability, and quality assurance in food safety testing.",
          after: "Record and review analytical data in LIMS with QA (calibration acceptance, blanks, recoveries, ion ratios), keeping results traceable and audit-ready in line with ALCOA+ data-integrity principles.",
          why: "Lists the checks you actually perform."
        }
      ]
    },

    { type: "h2", text: "A stronger skills section" },
    {
      type: "template",
      title: "Technical skills",
      body: "Instruments: LC-MS/MS (triple quadrupole), GC-MS/MS, GC-MS with purge & trap [add the makes and models you have used]\nSoftware: [instrument data system], LIMS, MS Excel (pivot tables, LINEST, charts), MS Office\nSample preparation: QuEChERS (citrate and acetate buffered), dSPE, SPE, immunoaffinity clean-up, derivatisation, liquid–liquid extraction\nAnalytes: pesticide residues, mycotoxins (aflatoxins B/G/M1), veterinary-drug residues, melamine, vitamins, PAHs, PCBs, THMs and VOCs\nQuality: ISO/IEC 17025:2017, NABL, internal QC and recoveries, method verification, measurement uncertainty, proficiency testing, SOPs, data integrity (ALCOA+)\nRegulations: FSSAI Contaminants, Toxins and Residues Regulations, BIS (IS 10500, IS 14543), APEDA, EU MRLs, SANTE/11312/2021",
      note: "Only list software, makes and methods you have actually used. Interviewers will ask."
    },

    { type: "h2", text: "Keywords recruiters search for", sub: "Make sure the important ones appear naturally in the summary, skills and bullets." },
    {
      type: "chips",
      items: ["LC-MS/MS", "GC-MS/MS", "triple quadrupole", "MRM", "QuEChERS", "dSPE", "SPE", "pesticide residue analysis", "multi-residue method", "mycotoxins", "aflatoxin", "veterinary drug residues", "chloramphenicol", "nitrofurans", "method validation", "method verification", "SANTE/11312/2021", "ISO/IEC 17025:2017", "NABL", "FSSAI", "BIS", "APEDA", "LIMS", "data integrity", "ALCOA+", "measurement uncertainty", "proficiency testing", "internal quality control", "CAPA", "SOP", "purge and trap", "PAH", "PCB", "VOC", "THM", "matrix-matched calibration", "internal standard"]
    },

    { type: "h2", text: "LinkedIn" },
    {
      type: "template",
      title: "About section",
      body: "I’m an analytical chemist working in residue analysis at an NABL-accredited food-testing laboratory in Kolkata.\n\nWhat I work on:\n• Pesticide multi-residue analysis by LC-MS/MS and GC-MS/MS\n• Mycotoxins (aflatoxins B, G and M1), melamine and vitamins\n• Veterinary-drug residues (chloramphenicol, nitrofurans, nitroimidazoles, sulfonamides) in fish and feed\n• PAHs, PCBs and THMs by GC-MS/MS and purge-and-trap GC-MS\n\nI care about getting results right: sensible clean-up choices, matrix-matched calibration, identification criteria, and audit-ready documentation for NABL, FSSAI and BIS.\n\nM.Sc. Biotechnology · B.Sc. Botany\n\nOpen to QC and analytical chemist roles in Kolkata and Bengaluru."
    },
    {
      type: "checklist",
      id: "a-linkedin",
      items: [
        "Headline uses one of the options above.",
        "Professional photo and a simple banner (a lab or instrument image works).",
        "About section from the template, edited into your own voice.",
        "Experience bullets mirror the rewritten resume.",
        "Top skills pinned: LC-MS/MS, GC-MS/MS, Pesticide Residue Analysis.",
        "Open to Work set to recruiters only, with target titles and both cities.",
        "Custom profile URL.",
        "Follow 20 target employers and turn on their job alerts.",
        "Connect with 5–10 lab managers, QC heads or recruiters a week, each with a one-line note.",
        "Comment on or share one food-safety or lab post a week."
      ]
    },

    { type: "h2", text: "Naukri" },
    {
      type: "checklist",
      id: "a-naukri",
      items: [
        "Resume headline matches the LinkedIn headline.",
        "15–20 key skills added: instruments, techniques, analytes and regulations.",
        "Profile summary pasted from the resume summary.",
        "Preferred locations set to Kolkata and Bengaluru.",
        "Current salary, expected salary and notice period filled in honestly.",
        "Resume uploaded as a PDF.",
        { text: "Profile refreshed at least twice a week.", note: "Recruiters often sort by recently active profiles, so small regular edits help." },
        "Job alerts saved for the main keywords in both cities."
      ]
    }
  ]
});
