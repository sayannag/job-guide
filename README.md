# Field Guide

A static, role-based career guide with two tracks:

- **Analytical & QC** (primary): residue analysis, LC-MS/MS and GC-MS/MS, QC and related roles in Kolkata and Bangalore.
- **Interior & Creative** (secondary): a part-time route into interior design for Kolkata, Bangalore and remote work.

No build step and no dependencies. Open `index.html` in a browser, or host the folder anywhere static.

## Publish on GitHub Pages

1. Create a repository and upload everything in this folder, keeping the structure (including `.nojekyll`).
2. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site is live at `https://<username>.github.io/<repository>/`.

## Structure

```
index.html              page shell
assets/css/styles.css   styles (light and dark)
assets/js/app.js        small renderer: routing, search, filters, checklists
content/manifest.js     list of content files to load
content/site.js         track settings, home page, about page
content/analytical/     one file per page of the Analytical & QC track
content/creative/       one file per page of the Interior & Creative track
```

## Updating content

- **Job postings:** edit `content/analytical/openings.js` or `content/creative/openings.js`. Copy an entry, change the fields, save.
- **Employers and courses:** `content/analytical/employers.js`, `content/creative/openings.js`, `content/creative/courses.js`.
- **A new page:** create a file that calls `FG.page({...})`, then add its path to `content/manifest.js`.
- After edits, bump `version` in `content/manifest.js` (and the `?v=` values in `index.html` if you changed the stylesheet or script) so browsers fetch fresh files.

Content files are plain JavaScript rather than JSON so the site also works when opened directly from disk.

Checklist progress is stored only in the visitor’s browser (`localStorage`).
