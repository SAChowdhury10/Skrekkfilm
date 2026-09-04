# Handoff: Wind Gust Rig — Film Set Diagram & Deck

## Overview
Technical brief for a junior rigging engineer: a wind rig with two modes on the same fan/apparatus. Mode A is a cued gust that lifts a 10 × 10 in sheet of paper from a seated actor's lap on a park bench and carries it up and sideways out of the high corner of the camera frame. Mode B is a continuous general wind — strong enough to visibly move hair, loose clothing, and leaves — for medium-to-wide shots. Two deliverables: a single-page diagram sheet and a 5-slide presentation deck of the same content.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, plain HTML, print pipeline, etc.) using its established patterns — or, if no environment exists yet, choose the most appropriate framework and implement there. The `.dc.html` files open directly in a browser for reference.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and diagram geometry are final. Recreate pixel-perfectly. The two SVG diagrams are exact — reuse their SVG source verbatim if possible.

## Design System
Bound to the **Une Faible Impression** design system (independent film production house — moody, rural, literary):
- Everything is **Arial Bold, ALL CAPS** — hierarchy via size and letter-spacing only (tighter tracking at display sizes, wider as size drops).
- Flat surfaces, 1px hairline borders, 0 border radius, no shadows, no gradients, no emoji, no icon fonts (typographic glyphs only: →, ×, ↔).
- Max two background colors per composition.

## Screens / Views

### 1. Diagram sheet — `Wind Gust Rig Diagram.dc.html`
- **Purpose**: one-page printable/shareable rig brief.
- **Layout**: 1400px centered container, 48px/32px/64px padding, parchment `#EEE8DA` background, ink `#211A16` text.
- **Header**: bottom border 2px `#211A16`, flex space-between. Left: eyebrow "UNE FAIBLE IMPRESSION — SET RIGGING" (12px, 3px tracking, `#7D6F5B`) over title "WIND GUST RIG — PAPER LIFT, PARK BENCH" (34px, 1px tracking). Right: two spec lines (12px, 2px tracking, `#4A4B43`, line-height 1.8): "SHEET: 10 × 10 IN STANDARD PAPER" / "EFFECT: LIFT → UP + SIDEWAYS → EXIT HIGH FRAME CORNER".
- **Diagram row**: 2-column grid, 32px gap. Each panel: 1px `#4A4B43` border; header bar `#3A2E2B` bg, `#EEE8DA` text, 13px, 3px tracking, 10px 16px padding; SVG body (viewBox 0 0 640 420, bg `#EEE8DA`).
- **Footer strip**: 4-column grid, 24px gap, 1px `#4A4B43` top border, 24px top padding. Column headings 12px / 2px tracking / `#211A16` with 1px `#7D6F5B` bottom border; body 11px / 1px tracking / line-height 1.9 / `#4A4B43`.
- **General wind footer note**: full-width block below the 4-column strip, same heading/body styling, 1px `#4A4B43` top border, 24px top margin/padding. Covers the dual-mode (continuous, medium-to-wide) requirement — see Requirements copy below.

### 2. Deck — `Wind Gust Rig Deck.dc.html`
1920×1080 slides, built on a deck shell (`deck-stage.js` handles scaling/nav — replace with the target environment's deck mechanism or plain sections).
- **Slide 01 — Title**: bg `#3A2E2B`, text `#EEE8DA`, flex column space-between, 120px/140px padding. Eyebrow 26px/6px tracking `#8E927A`; title 96px/2px tracking, line-height 1.1, max-width 1400px; two spec lines 30px/3px tracking `#7D6F5B`, line-height 1.7; footer line 24px/3px tracking `#8E927A`.
- **Slide 02 — Side view**: bg `#EEE8DA`, 80px/140px padding. Header row: title 48px left, subtitle 24px `#7D6F5B` right, 2px `#211A16` bottom border, 24px padding-bottom. Diagram SVG centered, full remaining height.
- **Slide 03 — Top view**: same layout as slide 02, top-view SVG.
- **Slide 04 — General wind**: same layout as slides 02/03. SVG is a two-panel comparison (viewBox 0 0 640 420, hairline dashed divider at x=320): left panel "Mode A — Paper Lift" (narrow, localized wedge aimed up at the bench, matching slide 02's geometry at small scale); right panel "Mode B — General Wind" (wider camera frame, broad wedge spanning full frame width, three level sweep-lines labeled HAIR / CLOTHING / LEAVES). Bottom caption states both modes use the same fan/rig, switching only the run mode (cued burst vs. continuous) and aim (upward-at-bench vs. level sweep). New content — not bound by the "do not alter" note on slides 02/03.
- **Slide 05 — Requirements**: same header style ("REQUIREMENTS"); body is a 2-column, 3-row grid, 40px×64px gap, 40px top padding. Each cell: heading 28px/3px tracking with 1px `#7D6F5B` bottom border (12px padding-bottom, 16px margin-bottom); body 24px/1px tracking, line-height 1.7, `#4A4B43`. Five cells: Wind source, Paper-lift airflow, Power, Outdoors (2×2), then General wind (dual mode) spanning both columns in row 3.

## Diagram content (domain-critical — do not alter)
- **Side view**: camera frame rectangle; ground line; bench WITH back rail behind the actor; actor seated, paper on lap; dashed moss `#8E927A` paper path curving up-right, exiting the high corner; fan at left, labeled "FAN — LEFT OF FRAME / NEVER BEHIND BENCH"; airflow wedge (moss at 0.35 opacity) labeled "BROAD, DIFFUSE AIRFLOW / AIMED SLIGHTLY UPWARD".
- **Top view**: camera directly in front of bench with dashed frame-edge lines; dimension line camera↔bench labeled "DISTANCE: TBD / PART OF THIS ANALYSIS"; bench back drawn as a bar labeled "BENCH BACK — BLOCKS WIND FROM BEHIND"; fan on the LEFT side of the bench, off-camera, "3–5 M, CONFIRM IN TEST"; operator position "TRIGGERS ON CUE"; dotted power cable run to an outlet, "POWER — TAPED CABLE RUN, CLEAR OF CREW PATHS".

## Requirements copy (slide 05 / footer strip)
- **Wind source**: Electric fan or blower, fully out of frame — left side of bench. Variable speed + on-cue trigger. Quiet as practical — production sound.
- **Paper-lift airflow**: Broad, diffuse gust — lifts a 10 × 10 in sheet from a seated lap and carries it toward the high frame corner. Repeatable take to take.
- **Power**: Confirm draw, outlet type, and cable length before load-in. Tape and mat all runs; keep clear of camera and crew movement.
- **Outdoors**: Sandbag stands and fan. Test against natural wind. Watch hair, clothing, and leaves in the gust path. Small footprint for a park location.
- **General wind (dual mode)**: Same fan/rig also runs continuously as a general wind source for medium-to-wide shots — strong enough to visibly move hair, loose clothing, and leaves in frame, not just lift the paper. Re-aim from the upward, bench-only burst to a level sweep across the full shot; confirm sustained-run speed setting separately from the cued-burst setting.

## Interactions & Behavior
Static content. Deck: keyboard prev/next navigation, slides scale to viewport at 16:9. No hover states, no animations, no forms.

## State Management
None — a current-slide index for the deck is the only state.

## Design Tokens
Colors: Faded Tobacco `#7D6F5B`, Charcoal Slate `#4A4B43`, Soft Moss `#8E927A` (accent/diagram paths only), Deep Umber `#3A2E2B`, Parchment `#EEE8DA`, Ink `#211A16`.
Type: Arial Bold, all caps, everywhere. Sizes used: 96/48/34/30/28/26/24/13/12/11/10px. Tracking: 1–3px (wider on smaller sizes, up to 6–8px for eyebrows).
Spacing: 4px base; paddings used: 12, 16, 24, 32, 48, 64, 80, 120, 140px. Border radius: 0. Shadows: none. Borders: 1px hairline `#4A4B43`/`#7D6F5B`, 2px `#211A16` section rules.

## Assets
No images. Both diagrams are inline SVG (in the HTML files). No logo exists for the brand — wordmark is plain type.

## Files
- `Wind Gust Rig Diagram.dc.html` — one-page diagram sheet (source of truth for both original SVGs)
- `Wind Gust Rig Deck.dc.html` — 5-slide deck
- `deck-stage.js` — deck shell used by the prototype (reference only; not for production)

Speaker notes are embedded in the deck file as `data-speaker-notes` attributes on each slide section.
