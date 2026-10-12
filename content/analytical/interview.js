FG.page({
  track: "analytical",
  id: "interview",
  order: 8,
  nav: "Interview prep",
  kicker: "Analytical & QC · Interviews",
  title: "Interview questions, with model answers",
  lede: "The questions residue, QC and CRO interviewers actually ask, grouped by theme. Read an answer, close it, and say your own version out loud. Answers are short on purpose; add your own lab’s details.",
  print: true,
  blocks: [
    { type: "h2", text: "Your 90-second introduction" },
    {
      type: "template",
      title: "Tell me about yourself",
      body: "I’m an analytical chemist in the residue analysis department of an NABL-accredited food-testing laboratory in Kolkata, where I’ve worked since May 2024.\n\nDay to day I run pesticide multi-residue analysis on LC-MS/MS and GC-MS/MS, from QuEChERS extraction through to data review in LIMS. I also handle mycotoxins such as aflatoxins B, G and M1, melamine and vitamins; antibiotic residues such as chloramphenicol and nitrofuran metabolites in fish and feed; and PAH, PCB and THM analysis on GC-MS with purge and trap.\n\nI’ve supported NABL, FSSAI and BIS audits, so I’m used to working strictly to SOPs with traceable, audit-ready records.\n\nBefore this I completed an M.Sc. in Biotechnology and a B.Sc. in Botany.\n\nI’m now looking for a role with more ownership, such as method validation and a wider range of matrices, and [company]’s work in [their area] is a strong match for that.",
      note: "Swap the last line for each company. Practise until it takes about 90 seconds without reading."
    },

    { type: "h2", text: "Questions by theme" },
    {
      type: "qa",
      groups: [
        {
          title: "Your story",
          items: [
            { q: "Why do you want to leave your current lab?", a: "Keep it forward-looking. You have built a solid base in routine residue analysis and now want broader responsibility: method validation, more matrices, a larger lab or a clearer growth path. Never criticise your current employer." },
            { q: "Why this company?", a: "Name something specific: their accreditation scope, a matrix or market they serve, their instruments, or a recent expansion. Read their website, LinkedIn posts and NABL scope before the interview." },
            { q: "Your title is Trainee Chemist. What do you do independently?", a: "Answer with scope, not title: the methods you run end to end, samples per week, instruments you operate and maintain, data you review, and audit tasks you own. Numbers beat titles." }
          ]
        },
        {
          title: "LC-MS/MS and GC-MS",
          items: [
            { q: "How does a triple quadrupole work in MRM mode?", a: "Q1 isolates the precursor ion, the collision cell fragments it, and Q3 isolates a chosen product ion. Monitoring that precursor → product transition filters out almost everything else, which gives selectivity and sensitivity. Two transitions per compound let you confirm identity through the ion ratio." },
            { q: "ESI or APCI: when would you use each?", a: "ESI for polar, ionisable, heat-sensitive compounds such as most pesticides and veterinary drugs. APCI for smaller, less polar, thermally stable compounds that ionise poorly by ESI. ESI is more prone to matrix suppression." },
            { q: "Why are some compounds run on GC and others on LC?", a: "GC needs volatile, thermally stable compounds: organochlorines, pyrethroids, many organophosphates, PAHs and PCBs. LC-MS/MS handles polar, non-volatile or heat-sensitive ones: carbamates, neonicotinoids, many fungicides and veterinary drugs. Many pesticides work on both, so choose by sensitivity and robustness." },
            { q: "What is matrix-induced enhancement in GC?", a: "Matrix components block active sites in the liner and column, so sensitive analytes degrade or adsorb less in matrix than in pure solvent and give higher responses. Matrix-matched calibration or analyte protectants compensate for it." }
          ]
        },
        {
          title: "Sample preparation",
          items: [
            {
              q: "Explain QuEChERS step by step.",
              a: "Describe each step and why it is there:",
              list: [
                "Homogenise and weigh about 10 g; add water to dry samples.",
                "Add acetonitrile and internal standard, then shake.",
                "Add salts (MgSO4 with NaCl, buffered with citrate or acetate) to separate the water from the acetonitrile.",
                "Centrifuge, then clean an aliquot by dSPE with MgSO4 and PSA, plus C18 or GCB if the matrix needs it.",
                "Centrifuge again, then dilute for LC or prepare for GC."
              ]
            },
            { q: "How do you handle tea or spices?", a: "Use a smaller sample with added water, a stronger or combined clean-up (PSA, C18, limited GCB), more dilution where sensitivity allows, and matrix-matched calibration in the same matrix. Watch for interferences and confirm with ion ratios." },
            { q: "How are aflatoxins cleaned up?", a: "Extract with methanol–water, dilute, and pass the extract through an immunoaffinity column whose antibodies bind the aflatoxins. Wash, elute with methanol, and analyse by HPLC-FLD with derivatisation or by LC-MS/MS. Protect everything from light." }
          ]
        },
        {
          title: "Validation, QC and uncertainty",
          items: [
            { q: "What are the SANTE acceptance criteria for validation?", a: "Mean recovery 70–120% with RSD ≤ 20% at each spike level including the LOQ, and calibration residuals within ±20%. For identification: retention time within ±0.1 min and ion ratio within ±30% of the standards in the same sequence." },
            { q: "What is the difference between validation and verification?", a: "Validation proves that a new or modified method is fit for purpose by measuring its performance. Verification confirms that your lab achieves the published performance of an already-validated standard method." },
            { q: "A result is 0.012 mg/kg and the MRL is 0.01 mg/kg. Is it non-compliant?", a: "Not proven. With the default 50% expanded uncertainty, U = 0.006 mg/kg and the result minus U is 0.006 mg/kg, which is below the MRL. Report the result with its uncertainty; the sample is not clearly non-compliant." },
            { q: "Today’s spiked recovery came out at 45%. What do you do?", a: "Do not report the batch. Check the calculation, spiking solution, internal-standard response and instrument performance, then re-extract. If it repeats, treat it as nonconforming work: find the root cause, correct it, and check whether earlier results are affected." },
            { q: "How do you interpret a PT z-score?", a: "z = (your result − assigned value) ÷ the standard deviation for proficiency assessment. |z| ≤ 2 is satisfactory, between 2 and 3 is questionable and needs investigation, and 3 or more is unsatisfactory and needs root-cause analysis and corrective action." }
          ]
        },
        {
          title: "ISO/IEC 17025, audits and data integrity",
          items: [
            { q: "What did you do during NABL, FSSAI and BIS audits?", a: "Be specific: prepared records, showed traceability of standards (certificates, expiry dates, preparation logs), performed tests while being witnessed, answered questions on SOPs, and helped close findings. If a finding touched your area, explain the corrective action." },
            { q: "What is a vertical audit?", a: "The assessor takes one test report and traces it back through raw data, calculations, equipment calibration status, reference standards, the method SOP and the analyst’s training records." },
            { q: "What does ALCOA+ mean?", a: "Data must be attributable, legible, contemporaneous, original and accurate, plus complete, consistent, enduring and available. In practice: personal log-ins, audit trails on, nothing overwritten, and every change explained." },
            { q: "When is manual integration acceptable?", a: "Only when automatic integration is clearly wrong (a shoulder or baseline problem, for example), following the SOP, with the reason recorded and a second person reviewing it. Never to make a result pass." }
          ]
        },
        {
          title: "Regulations",
          items: [
            { q: "Which Indian regulation sets pesticide MRLs?", a: "The FSS (Contaminants, Toxins and Residues) Regulations, 2011 under the FSS Act 2006. A default limit of 0.01 mg/kg applies to agricultural commodities where no MRL has been fixed." },
            { q: "What do FSSAI, APEDA, EIC and BIS each do?", a: "FSSAI regulates food safety in the domestic market. APEDA promotes agricultural exports and runs residue-monitoring and traceability systems. The Export Inspection Council certifies exports and runs residue monitoring for seafood and other animal products. BIS writes standards and certifies products such as packaged drinking water." },
            { q: "Which antibiotics are banned in aquaculture?", a: "Chloramphenicol, nitrofurans and nitroimidazoles among others, along with dyes such as malachite green. The EU applies reference points for action of 0.15 µg/kg for chloramphenicol and 0.5 µg/kg for nitrofuran metabolites." }
          ]
        },
        {
          title: "Scenarios and troubleshooting",
          items: [
            {
              q: "LC-MS/MS sensitivity dropped by half overnight. What do you check?",
              a: "Work from quickest to slowest:",
              list: [
                "Internal-standard and check-standard responses: is it the instrument or the extracts?",
                "Spray stability; a blocked capillary or probe.",
                "Source, cone or curtain plate contamination; clean them.",
                "Mobile phase: fresh, correct additives, enough volume.",
                "Column pressure and peak shape.",
                "Then tune or calibrate and compare system suitability with its history."
              ]
            },
            { q: "A reagent blank shows a pesticide peak. What now?", a: "Find the source before reporting anything. Inject a solvent blank (carry-over?), prepare a fresh reagent blank (contaminated solvent, salts or glassware?), and check dSPE tubes and vials. Re-run affected samples once the blank is clean." },
            { q: "The qualifier ion ratio is outside ±30% for a positive sample.", a: "It is not confirmed. Look for a co-eluting interference, re-inject, dilute, try another transition or re-extract with better clean-up. If it still cannot be confirmed, report as the SOP directs (not detected or unconfirmed)." }
          ]
        },
        {
          title: "Quick calculations",
          items: [
            { q: "10 mg of standard at 98% purity is dissolved in 10 mL. What is the concentration?", a: "10 mg × 0.98 ÷ 10 mL = 0.98 mg/mL, which is 980 µg/mL." },
            { q: "Make 10 mL of 50 ng/mL from a 10 µg/mL stock.", a: "V1 = 50 ng/mL × 10 mL ÷ 10,000 ng/mL = 0.05 mL, so take 50 µL and make up to 10 mL." },
            { q: "The extract reads 8 ng/mL. 10 g sample, 10 mL acetonitrile, diluted 1:1 with water before injection. What is the residue?", a: "8 × 2 (dilution) × 10 mL ÷ 10 g = 16 µg/kg, which is 0.016 mg/kg." }
          ]
        },
        {
          title: "HR and closing",
          items: [
            { q: "What are your salary expectations?", a: "Give a researched range anchored to the role, not just your current pay. For example: “Based on the role and the market for LC-MS/MS analysts in Bangalore, I’m looking at ₹X–Y LPA, and I’m flexible on the overall package.” See [Salary & offers](#/analytical/salary)." },
            { q: "What is your notice period?", a: "Know it exactly from your appointment letter. If it is long, say whether early release or a buy-out is possible." },
            { q: "Are you comfortable with shifts or relocation?", a: "Many testing labs run shifts and Saturdays. Answer honestly; if relocating to Bangalore, say when you could move." },
            { q: "Where do you see yourself in three years?", a: "Tie it to the role: owning methods, validating new scopes, mentoring juniors, or growing into QA or application work." }
          ]
        }
      ]
    },

    { type: "h2", text: "Questions to ask them", sub: "Ask two or three. Good questions signal that you think like an analyst, not just an applicant." },
    {
      type: "list",
      items: [
        "Which instruments and software would I work on, and how many analysts share them?",
        "Which matrices and analyte groups make up most of the workload?",
        "How much method development and validation would I be involved in?",
        "What do the first three months look like, and how is performance reviewed?",
        "What is the shift pattern and the typical sample load per analyst?",
        "What does the path from Analyst to Senior Analyst or Section Head look like here?"
      ]
    },
    {
      type: "callout",
      variant: "tip",
      title: "Written and practical tests",
      items: [
        "Revise calculations: dilutions, purity corrections, residues in µg/kg, recovery and RSD.",
        "If asked to prepare a standard or run an extraction while observed, narrate each step and each safety point.",
        "For data-review tests, check calibration, blanks, recoveries, retention times and ion ratios before looking at the result."
      ]
    }
  ]
});
