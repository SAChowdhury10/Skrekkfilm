# Une Faible Impression — Production Tracker

Outstanding decisions and concerns pulled from the Zoom meeting notes of
**30 Aug 2026** (Scenes 1–4, budget, crew) and **2 Sep 2026** (Scenes 3–8,
equipment, costume).

## What's in this folder

| File | What it is |
|---|---|
| `scene-shot-items.csv` | 50 items, one per scene/shot decision or concern |
| `production-wide-concerns.csv` | 32 items — crew, budget, equipment, schedule, prep |
| `production-tracker.html` | The display report. Reads the data live and colour-codes it. |
| `config.js` | Where you paste the two Google Sheets "publish to web" links |
| `generate_seed_csvs.py` | Rebuilds the two CSVs from the source list (record of the seed) |

## Columns

`Scene · Shot · Item / Decision · Category · Status · Priority · Owner ·
Needs input from · Deadline · Options / Notes · Source`

- **Status** — `Blocked` · `Open` · `Leaning` · `Decided` · `Deferred`
- **Priority** — `P1` (needed before the shoot) · `P2` (needed before / at the scout) · `P3` (nice-to-have)
- **Category** — Camera/Move · Blocking · Location · Equipment · Costume/PD · Sound · Schedule · VFX/Edit · VFX/Color · Crew · Budget · Cast · Prep · Process

## Colour code (spreadsheet + HTML use the same scheme)

| Status | Fill | Meaning |
|---|---|---|
| 🔴 Blocked | red | Can't move until someone/something unblocks it |
| 🟠 Open | orange | Undecided, actively needs a call |
| 🟡 Leaning | yellow | A direction is favoured but not locked |
| 🟢 Decided | green | Settled — kept for context |
| ⚪ Deferred | grey | Parked on purpose |

Priority shows as a coloured `P1/P2/P3` tag and the row's left border.

---

## Making it live (Google Sheets → HTML)

### 1. Get the data into a Google Sheet

1. Go to <https://sheets.new>
2. **File → Import → Upload → `scene-shot-items.csv`** → *Import location:* **Replace current sheet** → Import
3. Rename that tab (double-click the tab name at the bottom) to **`Scene & Shot Items`**
4. **File → Import → Upload → `production-wide-concerns.csv`** → *Import location:* **Insert new sheet(s)** → Import
5. Rename the new tab to **`Production-Wide`**

### 2. Add the colour coding (conditional formatting — travels with the data)

On the **`Scene & Shot Items`** tab:

1. Select column **E** (Status) — click the `E` header
2. **Format → Conditional formatting**
3. Add one rule per status: *Format cells if…* **Text is exactly** →
   - `Blocked` → fill `#f4c7c3` (red)
   - `Open` → fill `#fce8b2` (orange)
   - `Leaning` → fill `#fff2cc` (yellow)
   - `Decided` → fill `#d9ead3` (green)
   - `Deferred` → fill `#e6e6e6` (grey)
4. *(optional, whole-row colour)* instead of column E, select `A2:K200`, choose
   **Custom formula is** and use `=$E2="Blocked"` etc. for each colour.
5. For priority, select column **F** and add: `P1` → red text/bold, `P2` → orange, `P3` → grey.

Repeat on the **`Production-Wide`** tab (Status is column **D**, Priority column **E**).

### 3. Publish both tabs to the web

1. **File → Share → Publish to web**
2. **Link** tab → first dropdown: **`Scene & Shot Items`** → second dropdown:
   **Comma-separated values (.csv)** → **Publish** → copy the URL
3. Change the first dropdown to **`Production-Wide`**, keep **.csv**, **Publish**, copy that URL
4. The URLs look like
   `https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?gid=0&single=true&output=csv`

### 4. Wire the URLs into the report

Open `config.js` and paste:

```js
window.TRACKER_CONFIG = {
  sceneShotCsvUrl: "https://docs.google.com/…&output=csv",   // Scene & Shot Items
  overallCsvUrl:   "https://docs.google.com/…&output=csv",   // Production-Wide
  ...
};
```

### 5. Use it

- Open `production-tracker.html` in a browser.
- Edit the **Google Sheet** whenever something changes → click **Reload** in the
  report (or refresh the page). Google's published CSV can lag a few minutes
  behind an edit — that's a Google cache, not the report.
- The report shows a "refreshed <time>" stamp and whether it loaded from the
  live Sheet or the local files.

## Running it without Google (offline)

- **Served locally:** from this folder run `python3 -m http.server 8777` and open
  <http://localhost:8777/production-tracker.html> — it reads the local CSVs directly.
- **Double-clicked from disk:** browsers block the local CSV fetch; use the
  **"Load CSV file"** buttons the page shows to pick the two files by hand.

## Deadlines note

Dates are copied as they were spoken in the meetings ("Thursday night",
"Mon scout", "before Saturday"). Principal photography lines up with the dolly
rental (pickup the 23rd, return by 10 AM the 26th) → **the weekend of the 24th–26th**.
Confirm the specifics against the current schedule.
