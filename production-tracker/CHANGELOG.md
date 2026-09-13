# Production Tracker — Changelog

Every meeting's batch of updates to `scene-shot-items.csv` / `production-wide-concerns.csv`
is recorded here, newest first. Rows are referenced by ID (`SS-##`, `PW-##`).

---

## 2026-09-13 — Runtime lock, Scene 1→3 redesign, PD audit, Sam prep

From four Zoom sessions: **2026-09-10** (runtime/pacing + PD audit), **2026-09-11**
(Scene 1→3 transition redesign + weekend scouting), and **2026-09-13** (final
runtime lock + Scene 1 shot-by-shot PD review + Sam meeting prep).

**`scene-shot-items.csv`** — added `SS-68`…`SS-74`. Updated `SS-01`, `SS-03`,
`SS-05`, `SS-08`, `SS-13`, `SS-15`, `SS-16`, `SS-17`, `SS-18`, `SS-21`, `SS-26`,
`SS-31`, `SS-36`, `SS-51`, `SS-53`, `SS-54`, `SS-57`, `SS-58`, `SS-65`, `SS-66`.

Highlights: **the Scene 1→3 transition was redesigned** — the road/walking
approach is cut entirely in favor of a static paper/kneeling composition that
mirrors into the boy's scene (`SS-15`), resolving the walking-shot style clash
(`SS-66`) and superseding the old road-dolly setup (`SS-13`, now Deferred).
Scene 6's jump sequence decided as one continuous shot with a fabric-grip
backup (`SS-31`). Scene 1 Shot 1 got a full composition + dressing pass (5
depth layers, ~40% sky, fence/mist/leaves — `SS-51`), plus new shots for the
bicycle/cigarette re-blocking (`SS-70`), Holly's OTS angle (`SS-71`), and not
forcing the book into frame (`SS-72`). New Scene 5 "gone" pan shot flow
(`SS-68`) and a Scene 8 camera-movement question (`SS-69`) added.

**`production-wide-concerns.csv`** — added `PW-41`…`PW-54`. Updated `PW-06`,
`PW-07`, `PW-15`, `PW-32`, `PW-37`, `PW-39`, `PW-40`.

Highlights: **`PW-32` runtime is now Decided** — hard cap 20:00, practical
target 18:00, per-scene budget locked (Scene 1 = 4:00, Scene 3 = 2:00 after
its rework, Scene 5 = 4:00, Scene 7 = 3:00, everything else at the 1:00
floor) — matches the [UFI Coverage Report artifact](https://claude.ai/code/artifact/a7df8c27-bfef-4612-b145-93c4f4708b8e),
which was updated in the same session. **`PW-37`'s Tarkovsky-vs-French-New-Wave
tension is now Decided**: lean into the strangeness rather than normalize.
New: a full weekend scouting plan (`PW-46`), a shot-by-shot PD audit
initiative (`PW-45`), an organic-dressing philosophy (`PW-43`), sound/score
sourcing (`PW-50`), a Scene 1 acquisition list (`PW-52`), and a **flagged
scheduling conflict** (`PW-53`) between the confirmed Oct 24–26 shoot
weekend and new mentions of an Oct 26–27 test/rehearsal weekend — needs
reconciling, not yet resolved.

---

## 2026-09-09 — Test-footage review + Tarkovsky/FNW style call

From the two Zoom meetings of **2026-09-09** (16:19 test-footage review; 17:32
scene 1–4 review and stylistic tension discussion).

**`scene-shot-items.csv`** — added `SS-51`…`SS-67`. Updated `SS-03` (diagonal
pan-tilt to the notebook, now Decided), `SS-05`, `SS-06`, `SS-08`, `SS-13`,
`SS-29`, `SS-30` (added meeting notes to their Log/Notes).

Highlights: Scene 1 Shot 1 composition locked (horizon, sky %, depth layers);
two dialogue-delivery versions to shoot for Shot 1; Scene 1 bench leaning
no-handle; Scene 5 staircase location and framing settled; Scene 6
pan-to-woman/push-to-boy-close-up flagged as needing a dolly; **Scene 3's
walking shot flagged as a P1 blocker** (its French New Wave register clashes
with Scene 1's Tarkovsky register) - proposals due Friday 2026-09-11.

**`production-wide-concerns.csv`** — added `PW-33`…`PW-40`. Updated `PW-15`
(bed prop: Marketplace frame or PVC-built, painted to look like metal; wood
is the fallback).

Highlights: storyboard shot order needs fixing (Scene 3 Shot 1 = Scene 1 Shot
9/10); Oct 25 scout with Holly confirmed; **stylistic tension (Tarkovsky vs.
French New Wave) raised as a top-level concern**; lock target scenes 1–4 by
2026-09-11, scenes 5–8 by 2026-09-14/15; Ishmam's possible October travel
flagged against the Oct 25 scout date.

Note: source notes have some shot-numbering ambiguity around the Scene 5
staircase (labelled "Shot 1" in one heading, "Shot 6 of Scene 1" in an open
question) - mapped to **Scene 5, Shot 6** per `SS-21`/`SS-22`; flag for
correction if wrong.

---

## 2026-09-03 — Initial build

- Created the tracker from the Zoom meeting notes of **2026-08-30** (Scenes 1–4, budget,
  crew) and **2026-09-02** (Scenes 3–8, equipment, costume).
- `scene-shot-items.csv` — 50 rows, `SS-01`…`SS-50`
- `production-wide-concerns.csv` — 32 rows, `PW-01`…`PW-32`
- Added `ID`, `Updated`, `Log` columns; retired the Google Sheet — the two CSVs in this
  folder are now the single source of truth, served with the HTML report via GitHub Pages.
