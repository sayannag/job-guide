FG.page({
  track: "analytical",
  id: "upskill",
  order: 10,
  nav: "Upskilling",
  kicker: "Analytical & QC · Courses & certificates",
  title: "Certificates and skills worth adding",
  lede: "A short, ranked list. None of these needs a career break, and the first few pay off within weeks, on the resume and in interviews.",
  blocks: [
    { type: "h2", text: "Highest return first" },
    {
      type: "cards",
      cols: 2,
      items: [
        {
          kicker: "1 · Within a month",
          title: "ISO/IEC 17025:2017 awareness and internal auditor course",
          text: "Two to four days, often online or at weekends. Directly useful for QA roles and asked about in every NABL-lab interview.",
          list: ["Look for courses on the 2017 version with an assessment and certificate", "Offered by standards bodies, quality councils and established private trainers", "Add it under Training on the resume and LinkedIn"]
        },
        {
          kicker: "2 · Ongoing, mostly free",
          title: "Instrument-vendor courses and webinars",
          text: "Instrument makers run online courses on LC-MS/MS, GC-MS/MS, sample prep and troubleshooting. Certificates show initiative and fill the training section.",
          links: [
            { label: "Agilent", url: "https://www.agilent.com/" },
            { label: "Waters", url: "https://www.waters.com/" },
            { label: "SCIEX", url: "https://sciex.com/" },
            { label: "Thermo Fisher", url: "https://www.thermofisher.com/" },
            { label: "Shimadzu", url: "https://www.shimadzu.com/" }
          ]
        },
        {
          kicker: "3 · Big credential",
          title: "FSSAI Junior Analyst and Food Analyst exams",
          text: "The Junior Analyst Exam needs no experience. The Food Analyst Exam needs three years of food-analysis experience, which this profile reaches in mid-2027. FSSAI-notified labs need qualified analysts, so this helps in private labs too.",
          links: [{ label: "FSSAI FAE and JAE page", url: "https://fssai.gov.in/food-testing/fae-jae" }]
        },
        {
          kicker: "4 · Self-study, free",
          title: "Method validation and measurement uncertainty",
          text: "Read the SANTE guidance, NABL 141 and the Eurachem guides, then build one uncertainty estimate from your own lab’s QC data. It makes interview answers concrete.",
          links: [
            { label: "SANTE/11312/2021", url: "https://eurl-pesticides.eu/docs/public/tmplt_article.asp?CntID=727" },
            { label: "Eurachem guides", url: "https://www.eurachem.org/index.php/publications/guides" }
          ]
        },
        {
          kicker: "5 · A weekend",
          title: "Excel for lab data",
          text: "Pivot tables, LINEST and residuals, control charts, and simple validation summaries. Useful in every role here and easy to demonstrate in a test."
        },
        {
          kicker: "6 · Only if moving to CRO or pharma",
          title: "GLP and GMP basics, ICH guidelines",
          text: "OECD GLP principles, GMP documentation (deviations, OOS, change control) and ICH Q2(R2), Q14 and M10. Free to read; short paid courses add a certificate.",
          links: [{ label: "ICH quality guidelines", url: "https://www.ich.org/page/quality-guidelines" }]
        }
      ]
    },

    { type: "h2", text: "What not to spend on yet" },
    {
      type: "list",
      items: [
        "Expensive generic diplomas in “food safety management”. Lab employers value hands-on skills and accreditation knowledge more.",
        "A second master’s degree. It rarely changes analyst pay; experience and method ownership do.",
        "Paid placement guarantees. Genuine employers and consultants do not charge candidates."
      ]
    },
    {
      type: "callout",
      variant: "key",
      title: "One project that beats a certificate",
      text: "Write a two-page summary of a method you run: scope, sample prep, instrument settings, validation data (recovery, RSD, LOQ), matrix effects and how you estimate uncertainty. Bring it to interviews as a talking point, without confidential client data."
    }
  ]
});
