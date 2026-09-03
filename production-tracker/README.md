# Une Faible Impression — Production Tracker

A living list of outstanding decisions and concerns for the shoot, plus a
colour-coded HTML report.

## Files

| File | What it is |
|---|---|
| `scene-shot-items.csv` | **Source of truth.** One row per scene/shot decision or concern (`SS-01`…) |
| `production-wide-concerns.csv` | **Source of truth.** Crew, budget, equipment, schedule, prep (`PW-01`…) |
| `production-tracker.html` | The report. Reads the two CSVs and colour-codes them. |
| `config.js` | Optional data-source overrides — normally untouched |
| `CHANGELOG.md` | Every meeting's batch of edits, newest first |
| `generate_seed_csvs.py` | Frozen record of the original extraction — **do not run** |

The **two CSV files are the master.** They're edited from meeting notes, committed,
and pushed; GitHub Pages serves the report and the CSVs together, so the published
report always reflects the latest push.

## Columns

`ID · Scene · Shot · Item/Decision · Category · Status · Priority · Owner ·
Needs input from · Deadline · Options/Notes · Source · Updated · Log`

(`Production-Wide` uses `Area` instead of `Scene`/`Shot`, and `Notes` instead of `Options/Notes`.)

- **ID** — permanent handle for the row. `SS-##` (scene/shot) or `PW-##` (production-wide).
  Numbers are never reused; new rows take the next free number.
- **Status** — `Blocked` · `Open` · `Leaning` · `Decided` · `Deferred`
- **Priority** — `P1` (needed before the shoot) · `P2` (before/at the scout) · `P3` (nice-to-have)
- **Updated** — date the row last changed (`YYYY-MM-DD`)
- **Log** — dated one-line history, e.g. `2026-09-16 → P1, waiting on Bad Dog · 2026-09-03 created`

### Colour code (used by the report)

| Status | Fill | Meaning |
|---|---|---|
| 🔴 Blocked | red | Can't move until someone/something unblocks it |
| 🟠 Open | orange | Undecided, needs a call |
| 🟡 Leaning | yellow | A direction is favoured, not locked |
| 🟢 Decided | green | Settled — kept for context |
| ⚪ Deferred | grey | Parked on purpose |

Priority also shows as a `P1/P2/P3` tag and the row's left border.

---

## The meeting update loop

After each Zoom meeting:

1. **Drop the Zoom notes** into `meeting-notes/` (same as always).
2. **Tell Claude:** *"process the `meeting-notes/<file>` into the tracker."*
3. Claude reads the notes + the current CSVs and posts a **proposed changelist by ID** —
   status changes, re-prioritizations, new rows, added Log lines, closed items.
4. You approve or adjust in chat.
5. Claude edits the CSVs, appends a dated section to `CHANGELOG.md`, commits, and pushes.
6. GitHub Pages redeploys in ~1 minute — refresh the report link.

**Referring to items on the call:** read the **ID** off the report (`SS-12`, `PW-03`).
Say things like *"SS-12, Sam approved option B — mark Leaning, bump nothing"* or
*"PW-01 gaffer is confirmed, close it"* or *"new item under Scene 6: …"*.

---

## Hosting (GitHub Pages) — one-time

1. Push `production-tracker/` to `main` (done).
2. GitHub → **Skrekkfilm → Settings → Pages**
3. **Source: "Deploy from a branch"** → Branch **`main`**, folder **`/ (root)`** → **Save**
4. After ~1 min the report is at:
   `https://sachowdhury10.github.io/Skrekkfilm/production-tracker/production-tracker.html`
5. Share that link with the crew. No account, works on phones. Every later push redeploys it.

## Running it locally (offline)

- **Served:** from this folder, `python3 -m http.server 8000` → open
  <http://localhost:8000/production-tracker.html>
- **Double-clicked from disk:** the browser blocks the CSV read; use the
  **"Load CSV file"** buttons the page shows to pick the two files by hand.

## Deadlines note

Dates are copied as spoken in the meetings ("Thursday night", "Mon scout"). Principal
photography lines up with the dolly rental (pickup the 23rd, return by 10 AM the 26th) →
**the weekend of the 24th–26th**. Confirm against the live schedule.
