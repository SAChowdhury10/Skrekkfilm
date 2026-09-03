/* ============================================================================
   Une Faible Impression - Production Tracker : data source configuration
   ----------------------------------------------------------------------------
   After you publish the Google Sheet (File -> Share -> Publish to web), paste
   the two CSV links below. Each tab is published separately:

     1. Open the Sheet, File -> Share -> Publish to web
     2. "Link" tab -> pick the sheet tab "Scene & Shot Items" -> "Comma-separated
        values (.csv)" -> Publish -> copy the URL -> paste as sceneShotCsvUrl
     3. Repeat for the "Production-Wide" tab -> paste as overallCsvUrl

   The published URL looks like:
     https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=0&single=true&output=csv

   Until these are filled in, the report falls back to the local CSV files in
   this folder (works when the folder is served over http; if you just double-
   click the HTML, use the "Load CSV file" buttons instead).
   ========================================================================== */

window.TRACKER_CONFIG = {
  sceneShotCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQh1iSYwkLTogF9gxs7BxvP1Kf5cyrBimMosjwDE0x3EftUQmka_NAOKbdvtaCcuRYOapweeKNV6Jqs/pub?gid=0&single=true&output=csv",   // <-- paste the "Scene & Shot Items" published CSV URL
  overallCsvUrl:   "https://docs.google.com/spreadsheets/d/e/2PACX-1vQh1iSYwkLTogF9gxs7BxvP1Kf5cyrBimMosjwDE0x3EftUQmka_NAOKbdvtaCcuRYOapweeKNV6Jqs/pub?gid=2116489256&single=true&output=csv",   // <-- paste the "Production-Wide" published CSV URL

  // Local fallbacks (leave as-is)
  sceneShotLocal: "scene-shot-items.csv",
  overallLocal:   "production-wide-concerns.csv",
};
