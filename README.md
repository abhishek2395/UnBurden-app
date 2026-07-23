# UnBurden

A student loan payoff calculator. Enter your loan, then model accelerated-payoff strategies — extra EMIs per year, an annual EMI step-up, and lump-sum payments — against the standard amortization schedule to see interest saved and months shaved off.

**Live:** https://unburden-stucal.netlify.app _(migrating to Vercel)_

## Features

- Full monthly amortization schedule, broken out by year
- Standard vs. accelerated comparison: interest saved, months saved, payoff date
- Three acceleration levers: extra EMIs/year, annual EMI increase %, recurring lump sums

## Tech stack

Vite 5 · React 18 · TypeScript 5.5 · Tailwind CSS 3 · lucide-react

The calculator runs entirely client-side — there is no backend and no external API. All math lives in [`src/utils/loanCalculations.ts`](src/utils/loanCalculations.ts).

## Getting started

Requires **Node 22+** (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Project structure

```
src/
  components/
    LoanCalculator/   calculator form, results dashboard, repayment schedule
    Navigation/       nav bar, mobile menu
    Features/         landing page sections
    HowItWorks/
    Contact/
    ui/               shared primitives (InputField, CosmicToggle, Celebration)
  pages/              HomePage, CalculatorPage
  utils/              loanCalculations.ts (the engine), dateUtils.ts
  types/              calculator.ts
```

## A note on secrets

Vite inlines every `VITE_*` environment variable into the client bundle — they are **public**. Never put a real secret in `.env`. When server-side keys are needed (e.g. for the planned AI features), they belong in a serverless function.

## Roadmap

See [`REVIVAL_AUDIT.md`](REVIVAL_AUDIT.md) for the full audit and phased plan.
