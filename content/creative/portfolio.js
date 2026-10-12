FG.page({
  track: "creative",
  id: "portfolio",
  order: 6,
  nav: "Portfolio",
  kicker: "Interior & Creative · Portfolio",
  title: "Build a portfolio that gets interviews",
  lede: "Design employers hire from portfolios, not certificates. Five well-presented projects are enough to start applying, and one of them should show what makes this background different.",
  blocks: [
    { type: "h2", text: "Five projects to build" },
    {
      type: "steps",
      id: "c-portfolio",
      items: [
        { when: "Project 1", title: "Your own room, redesigned", text: "Before photos, a short brief, mood board, layout, 3D views, material board and budget. Carrying out part of it, even just paint and styling, adds real before-and-after photos.", checks: ["Room project finished"] },
        { when: "Project 2", title: "A 2BHK flat for a typical Kolkata or Bangalore family", text: "Furniture layout, kitchen, wardrobes and living-dining, with ceiling and electrical plans, 3D views and a rough BOQ.", checks: ["2BHK project finished"] },
        { when: "Project 3", title: "A modular kitchen in detail", text: "Elevations, module schedule, hardware list, materials and finishes, and two or three renders.", checks: ["Kitchen project finished"] },
        { when: "Project 4", title: "Your edge: a lab, clinic or biophilic space", text: "A quality-control lab or diagnostic clinic laid out around workflow, safety and services, or a plant-led café or office. This is the project interviewers will ask about.", checks: ["Signature project finished"] },
        { when: "Project 5", title: "A styling or e-design concept", text: "A shoppable mood board, styling plan and plant list for one room, presented the way an e-design platform would.", checks: ["E-design concept finished"] }
      ]
    },

    { type: "h2", text: "What each project page should show" },
    {
      type: "list",
      items: [
        "The brief and constraints: who the client is, budget, must-haves.",
        "Concept and mood board, with the reasoning in one or two lines.",
        "Plans: layout, furniture, ceiling and electrical where relevant.",
        "Three to six 3D views from human eye height.",
        "A materials and finishes board with real product types and specifications.",
        "A rough cost estimate or BOQ.",
        "Process: sketches, options you rejected and why."
      ]
    },

    { type: "h2", text: "Formats" },
    {
      type: "cards",
      cols: 3,
      items: [
        { title: "PDF portfolio", text: "15–25 pages, under 20 MB, for applications and email. Name it like Name-Interior-Portfolio.pdf." },
        { title: "Behance profile", text: "Free, searchable and widely used by Indian studios. Post each project as its own case study." },
        { title: "Short preview", text: "A 4–6 page version or a few images for WhatsApp and LinkedIn messages." }
      ]
    },

    { type: "h2", text: "Final check before applying" },
    {
      type: "checklist",
      id: "c-portfolio-check",
      items: [
        "Five projects, each with a clear brief",
        "At least two projects with full drawing sets",
        "At least fifteen strong renders across the projects",
        "A materials board with real products and specifications",
        "One project that shows the lab or botany edge",
        "PDF under 20 MB with a clear file name",
        "Behance profile live and linked from LinkedIn",
        "Reviewed by someone in the industry: a teacher, a studio designer or a contact from an IIID event"
      ]
    },
    {
      type: "callout",
      variant: "tip",
      title: "Getting free feedback",
      text: "The Institute of Indian Interior Designers has active chapters in Kolkata and Bangalore that run talks and events. Go, meet practising designers and ask for ten minutes of portfolio feedback. Course tutors and studio interns are also usually happy to review."
    }
  ]
});
