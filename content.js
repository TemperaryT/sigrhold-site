// ============================================================
//  SIGRHOLD SITE CONTENT — content.js
//  This file is the ONLY thing you edit to update the site.
//  (Or use the ⚙ settings panel on the site itself: edit there,
//  then Copy/Download the result and replace this file.)
//
//  RULES:
//  • Text goes inside 'single quotes'. Apostrophes: don\'t
//  • Every item in a list { ... } ends with a comma.
//  • Leave a field as '' (empty quotes) if you have nothing.
//    Blank URLs HIDE their buttons/rows — nothing renders dead.
//  • Empty collections hide their panel or show an honest
//    empty state. No fake content, ever.
//  • Order is manual: first items = featured / newest.
//  • Save, re-upload to the droplet, refresh. Done.
// ============================================================


// ---- YOU ---------------------------------------------------
export const profile = {
  name: 'Donald Thompson',
  title: 'Reality Capture Specialist',
  eyebrow: 'REALITY CAPTURE PIPELINES · APPLIED R&D',
  brandLine: 'Capturing what exists. Testing what comes next.',
  bio: 'Reality capture does not end when the scan is complete. I work across field acquisition, 3DGS experimentation, and practical workflow R&D, testing what holds up under real project conditions and documenting what I learn.',
  email: '',                    // shown in Connect via the Email row below
  region: 'nyc3',               // shows in the status bar next to "online"
  primaryActionLabel: '',       // e.g. 'VIEW CURRENT FOCUS' — '' hides the button
  primaryActionUrl: '',         // where it goes (can be a project URL)
  resumeUrl: '',                // link to resume PDF — '' hides the button
};


// ---- CONNECT LINKS ------------------------------------------
// label picks the icon (LinkedIn / GitHub / Instagram / Email get
// theirs automatically; anything else gets a generic one).
// Blank url = row hidden. Description explains WHY it exists.
export const links = [
  // Blank URLs keep these rows hidden. Fill them in (here or via the
  // settings panel) when the destinations are ready:
  //   LinkedIn:  https://linkedin.com/in/YOURHANDLE
  //   GitHub:    https://github.com/YOURHANDLE
  //   Instagram: https://instagram.com/YOURHANDLE
  //   Email:     mailto:you@yourdomain
  { label: 'LinkedIn',  description: 'Professional writing and updates',        url: '' },
  { label: 'GitHub',    description: 'Projects, experiments, and documentation', url: '' },
  { label: 'Instagram', description: 'Field captures and visual work',           url: '' },
  { label: 'Email',     description: 'Direct contact',                           url: '' },
];


// ---- FIELD WORK & EXPERIMENTS -------------------------------
// Up to 3 shown. status vocabulary (be honest): Field Work ·
// Experiment · Prototype · In Testing · Active · Paused ·
// Completed · Archived
// statusTone: 'green' | 'amber' | 'gray' (the status dot)
// destination: where the link goes ('GitHub', 'LinkedIn', ...)
// currentFocus: true on ONE project = the big highlighted row
// Blank url = row shows but isn't clickable (no dead links).
export const projects = [
  {
    name: '3DGS Pipeline Evaluation',
    description: 'Evaluating capture, processing, cleanup, visualization, and delivery to understand where 3DGS fits alongside terrestrial LiDAR and photogrammetry.',
    status: 'In Testing',
    statusTone: 'green',
    updated: 'Jul 2026',
    destination: 'GitHub',
    url: '',
    currentFocus: true,
  },
  {
    name: 'Field Capture Archive',
    description: 'Methods, constraints, and lessons from capturing industrial environments across the country.',
    status: 'Field Work',
    statusTone: 'green',
    updated: 'Jul 2026',
    destination: 'GitHub',
    url: '',
    currentFocus: false,
  },
  {
    name: 'Workflow Automation Lab',
    description: 'Small software, self-hosting, and AI-assisted experiments built to learn automation and reduce repetitive work.',
    status: 'Experiment',
    statusTone: 'amber',
    updated: 'Jun 2026',
    destination: 'GitHub',
    url: '',
    currentFocus: false,
  },
];


// ---- LATEST NOTES -------------------------------------------
// Newest at the TOP. The site shows the first 3. Only REAL,
// published items — while this list is empty the panel shows
// an honest "being prepared" message instead.
//
// Copy this template to add one:
// {
//   headline: '',
//   venue: 'LinkedIn',      // LinkedIn / GitHub / Instagram / ...
//   date: 'Jul 2026',
//   url: '',
// },
export const posts = [];


// ---- STATS (optional strip under the status bar) ------------
// Only true, meaningful, maintainable numbers. The strip is
// hidden while this list is empty. Examples when real:
// { value: '12', unit: '', label: 'states traveled' },
// { value: '9',  unit: '', label: 'public experiments' },
export const stats = [];

export const statsPerRow = 4;
