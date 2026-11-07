# Ammu's Birthday Surprise 🎂

A mobile-first, forward-only birthday story from **Sai Teja** for **Ammu / Meena / Buuchiii**. Built with plain HTML, CSS and JavaScript — no React, no npm, no build step.

## The 12 screens

| # | Screen | What happens |
| --- | --- | --- |
| 0 | Lock | Four-digit padlock. `1108` or `0812` unlocks a live countdown to November 8. |
| 1 | Hero | Queen portrait, the three milestone badges, panda + puppy, and a “No” button that runs away. |
| 2 | Balloons | Pop four balloons to spell “You are my love”. |
| 3 | Cake | Blow into the mic (or tap the candles), then cut and serve the first slice. |
| 4 | Roses | Tap the six-rose bouquet to bloom six love notes. |
| 5 | Scratch card | Scratch the gold foil to reveal a secret photo message. |
| 6 | Gallery | Ten polaroids, each opening its own date / place / story modal. |
| 7 | Moments | Nine sacred-journey cards with the same story modal. |
| 8 | Lanterns | Release a wish lantern and watch it rise. |
| 9 | Letter | Break the wax seal and read a typewriter love letter. |
| 10 | Gift | Tap the gift box three times to open the promise. |
| 11 | Finale | Live “loving you since” timer, letter card, continuous fireworks and a blast button. |

## Run it

**Quick look**

Double-click `index.html`. Everything except the microphone works from a plain file.

**Best local preview**

```powershell
cd birthday-surprise
python -m http.server 8000
```

Then open <http://localhost:8000>.

**Microphone note:** browsers only allow mic access over `https://` or `localhost`. If permission is denied, the cake screen automatically falls back to “tap the candles” — the surprise is never blocked.

**Deploy:** drag the whole `birthday-surprise` folder into Netlify Drop, or publish it with GitHub Pages. Send Ammu the link.

## Files

```
birthday-surprise/
├── index.html        all 12 screens + the shared memory modal
├── style.css         glass cards, cake, roses, balloons, letter, finale styling
├── script.js         photos, stories, audio, FX, interactions, timers
├── music.mp3         soft music-box loop (replaceable)
├── README.md
└── photos/
    ├── meena.jpeg
    ├── hands.jpeg
    ├── kanchi.jpeg
    ├── iskcon gosala.jpeg
    ├── kotappakonda 2.jpeg
    ├── kotappakonda.jpeg
    ├── kondaveedu.jpeg
    ├── bus.jpeg
    ├── beach.jpeg
    ├── guntur.jpeg
    └── rose.svg       the illustrated bouquet rose
```

The ten `.jpeg` files are the real memory photos. Their names are matched exactly by `PHOTOS_DATA`; keep the spaces in `iskcon gosala.jpeg` and `kotappakonda 2.jpeg`.

## Personalise it

Everything personal lives near the top of `script.js`:

- `PHOTOS_DATA` — photo path, date, place, chip and the full Tenglish story for each polaroid.
- `MOMENTS_DATA` — the nine cards on the journey screen.
- `LOVE_NOTES` — the six notes that bloom from the roses.
- `LANTERN_WISHES` — the wish that floats into the sky.
- `LETTER_PARAGRAPHS` — the typewriter letter.
- `RELATIONSHIP_START` / `COMMITMENT_DATE` / `BIRTHDAY_MONTH` / `BIRTHDAY_DAY` — the two dates and birthday used by the lock, badges and timer.

The lock accepts `0812` (commitment) and `1108` (birthday). Change `LOCK_CODES` if you ever want different codes.

### Music

The included `music.mp3` is a gentle, seamlessly looping music-box track. To use your own song, drop it in beside `index.html` with the same name. If the file is missing, the built-in Web Audio music-box fallback starts instead. Music begins on the first tap and keeps playing through every screen; the `🎵` button in the top corner mutes it.

### Letter and finale copy

The letter and finale text are plain HTML in `index.html` — search for `LETTER_PARAGRAPHS` in `script.js` for the letter body, and the `screen-finale` section in `index.html` for the closing note.

## Intentional details

- The full name appears **once**, in the Screen 1 hero title. Everywhere else she is Ammu, Meena or Buuchiii.
- Dates: started **August 8, 2026** · committed **August 12, 2026** · birthday **November 8**.
- English + Tenglish only, with no Telugu script.
- Forward-only: no back buttons, page numbers, progress dots or upload/edit controls.
- The ten real photos are used in the gallery and mapped to the timeline; the hero and scratch card use the portrait.
- Panda 🐼 and puppy 🐶 companions appear on the hero, cake and gift screens.
- Reduced-motion preferences are respected, and all interactions have keyboard-focusable buttons and labelled dialogs.

> Tip: open the live link once on your own phone before November 8th to check the mic permission, photo paths and music.
