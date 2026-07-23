# UnBurden — Revival Audit

_Audit date: 2026-07-23 · Repo: abhishek2395/UnBurden-app · Live: unburden-stucal.netlify.app_

## 1. What this project is

A single-page **student-loan payoff calculator**. Marketing landing page (Home / Features / How It Works / Contact) plus a calculator that shows an amortization schedule and models "accelerated payoff" strategies (extra EMIs, annual EMI step-ups, lump sums). Built with **Bolt** (StackBlitz), exported once as a single "Initial commit" on 2024-12-24.

**Stack:** Vite 5 · React 18 · TypeScript 5.5 · Tailwind 3 · lucide-react · canvas-confetti · date-fns · react-intersection-observer. No backend, no router, no tests, no CI. ~2,700 LOC across 59 files.

## 2. What works today (verified live)

| Area | Status |
|------|--------|
| Landing page (hero, features, how-it-works, contact) | ✅ Renders, looks polished |
| Nav (desktop + mobile hamburger, smooth-scroll anchors) | ✅ Works |
| Core amortization math | ✅ **Correct** — verified $50k @ 7.5% / 10yr → EMI $593.51, interest $21,221 |
| Amortization schedule table w/ per-year tabs | ✅ Works |
| "Enable UnBurden Features" toggle → extra EMI / annual increase / lump sum sliders | ✅ Wired to the engine |
| Confetti + savings "celebration" card when a strategy saves money | ✅ Works |
| Payoff-date comparison (standard vs accelerated) | ✅ Works when a start date is set |

The app is genuinely functional — the calculator is not a mockup.

## 3. Broken / incomplete features (the gaps)

### High impact
1. **Currency selector is fake.** The USD/EUR/GBP/INR dropdown (`ui/InputField.tsx`) has no `onChange`, its value is never read, and every output is hardcoded to `$` with `.toFixed(2)`. Either make it real (symbol + locale formatting) or remove it.
2. **No "AI-powered tools" — the headline over-promises.** Hero says _"AI-powered tools and personalized insights."_ There is zero AI/ML anywhere. This is the single biggest gap between the pitch and the product. (Also the most interesting revival opportunity — see §9.)
3. **RapidAPI integration is dead code AND a security leak.** `src/api/loanCalculator.ts` + `hooks/useLoanCalculation.ts` + `types/api.ts` call an external amortization API that the app never actually uses (calc is 100% local). The API key is committed in `.env` (see §6).
4. **Nothing is savable or shareable.** "How It Works" step 4 literally says _"Download or share your personalized plan"_ — but there is no download, no share, no PDF, no export, no permalink. Broken promise in the copy.

### Medium impact
5. **No input validation / guardrails.** You can enter absurd values (e.g. 0% interest → division blows up; 1000-year term; negative-ish edge cases). No max caps, no friendly errors.
6. **No persistence.** Refresh = everything gone. No localStorage, no saved scenarios, no "compare two plans side by side."
7. **Contact is a mailto only.** No working contact form despite the "Let's Connect" framing. Email is `doitteam12@gmail.com` (a placeholder-looking address, not your primary).
8. **Theme system is built but disconnected.** `ThemeContext` (indigo/orange) + `ThemeToggle` exist but are never mounted in `App.tsx`. Dead.
9. **Lump-sum "monthly" frequency is punishing / probably not intended** — applies the lump sum *every single month*, which is rarely what a user means.

### Low impact
10. No favicon/branding polish, no meta/OG tags for sharing, no analytics.
11. `startDate` is optional but several nice outputs (payoff calendar date) only appear when it's set — discoverability is poor.

## 4. UI / UX assessment

**Strengths:** Cohesive dark cosmic aesthetic, good typography, nice micro-interactions (confetti, gradient orbs, scroll animations), responsive nav. It looks like a real product.

**Issues to fix:**
- **Heavy visual effects are a rendering/perf risk.** Multiple `blur-3xl` orbs + `animate-pulse` + per-card `backdrop-blur-md`. During this audit the headless browser failed to composite these and painted large areas **white** (the DOM was correct — background computed to `rgb(10,10,10)` at full height — so this reads as a filter-compositing artifact, not a broken layout). Still worth de-risking: it's a real GPU cost on low-end devices and older Safari. **→ Verify in real Chrome/Safari/Firefox before assuming it's fine.**
- No loading / empty / error states in the calculator (instant local calc, so tolerable, but there's no "enter values to begin" guidance).
- Results appear far down the page with no auto-scroll — after clicking Calculate, the user may not realize results rendered below.
- No number formatting in inputs (type `50000`, not `50,000`).
- Accessibility unaudited: color-contrast on `text-neutral-400`, focus rings, `aria` labels on the custom toggle/sliders.

## 5. Backend assessment

**There is no backend.** It's a static SPA. That's fine for a calculator, but every "product" feature (save plans, share links, contact form, accounts, AI insights) needs *something* server-side. When you add those, the natural fit is:
- **Vercel** (you already plan to move here) → serverless functions / API routes for any AI calls or form handling.
- The exposed RapidAPI pattern (key in client `.env`, `VITE_` prefix = **shipped to the browser**) must **never** be repeated. Any real API key belongs in a serverless function, never a `VITE_` var.

## 6. 🔴 Security — fix before anything else

- **A live RapidAPI key is committed in `.env` and public on GitHub:** `VITE_RAPID_API_KEY=63663c5f...af6`. `.env` is **not** in `.gitignore`. Anyone can use it on your account.
  - **Action:** revoke/rotate that key on RapidAPI now, add `.env` to `.gitignore`, and purge it from git history (or, simplest: since the API is unused, delete the whole RapidAPI integration and the `.env`).
- `VITE_`-prefixed env vars are bundled into client JS by design — treat them as public forever.

## 7. Dead code to remove (safe deletions)

Never imported anywhere: `components/Calculator.tsx`, `components/Dashboard.tsx`, `components/SummaryCard.tsx`, `components/LoanCard.tsx`, `components/Slider.tsx` (old multi-loan concept), `components/ThemeToggle.tsx`, `contexts/ThemeContext.tsx`, `utils/themeUtils.ts`, `utils/calculations.ts` + `types/loan.ts` (old `Loan[]` model), `utils/unburdenCalculations.ts` (superseded by `loanCalculations.ts`), `api/loanCalculator.ts` + `hooks/useLoanCalculation.ts` + `types/api.ts` (dead RapidAPI), `components/ui/SectionDivider.tsx`, `components/HowItWorks/StepArrow.tsx`, `Navigation/hooks/useActiveSection.ts`, `Navigation/hooks/useScrollDirection.ts`, `Navigation/types.ts`.

That's ~1/3 of the files. Removing them shrinks the mental model a lot.

## 8. Infra / tooling upgrades

- **Node 18 → 22** (your stated blocker). No code changes needed; bump `engines` and Netlify/Vercel Node setting.
- **Netlify → Vercel** (planned). Trivial for a static Vite SPA; becomes valuable once you add serverless functions for AI/forms.
- Add: `.nvmrc` / `engines` field, a `README` that isn't the Bolt boilerplate, ESLint is present but no Prettier, **no tests** (the calc engine is pure functions — ideal for a few Vitest unit tests to lock in correctness).
- `package.json` name is still `vite-react-typescript-starter`, version `0.0.0`.

## 9. Suggested revival roadmap (prioritized)

**Phase 0 — Hygiene (hours):** rotate the API key, gitignore `.env`, delete dead code, bump Node 22, move to Vercel, real README.

**Phase 1 — Make the copy true (days):** either build the promised features or fix the promises. Concretely: real currency support, plan **export/share** (PDF + shareable URL via encoded state), input validation, localStorage persistence, auto-scroll to results, and mount the theme toggle (or delete it).

**Phase 2 — The AI story (the differentiator):** the hero already promises "AI-powered insights." This is your PM-portfolio moment — add a genuinely useful LLM layer via a Vercel serverless function: e.g. "explain my amortization in plain English," "given my income, is accelerating worth it vs investing the difference," refinance/repayment-strategy suggestions, or a natural-language "what if I pay $200 more/month?" assistant. Keep the API key server-side.

**Phase 3 — Product depth:** multi-loan portfolios (the abandoned `Dashboard`/`Loan[]` model hints this was once the plan), avalanche vs snowball comparison, save/compare scenarios, accounts.

---
_Bottom line: solid, correct, good-looking calculator with an honest engine — but the marketing copy writes checks the product doesn't cash (AI, currencies, export/share). Revival = close that gap, starting with the leaked key and the dead code._
