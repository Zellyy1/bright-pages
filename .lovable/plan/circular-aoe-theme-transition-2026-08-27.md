# Circular "AOE" Theme Transition

## Goal
Replace the current simple 250ms fade with a circular ripple reveal: when the theme toggle is clicked, the new theme expands outward from the button as a growing circle that covers the whole screen — like a spell's area of effect.

## How it works
Uses the **View Transitions API** (`document.startViewTransition`), the standard browser feature for exactly this effect:

1. On toggle click, capture the button's center coordinates (x, y).
2. Call `document.startViewTransition(() => applyTheme())` — the browser snapshots the old and new theme states.
3. Animate a `clip-path: circle()` on the new-theme snapshot, growing from radius 0 at the button position to a radius large enough to reach the farthest screen corner (computed from viewport size and click position).
4. Direction-aware feel:
   - Switching **to dark**: the dark circle expands outward from the button.
   - Switching **to light**: the light theme reveals the same way, so the circle "clears the darkness" from the click point.
5. Duration ~600ms with an ease-out curve for a smooth, weighty ripple.

## Changes

**`src/components/ThemeToggle.tsx`**
- In `toggle()`, get the button's bounding rect, compute center x/y and the max radius to the farthest corner.
- If `document.startViewTransition` exists, wrap the theme application in it; otherwise fall back to the current instant toggle.
- Pass coordinates to CSS via custom properties (`--theme-x`, `--theme-y`, `--theme-radius`) on the document element.

**`src/styles.css`**
- Add `::view-transition-old(root)` / `::view-transition-new(root)` rules.
- Old snapshot: no animation (stays still underneath). New snapshot: `clip-path` circle animation from `0px` to `var(--theme-radius)` at the toggle position.
- Disable the default cross-fade so only the circle effect shows.
- Keep the existing 250ms color transitions as a fallback but scope them out during an active view transition (View Transitions override element transitions anyway).
- Respect `prefers-reduced-motion`: skip the view transition entirely and apply the theme instantly.

## Fallbacks & edge cases
- Browsers without View Transitions API (older Firefox/Safari): current fade behavior remains — no breakage.
- Reduced-motion users: instant switch, no animation.
- No layout changes; only the toggle handler and stylesheet are touched.
