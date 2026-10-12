FG.page({
  track: "creative",
  id: "learn",
  order: 3,
  nav: "What to learn",
  kicker: "Interior & Creative · Curriculum",
  title: "What to learn, in order",
  lede: "A self-study curriculum covering what a good diploma teaches. Work through it alongside a course, or use it to judge whether a course is complete. Tick topics as you finish them.",
  print: true,
  blocks: [
    { type: "h2", text: "Foundations", sub: "First three months." },
    {
      type: "topics",
      id: "c-learn-1",
      items: [
        {
          id: "principles",
          title: "Design principles and elements",
          why: "The vocabulary behind every design decision.",
          points: [
            "Elements: space, line, form, colour, texture, pattern and light.",
            "Principles: balance, rhythm, emphasis, scale and proportion, contrast, harmony.",
            "Practice: describe five rooms you like using these words, then sketch why they work."
          ]
        },
        {
          id: "colour",
          title: "Colour theory",
          why: "Clients judge you on colour first.",
          points: [
            "The colour wheel and schemes: monochrome, analogous, complementary, triadic.",
            "Undertones, light reflectance value (LRV) and paint finishes (matt, satin, gloss).",
            "Test samples on the actual wall in daylight and artificial light before committing.",
            "The 60-30-10 rule as a starting point for balance."
          ]
        },
        {
          id: "space",
          title: "Space planning and ergonomics",
          why: "Good layouts matter more than decoration.",
          points: [
            "Zoning, circulation paths and furniture clearances.",
            "Common sizes: kitchen counters about 850–900 mm high, wardrobes about 600 mm deep, dining tables about 750 mm high, walkways about 900 mm wide.",
            "The kitchen work triangle between hob, sink and refrigerator.",
            "Plan for typical Indian flats: compact kitchens, utility areas, pooja corners and storage-heavy bedrooms."
          ]
        },
        {
          id: "drawing",
          title: "Technical drawing",
          why: "Drawings are how design gets built.",
          points: [
            "Plans, elevations, sections, reflected ceiling plans, electrical and plumbing layouts, and details.",
            "Scales (1:50 layouts, 1:20 elevations, 1:5 details), line weights, dimensions and annotation.",
            "How a full drawing set is organised and issued to contractors."
          ]
        }
      ]
    },

    { type: "h2", text: "Materials, light and making", sub: "Months three to six." },
    {
      type: "topics",
      id: "c-learn-2",
      items: [
        {
          id: "materials",
          title: "Materials and finishes",
          why: "Where a chemistry background gives a real edge.",
          points: [
            "Boards: plywood grades (moisture-resistant and boiling-water-proof; IS 303 for general plywood, IS 710 for marine), MDF, HDHMR, particle board.",
            "Surfaces: laminates, veneers, acrylic, PU and lacquer finishes, quartz, granite, marble, vitrified and ceramic tiles.",
            "Chemistry angle: adhesives, formaldehyde emission classes (E0, E1), VOCs in paints, moisture and termite resistance."
          ]
        },
        {
          id: "lighting",
          title: "Lighting design",
          why: "Lighting makes or breaks a finished room.",
          points: [
            "Layers: ambient, task and accent lighting.",
            "Rules of thumb: about 150–300 lux for living areas and 300–500 lux for kitchen worktops and study desks.",
            "Colour temperature: 2700–3000 K warm for living spaces, around 4000 K neutral for work areas; CRI of 90 or more for true colours."
          ]
        },
        {
          id: "modular",
          title: "Furniture, joinery and modular systems",
          why: "Most Indian residential projects are largely modular.",
          points: [
            "Standard module widths and depths for kitchens and wardrobes.",
            "Hardware: hinges, soft-close channels, tandem drawers, lift-ups, corner solutions.",
            "Edge banding, shutters, handles and how factory production drawings work."
          ]
        },
        {
          id: "services",
          title: "Building services basics",
          why: "To coordinate, not to engineer.",
          points: [
            "Electrical points and loads, switch heights, plumbing and drainage, air conditioning.",
            "False ceilings (gypsum, grid), acoustics and ventilation."
          ]
        },
        {
          id: "codes",
          title: "Codes and safety",
          why: "Commercial projects ask about fire safety.",
          points: [
            "The National Building Code of India 2016 for fire and life safety, exits and materials.",
            "Fire-rated materials, electrical safety and accessibility basics."
          ]
        }
      ]
    },

    { type: "h2", text: "Practice and business", sub: "Months six to twelve." },
    {
      type: "topics",
      id: "c-learn-3",
      items: [
        {
          id: "boq",
          title: "Estimation, BOQ and costing",
          why: "Clients decide on budgets; employers value people who can cost a design.",
          points: [
            "Quantity take-off, rate analysis and bills of quantities.",
            "Vendor quotations, budgets and margins."
          ]
        },
        {
          id: "site",
          title: "Site execution and vendor coordination",
          why: "Designs fail on site, not on screen.",
          points: [
            "Measurement and marking; typical sequence: civil, electrical, false ceiling, carpentry, painting, installation.",
            "Snag lists, quality checks and handover."
          ]
        },
        {
          id: "client",
          title: "Client brief, presentation and contracts",
          why: "Half the job is communication.",
          points: [
            "Brief questionnaires, mood boards and concept presentations.",
            "Managing revisions, scope of work, payment milestones and written approvals."
          ]
        },
        {
          id: "biophilic",
          title: "Biophilic design and indoor plants",
          why: "Your botany degree makes this a natural speciality.",
          points: [
            "Biophilic patterns: daylight, natural materials, views, plants and water.",
            "Plant selection by light: low-light tolerant species (ZZ plant, snake plant, pothos) and their care.",
            "Planters, drainage, self-watering systems and green walls."
          ]
        },
        {
          id: "sustainability",
          title: "Sustainable interiors",
          why: "Growing demand, especially in commercial projects.",
          points: [
            "Low-VOC paints and adhesives, certified wood, durable and repairable materials.",
            "Energy-efficient lighting and the basics of green-building ratings such as IGBC and LEED."
          ]
        },
        {
          id: "vastu",
          title: "Vastu awareness",
          why: "Many Indian clients ask for it.",
          points: [
            "Know the common requests (entrance, kitchen and bedroom orientation) so you can accommodate them respectfully within a good layout."
          ]
        },
        {
          id: "freelance",
          title: "Business basics for freelancing",
          why: "Needed before taking paid projects.",
          points: [
            "Scope of work, written agreements, advance payments and invoicing.",
            "GST registration becomes mandatory above the turnover threshold (₹20 lakh for most service providers).",
            "Who owns the drawings and renders, and how you may show client work in your portfolio."
          ]
        }
      ]
    }
  ]
});
