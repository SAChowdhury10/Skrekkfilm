/* ============================================================================
   Une Faible Impression - Production Tracker : data source

   The two CSV files in this folder ARE the source of truth. They are updated
   from meeting notes, committed, and pushed; GitHub Pages then serves this
   page and the CSVs together, so the report always reflects the latest push.

   You normally do not need to touch this file. The optional CSV URL overrides
   below let you point the report at a copy hosted elsewhere.
   ========================================================================== */

window.TRACKER_CONFIG = {
  sceneShotCsvUrl: "",   // optional override; empty = use the file in this folder
  overallCsvUrl:   "",   // optional override; empty = use the file in this folder

  sceneShotLocal: "scene-shot-items.csv",
  overallLocal:   "production-wide-concerns.csv",
};
