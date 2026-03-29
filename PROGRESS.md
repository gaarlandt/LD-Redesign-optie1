# Project Progress

## Phase: Firebase Migration & Nav Updates (March 2026)

### Phase 1: Navigation Updates
| Task | Status |
|------|--------|
| Rename "Keuzehulp" to "Hondenkeuze" | Done |
| Reorder nav: Over ons, Hondenkeuze, Puppyagenda, Prijzen, FAQ, Contact | Done |
| Move route `/keuzehulp` to `/hondenkeuze` | Done |
| Update all internal references | Done |
| Add hover underline effect (brand green, desktop only) | Done |
| Verify in browser | Done |

### Phase 2: Firebase Hosting Setup
| Task | Status |
|------|--------|
| Create `firebase.json` with hosting config | Done |
| Create `.firebaserc` with project ID `website-f396e` | Done |
| Update `next.config.ts` (remove GitHub Pages logic) | Done |

### Phase 3: CI/CD Workflows
| Task | Status |
|------|--------|
| Create staging workflow (preview channels, expires 7d) | Done |
| Create production workflow (push to main → live) | Done |
| Remove old GitHub Pages deploy workflow | Done |

### Phase 4: Documentation
| Task | Status |
|------|--------|
| Create `CLAUDE.md` with project context | Done |
| Update `PROGRESS.md` with phased tracking | Done |

### User Action Required
| Task | Status |
|------|--------|
| Add `FIREBASE_SERVICE_ACCOUNT` secret to GitHub repo | Pending |

---

## Previous: Breed Selector Feature

| Task | Status |
|------|--------|
| Elien photo on About page | Done |
| WhatsApp floating button | Done |
| Keuzehulp (now Hondenkeuze) integration | Done |
| Contact page overhaul | Done |

### Notes
- Iframe X-Frame-Options needs configuring on keuzehulp.letsdog.nl
