FG.page({
  track: "creative",
  id: "tools",
  order: 5,
  nav: "Tools & software",
  kicker: "Interior & Creative · Software",
  title: "The software stack, and the order to learn it",
  lede: "Employers list software in almost every posting. You do not need everything; you need the right three, learned well.",
  blocks: [
    { type: "h2", text: "The core kit" },
    {
      type: "table",
      head: ["Tool", "Used for", "Cost", "Where to learn"],
      rows: [
        ["SketchUp", "Fast 3D modelling; the default at most Indian home-interiors firms and studios", "Free web version; paid Pro", "[Trimble Learn](https://learn.trimble.com/) (free)"],
        ["AutoCAD", "2D plans, elevations and working drawings; the industry standard", "Paid; free for verified students", "[Autodesk Education](https://www.autodesk.com/education/edu-software/overview)"],
        ["D5 Render", "Quick real-time renders straight from SketchUp", "Free tier; paid Pro", "[D5 Render](https://www.d5render.com/download)"],
        ["V-Ray, Corona, Enscape", "Photorealistic rendering; Corona with 3ds Max is the visualiser standard", "Paid; education licences available", "[Chaos Academy](https://academy.chaos.com/) (free)"],
        ["Photoshop or Canva", "Presentation boards, mood boards and render touch-ups", "Paid, or free tier", "Plenty of free tutorials"],
        ["Revit", "BIM for larger firms and commercial projects", "Paid; free for verified students", "LinkedIn Learning, Autodesk"],
        ["Blender", "Free all-round 3D modelling and rendering", "Free, including commercial use", "[blender.org](https://www.blender.org/)"],
        ["Pinterest, Milanote", "Collecting references and building mood boards", "Free tiers", "Learn by using"]
      ]
    },

    { type: "h2", text: "Learning order", sub: "Roughly four months at five to six hours a week." },
    {
      type: "steps",
      id: "c-tools-order",
      items: [
        { when: "Weeks 1–6", title: "SketchUp", text: "Model three rooms from photos: your own bedroom, a kitchen and a living room. Learn groups, components, tags and scenes.", checks: ["Three rooms modelled from photos"] },
        { when: "Weeks 4–12", title: "AutoCAD", text: "Draw a full 2BHK plan, then elevations and a ceiling plan with proper layers, dimensions and line weights.", checks: ["One full drawing set for a 2BHK"] },
        { when: "Weeks 8–14", title: "A renderer: start with D5", text: "Render your SketchUp rooms. Focus on daylight, materials and camera angles before chasing realism.", checks: ["Six portfolio-quality renders"] },
        { when: "Weeks 12–16", title: "Presentation boards", text: "Lay out concept, mood and material boards in Photoshop or Canva.", checks: ["Three presentation boards"] },
        { when: "Later", title: "Specialise", text: "3ds Max with Corona if you are heading for visualisation work; Revit if you are aiming at commercial firms." }
      ]
    },

    { type: "h2", text: "Hardware" },
    {
      type: "callout",
      text: "AutoCAD and SketchUp run on most modern laptops. Rendering is different: aim for a dedicated graphics card (a recent NVIDIA RTX-class GPU), 16 GB or more of RAM and an SSD. Before buying, check the requirements on the renderer’s website."
    },
    {
      type: "callout",
      variant: "warn",
      title: "Use legal licences",
      text: "Education licences are for learning only; client work needs a commercial licence. Cracked software is common in the trade, but it brings malware and legal risk, and some employers check. The free tools above are enough to build a portfolio."
    }
  ]
});
