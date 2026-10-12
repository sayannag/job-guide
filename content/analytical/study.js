FG.page({
  track: "analytical",
  id: "study",
  order: 7,
  nav: "What to study",
  kicker: "Analytical & QC · Study",
  title: "What to study before interviews",
  lede: "Twenty topics that come up in residue, QC and CRO interviews, written as revision notes. Open a topic, read the key points, practise the questions out loud, and tick it off. Progress is saved in this browser.",
  print: true,
  blocks: [
    {
      type: "callout",
      variant: "tip",
      title: "How deep to go",
      text: "For each topic you should be able to explain *what you do*, *why it is done that way*, and *what you would do when it goes wrong*. That third part is what separates a trainee from a chemist in interviews."
    },
    { type: "h2", text: "Core topics" },
    {
      type: "topics",
      id: "a-study",
      items: [
        {
          id: "lcms",
          title: "LC-MS/MS fundamentals",
          why: "The core topic for residue, mycotoxin, veterinary-drug and bioanalytical roles.",
          points: [
            "Triple quadrupole: Q1 selects the precursor ion, q2 fragments it by collision-induced dissociation, Q3 selects a product ion. Each precursor → product pair is an MRM transition.",
            "Use two transitions per analyte, a quantifier and a qualifier. Their ratio supports identity.",
            "ESI suits polar, ionisable and heat-sensitive compounds (most pesticides and veterinary drugs). APCI suits smaller, less polar, thermally stable molecules.",
            "Positive mode gives [M+H]+ or [M+NH4]+ ions; negative mode gives [M−H]− (chloramphenicol, many acidic herbicides, fipronil).",
            "A typical mobile phase is water and methanol with ammonium formate and formic acid, which steadies protonation and adduct formation.",
            "Scheduled (dynamic) MRM watches each transition only around its retention time, so hundreds of analytes fit with enough dwell time. Aim for 10–15 points across each peak.",
            "Compound parameters (cone or declustering voltage, collision energy) are optimised by infusion; source parameters (voltages, gas flows, temperatures) by flow injection."
          ],
          ask: [
            "How does MRM give selectivity?",
            "Why add ammonium formate to the mobile phase?",
            "How would you add a new pesticide to an existing method?",
            "What are dwell time and cycle time, and why do they matter?"
          ]
        },
        {
          id: "gcms",
          title: "GC-MS and GC-MS/MS fundamentals",
          why: "Organochlorines, pyrethroids, PCBs and PAHs run on GC. Expect questions about the inlet.",
          points: [
            "Electron ionisation (EI) at 70 eV gives reproducible fragmentation, so library spectra (NIST) help in full-scan work.",
            "Typical column: 5% phenyl methylpolysiloxane, 30 m × 0.25 mm × 0.25 µm, helium carrier at constant flow.",
            "Splitless or PTV injection for trace work. Most problems start in the liner: active sites, dirt, breakdown of sensitive pesticides.",
            "Matrix-induced enhancement: matrix covers active sites, so analytes respond more strongly in matrix than in solvent. Use matrix-matched standards or analyte protectants.",
            "Backflushing keeps heavy matrix off the column and out of the source.",
            "GC suits volatile, thermally stable, non-polar to mid-polar compounds. Many pesticides work on both GC and LC; choose by sensitivity and robustness."
          ],
          ask: [
            "Why do some organophosphates recover above 100% in matrix?",
            "When do you change the liner or trim the column?",
            "Which pesticides would you run on GC rather than LC, and why?"
          ]
        },
        {
          id: "prep",
          title: "Sample preparation: QuEChERS and beyond",
          why: "Interviewers check whether you know why each step exists, not just the recipe.",
          points: [
            "Core QuEChERS: homogenised sample (about 10 g; add water to dry samples), acetonitrile extraction, salting-out with MgSO4 and NaCl, then dispersive SPE clean-up.",
            "Buffered versions, citrate (EN 15662) and acetate (AOAC 2007.01), protect pH-sensitive pesticides.",
            "dSPE sorbents: PSA removes sugars and fatty acids; C18 removes lipids; GCB removes pigments but also holds back planar pesticides; zirconia-based and lipid-removal sorbents help with fatty matrices.",
            "Difficult matrices (tea, spices, dried herbs): smaller sample size, more water, stronger clean-up or extra dilution, and matrix-matched calibration.",
            "Very polar pesticides (glyphosate, chlorate, perchlorate, fosetyl) need separate methods such as QuPPe, an acidified-methanol extraction.",
            "Dithiocarbamates are measured as CS2 after acid hydrolysis, usually by GC-MS.",
            "Other clean-ups: SPE cartridges, immunoaffinity columns (aflatoxins, ochratoxin A), liquid–liquid extraction, purge and trap for volatiles."
          ],
          ask: [
            "Walk me through QuEChERS and the reason for each step.",
            "Why buffer the extraction?",
            "Why not use GCB for every matrix?",
            "How would you adapt the method for tea or chilli powder?"
          ],
          links: [{ label: "EURL for pesticide residues (methods, QuPPe, guidance)", url: "https://www.eurl-pesticides.eu/" }]
        },
        {
          id: "matrix",
          title: "Matrix effects and calibration strategy",
          why: "The most common follow-up after QuEChERS.",
          points: [
            "Matrix effect (%) = (slope of the matrix-matched curve ÷ slope of the solvent curve − 1) × 100. Within about ±20% is usually treated as negligible.",
            "LC-ESI usually shows suppression, because co-eluting matrix competes for charge. GC usually shows enhancement.",
            "Remedies: matrix-matched calibration, isotope-labelled internal standards, standard addition, dilution, better clean-up, and analyte protectants on GC.",
            "Calibrate with at least five levels across the working range and check residuals (back-calculated values within ±20%) instead of relying on r² alone.",
            "Bracket samples with calibration standards and inject check standards through long sequences."
          ],
          ask: [
            "How do you measure matrix effect?",
            "When would you choose internal standards over matrix-matched calibration?",
            "Why is r² alone not enough to accept a curve?"
          ]
        },
        {
          id: "validation",
          title: "Method validation to SANTE/11312/2021",
          why: "Labs want analysts who can validate methods, not only run them.",
          points: [
            "The EU guidance document SANTE/11312/2021 is the reference most residue labs follow. The number stays the same between revisions; the current revision is labelled v2026.",
            "Parameters: selectivity, linearity, LOQ, trueness (recovery), precision (repeatability and within-lab reproducibility), matrix effect, and robustness for in-house methods.",
            "Acceptance: mean recovery 70–120% with RSD ≤ 20% at each spike level, including the LOQ.",
            "The LOQ is the lowest spike level that meets those criteria, commonly 0.01 mg/kg in multi-residue work.",
            "Validate by commodity group (high water, high acid, high sugar, high oil, dry, and difficult commodities) and verify new matrices within a group.",
            "Validation establishes performance for new or modified methods; verification shows your lab can run an already-validated standard method."
          ],
          ask: [
            "Which parameters would you validate for a multi-residue method?",
            "What is the difference between validation and verification?",
            "How do you set the LOQ?"
          ],
          links: [{ label: "SANTE/11312/2021 guidance (EURL page)", url: "https://eurl-pesticides.eu/docs/public/tmplt_article.asp?CntID=727" }]
        },
        {
          id: "identification",
          title: "Identification and confirmation criteria",
          why: "Short, precise answers here signal real bench experience.",
          points: [
            "Retention time within ±0.1 min of the calibration standard in the same sequence.",
            "MS/MS: at least two product ions; ion ratio within ±30% (relative) of the average from calibration standards in the same sequence.",
            "Signal-to-noise of at least 3 for each diagnostic ion.",
            "High-resolution MS uses accurate mass (typically within 5 ppm) instead of transitions.",
            "A result is reported as detected only when all criteria are met; otherwise re-inject, re-extract or confirm on another technique."
          ],
          ask: [
            "Your qualifier ion ratio is off by 40%. What do you do?",
            "What retention-time tolerance do you apply?"
          ]
        },
        {
          id: "mu",
          title: "Measurement uncertainty",
          why: "Asked in almost every NABL-lab interview, and the basis of compliance decisions.",
          points: [
            "Most residue labs use a top-down estimate: combine within-lab reproducibility (from QC recoveries or duplicates) with bias (from CRMs or PT results).",
            "Combined u = √(u_Rw² + u_bias²); expanded U = 2u for roughly 95% confidence.",
            "EU enforcement uses a default expanded uncertainty of 50%, and labs are expected to show their own estimate does not exceed it.",
            "Compliance: a sample is clearly above an MRL only when (result − U) is still above the MRL.",
            "NABL 141 is NABL’s guideline on estimating and expressing uncertainty."
          ],
          ask: [
            "How does your lab estimate uncertainty?",
            "A result is 0.012 mg/kg against an MRL of 0.01 mg/kg. Is it non-compliant?"
          ]
        },
        {
          id: "qc",
          title: "Routine QC, control charts and proficiency testing",
          why: "Shows you understand how a lab proves results are right every day.",
          points: [
            "Every batch: reagent blank, matrix blank, calibration standards, at least one spiked recovery and a check standard; duplicates as the SOP requires.",
            "Routine recoveries: individual results generally within 60–140% under SANTE; investigate trends before they fail.",
            "Control charts: warning limits at ±2 SD, action limits at ±3 SD; watch for runs and drift (Westgard rules).",
            "Proficiency testing: z = (your result − assigned value) ÷ σ. |z| ≤ 2 satisfactory, 2 < |z| < 3 questionable, |z| ≥ 3 unsatisfactory.",
            "Common providers include FAPAS and BIPEA; NABL 163 sets how often labs must take part.",
            "An unsatisfactory PT result triggers root-cause analysis, corrective action and a check of results already reported."
          ],
          ask: [
            "Which QC samples do you run with each batch?",
            "Your PT z-score is 2.6. What happens next?"
          ]
        },
        {
          id: "iso17025",
          title: "ISO/IEC 17025:2017 and NABL",
          why: "You have lived through audits; now learn the structure behind them.",
          points: [
            "Clause 4 impartiality and confidentiality; 5 structure; 6 resources (people, facilities, equipment, traceability); 7 processes; 8 management system.",
            "Clause 7 matters most at the bench: 7.2 method selection, verification and validation; 7.5 technical records; 7.6 uncertainty; 7.7 ensuring validity of results; 7.8 reporting; 7.10 nonconforming work; 7.11 data and information management.",
            "Clause 8: document and record control, risks and opportunities, corrective action, internal audits, management review.",
            "Key NABL documents: NABL 103 (specific criteria for chemical testing), NABL 131 (terms and conditions), NABL 141 (uncertainty), NABL 163 (proficiency testing).",
            "Assessments include document review, witnessed tests, vertical audits (one report traced back to raw data, standards, calibration and training records) and staff interviews."
          ],
          ask: [
            "Which clauses do you work with every day?",
            "What happens during a witness test?",
            "What is a vertical audit?"
          ],
          links: [
            { label: "NABL documents", url: "https://nabl-india.org/nabl/index.php?c=publicaccredationdoc&m=index&docType=both" },
            { label: "ISO/IEC 17025:2017 (ISO overview)", url: "https://www.iso.org/standard/66912.html" }
          ]
        },
        {
          id: "regs-india",
          title: "Indian regulations: FSSAI, APEDA, EIC, BIS",
          why: "Knowing who regulates what shows maturity, especially for Kolkata export labs.",
          points: [
            "FSS Act 2006 and the FSS (Contaminants, Toxins and Residues) Regulations 2011 set pesticide MRLs, mycotoxin and metal limits and antibiotic tolerances.",
            "A default limit of 0.01 mg/kg applies to agricultural commodities with no specific pesticide MRL (not to thermally or chemically processed foods).",
            "Aflatoxin M1 limit in milk: 0.5 µg/kg.",
            "Labs are notified under Section 43 of the FSS Act as primary, referral or national reference laboratories.",
            "FSSAI publishes free Manuals of Methods of Analysis for pesticides, mycotoxins, antibiotics, metals and food categories.",
            "Pesticides are registered under the Insecticides Act 1968 by the CIB&RC.",
            "APEDA promotes agri exports and runs residue-monitoring and traceability systems (GrapeNet, PeanutNet, HortiNet) with recognised labs.",
            "The Export Inspection Council certifies exports and runs residue monitoring for aquaculture, honey and other animal products.",
            "BIS sets product standards, for example IS 10500:2012 (drinking water) and IS 14543:2024 (packaged drinking water)."
          ],
          links: [
            { label: "FSSAI Manuals of Methods of Analysis", url: "https://fssai.gov.in/food-testing/manuals-methods-analysis" },
            { label: "FSSAI notified food laboratories", url: "https://fssai.gov.in/food-testing/food-laboratories" },
            { label: "Export Inspection Council", url: "https://www.eicindia.gov.in" }
          ]
        },
        {
          id: "regs-intl",
          title: "EU, Codex and export requirements",
          why: "Export labs in both cities test to EU limits every day.",
          points: [
            "EU pesticide MRLs: Regulation (EC) No 396/2005. Look up limits in the EU Pesticides Database; 0.01 mg/kg applies by default where no specific MRL exists.",
            "EU contaminants: Regulation (EU) 2023/915 replaced Regulation (EC) No 1881/2006 for mycotoxins, metals, PAHs and more.",
            "EU veterinary drugs: Regulation (EU) No 37/2010 lists MRLs; Regulation (EU) 2019/1871 sets reference points for action, e.g. chloramphenicol 0.15 µg/kg and nitrofuran metabolites 0.5 µg/kg.",
            "Codex Alimentarius MRLs are the international baseline many importing countries use.",
            "Seafood exports to the EU rely on India’s National Residue Control Plan, run by EIC with MPEDA."
          ],
          links: [
            { label: "EU Pesticides Database", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en" },
            { label: "Codex pesticide residue database", url: "https://www.fao.org/fao-who-codexalimentarius/codex-texts/dbs/pestres/en/" }
          ]
        },
        {
          id: "pesticides",
          title: "Pesticide classes and how they behave",
          why: "Expect “name two from each class and how you would analyse them”.",
          points: [
            "Organochlorines (endosulfan, DDT, HCH isomers): persistent and non-polar; GC-MS/MS.",
            "Organophosphates (chlorpyrifos, profenofos, acephate, monocrotophos): many run on both GC and LC; some break down in a hot inlet.",
            "Synthetic pyrethroids (cypermethrin, lambda-cyhalothrin, deltamethrin): GC, with several isomer peaks to sum.",
            "Carbamates (carbofuran, carbaryl, methomyl): heat-sensitive; LC-MS/MS.",
            "Neonicotinoids (imidacloprid, thiamethoxam, acetamiprid): polar; LC-MS/MS.",
            "Triazole and strobilurin fungicides (tebuconazole, hexaconazole, azoxystrobin): mostly LC-MS/MS.",
            "Residue definitions sometimes include metabolites, for example fipronil plus fipronil sulfone."
          ],
          ask: ["Name two pesticides from each major class and the technique you would use for each."]
        },
        {
          id: "mycotoxins",
          title: "Mycotoxins",
          why: "Spices, nuts, cereals and dairy are tested for these daily.",
          points: [
            "Aflatoxins B1, B2, G1 and G2 come from Aspergillus moulds in nuts, spices and cereals; M1 is the milk metabolite of B1.",
            "Others to know: ochratoxin A (coffee, spices, cereals), deoxynivalenol, zearalenone, fumonisins, patulin (apple products).",
            "Typical method: methanol–water or acetonitrile–water extraction, immunoaffinity clean-up, then HPLC-FLD (with derivatisation for B1 and G1) or LC-MS/MS with isotope-labelled standards.",
            "Protect standards from light and decontaminate glassware with sodium hypochlorite.",
            "Sampling causes most of the variability, because contamination is patchy.",
            "Limits: FSSAI aflatoxin M1 in milk 0.5 µg/kg; EU limits in Regulation (EU) 2023/915."
          ]
        },
        {
          id: "vetdrugs",
          title: "Veterinary-drug and antibiotic residues",
          why: "A niche skill on this resume; be ready to go deep.",
          points: [
            "Banned in food-producing animals: chloramphenicol, nitrofurans and nitroimidazoles; dyes such as malachite green are banned in aquaculture.",
            "Chloramphenicol: ESI negative mode, deuterated internal standard, ethyl acetate extraction.",
            "Nitrofurans are tracked through tissue-bound metabolites (AOZ, AMOZ, AHD, SEM), released by acid hydrolysis and derivatised with 2-nitrobenzaldehyde before LC-MS/MS.",
            "Sulfonamides, tetracyclines and quinolones are permitted with MRLs; multi-class methods use acidified acetonitrile with SPE or dSPE.",
            "Screening tests (ELISA, microbial inhibition) flag samples; LC-MS/MS confirms them."
          ],
          ask: ["Why do nitrofuran methods need derivatisation?", "What is a reference point for action?"]
        },
        {
          id: "volatiles",
          title: "VOCs, THMs, PAHs and PCBs",
          why: "Purge and trap is an uncommon skill, so own it.",
          points: [
            "Purge and trap: inert gas strips VOCs from a 5–25 mL water sample onto a sorbent trap, which is then heated to send them to the GC.",
            "Critical settings: purge flow and time, dry purge, desorb and bake temperatures, water management, and carry-over after high samples.",
            "Trihalomethanes (disinfection by-products): chloroform, bromodichloromethane, dibromochloromethane, bromoform.",
            "PAHs: benzo[a]pyrene and the PAH4 sum are the EU food markers; analysed by GC-MS or HPLC-FLD.",
            "Indicator PCBs: congeners 28, 52, 101, 138, 153 and 180.",
            "Water standards: IS 10500:2012 (drinking water) and IS 14543:2024 (packaged drinking water); test methods in the IS 3025 series."
          ]
        },
        {
          id: "data-integrity",
          title: "Data integrity, LIMS and documentation",
          why: "Now asked in every regulated lab, from food testing to CROs.",
          points: [
            "ALCOA+: attributable, legible, contemporaneous, original and accurate, plus complete, consistent, enduring and available.",
            "Audit trails switched on, individual log-ins, no shared passwords, and raw data is never deleted or overwritten.",
            "Manual integration only with a documented reason and a second-person review.",
            "Reinjection and reprocessing rules belong in the SOP, and every repeat has a recorded reason.",
            "LIMS covers sample registration, chain of custody, result entry, review, authorisation and reporting."
          ],
          ask: ["What does ALCOA+ mean in your daily work?", "When is manual integration acceptable?"]
        },
        {
          id: "troubleshooting",
          title: "Instrument care and troubleshooting",
          why: "Scenario questions sort candidates quickly.",
          points: [
            "Sensitivity drop (LC-MS/MS): check internal-standard response, spray stability, source contamination, mobile phase and column pressure, then tune or calibrate.",
            "Retention-time shift: mobile-phase preparation, column temperature, leaks, column ageing.",
            "Peak tailing on GC: liner, septum, column trim, leaks, active sites.",
            "Carry-over: needle and port washes, solvent blanks after high samples.",
            "Ghost peaks or high background: contaminated solvents, vials, septa or gas lines.",
            "A maintenance log, preventive maintenance and system-suitability checks prevent most failures."
          ],
          ask: ["Responses dropped by half overnight. Walk me through your checks."]
        },
        {
          id: "calculations",
          title: "Lab calculations and statistics",
          why: "Written tests at many labs include these.",
          points: [
            "Purity correction: 10.0 mg of standard at 98.5% purity in 10 mL gives 985 µg/mL.",
            "Dilution: C1V1 = C2V2. To make 10 mL of 50 ng/mL from 10 µg/mL, take 50 µL.",
            "Residue (µg/kg) = extract concentration (ng/mL) × extract volume (mL) × dilution factor ÷ sample weight (g).",
            "1 mg/kg = 1 ppm = 1000 µg/kg; 1 µg/kg = 1 ppb.",
            "Recovery % = (found in spiked − found in unspiked) ÷ amount added × 100. RSD % = SD ÷ mean × 100.",
            "In Excel: AVERAGE, STDEV.S, SLOPE, INTERCEPT, RSQ, LINEST, pivot tables, and line charts for control charts."
          ]
        },
        {
          id: "pharma",
          title: "For CRO or pharma moves: ICH, GLP and GMP",
          why: "Only needed for bioanalytical, GLP or pharma QC roles.",
          points: [
            "ICH Q2(R2) and ICH Q14, adopted in November 2023, replace Q2(R1) for validating and developing analytical procedures.",
            "ICH M10 covers bioanalytical validation: accuracy within ±15% (±20% at the LLOQ), precision within 15% CV (20% at the LLOQ), stability tests and incurred-sample reanalysis.",
            "OECD Good Laboratory Practice: study director, study plan, independent QA unit, archiving.",
            "GMP basics: deviations, change control, out-of-specification investigations, CAPA; Schedule M in India.",
            "Plasma sample preparation: protein precipitation, liquid–liquid extraction, SPE; matrix effect tested in at least six lots."
          ],
          links: [
            { label: "ICH quality guidelines (Q2, Q14)", url: "https://www.ich.org/page/quality-guidelines" },
            { label: "ICH multidisciplinary guidelines (M10)", url: "https://www.ich.org/page/multidisciplinary-guidelines" }
          ]
        },
        {
          id: "current",
          title: "Current affairs worth mentioning",
          why: "Showing you follow the field makes a strong closing impression.",
          points: [
            "Ethylene oxide in spices: after 2024 recalls of some Indian spice blends in Hong Kong and Singapore, checks tightened. ETO is measured together with 2-chloroethanol by GC-MS/MS.",
            "Pesticide residues in tea, and the Tea Board’s list of NABL-enlisted tea testing labs.",
            "The FSSAI default limit of 0.01 mg/kg for pesticide–commodity pairs without a specific MRL.",
            "IS 14543:2024 replacing the 2016 packaged-water standard.",
            "The SANTE guidance moving to its v2026 revision."
          ]
        }
      ]
    },

    { type: "h2", text: "A four-week revision plan", sub: "About 45 minutes a day alongside work." },
    {
      type: "steps",
      id: "a-study-plan",
      items: [
        { when: "Week 1", title: "Instruments and sample prep", list: ["LC-MS/MS and GC-MS fundamentals", "QuEChERS and clean-up choices", "Matrix effects and calibration"] },
        { when: "Week 2", title: "Validation and quality", list: ["SANTE validation and identification criteria", "Measurement uncertainty", "Routine QC, control charts and PT"] },
        { when: "Week 3", title: "Systems and rules", list: ["ISO/IEC 17025 and NABL documents", "Data integrity and LIMS", "Indian, EU and Codex regulations"] },
        { when: "Week 4", title: "Analytes, scenarios and a mock interview", list: ["Pesticide classes, mycotoxins, veterinary drugs, volatiles", "Troubleshooting stories and calculations", "Two mock interviews using the [Interview prep](#/analytical/interview) page"] }
      ]
    },

    { type: "h2", text: "Free references" },
    {
      type: "links",
      groups: [
        {
          title: "Guidance and methods",
          items: [
            { label: "SANTE/11312/2021 (current revision)", url: "https://eurl-pesticides.eu/docs/public/tmplt_article.asp?CntID=727", note: "EU quality control and validation guidance for pesticide residues." },
            { label: "FSSAI Manuals of Methods of Analysis", url: "https://fssai.gov.in/food-testing/manuals-methods-analysis", note: "Official Indian methods, free PDFs." },
            { label: "Eurachem guides", url: "https://www.eurachem.org/index.php/publications/guides", note: "Method validation (Fitness for Purpose) and uncertainty (QUAM)." }
          ]
        },
        {
          title: "Accreditation and regulation",
          items: [
            { label: "NABL documents", url: "https://nabl-india.org/nabl/index.php?c=publicaccredationdoc&m=index&docType=both", note: "NABL 103, 131, 141, 163 and more." },
            { label: "EU Pesticides Database", url: "https://food.ec.europa.eu/plants/pesticides/eu-pesticides-database_en", note: "Look up EU MRLs by pesticide and commodity." },
            { label: "ICH quality guidelines", url: "https://www.ich.org/page/quality-guidelines", note: "Q2(R2) and Q14 for pharma-side roles." }
          ]
        }
      ]
    }
  ]
});
