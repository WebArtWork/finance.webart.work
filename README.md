# Finance

Finance is not a budgeting app — it's a **full personal & business finance
operating platform**. It connects **accounts → goals → investments → loans
→ assets → financial reports → funding → portfolios** in one place, so a
person's finances and a company's finances — and everyone who advises or
invests in them — live in one system instead of being scattered across
banking apps, spreadsheets, and PDFs.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet.

## The core entities

- **Account** — a bank account, card, or cash account. Tracks balance,
  currency, institution, and transaction history.
- **Transaction** — an income or expense entry linked to an account,
  category, date, and (optionally) a goal, loan, or asset.
- **Goal** — a financial target (e.g. *save $10,000 for a house
  down-payment by 2028*). Tracks target amount, deadline, progress, and
  linked accounts/contributions.
- **Investment** — a holding (stocks, bonds, funds, crypto, real estate,
  etc.) with quantity, cost basis, current value, and return history.
- **Portfolio** — a collection of investments, tracked for total value,
  allocation, performance, and risk.
- **Loan** — money borrowed or lent: principal, rate, schedule, remaining
  balance, and payment history.
- **Asset** — property, vehicles, equipment, or other owned items with
  value, ownership, depreciation, and linked documents.
- **Liability** — a debt or obligation (loans, payables, taxes owed)
  tracked against assets to compute net worth/equity.
- **Financial Report** — a structured statement (income statement, balance
  sheet, cash flow) generated for a person or company over a period.
- **Financial Plan** — an advisor-built plan for a client: goals,
  recommended allocations, risk profile, and milestones.
- **Funding Round** — a company's request for capital: amount, terms,
  use-of-funds, and the investors backing it.
- **Company Profile** — a business's financial identity: reports, funding
  needs, assets, liabilities, and investor relations.
- **Client** — a person or company an advisor manages, including their
  goals, portfolio, and financial plan.
- **Comment** — notes/feedback on a plan, report, or funding round.

## Roles

Every person or business on the platform plays one of these roles. Each
has its own marketing/onboarding page (`/for-*`):

1. **User** — manages personal finances, investments, financial goals,
   loans, assets, and financial history.
   ([/for-users](src/app/pages/for-users))
2. **Advisor** — analyzes finances, provides recommendations, builds
   financial plans, and manages client portfolios.
   ([/for-advisors](src/app/pages/for-advisors))
3. **Company** — manages business finances, funding needs, financial
   reports, assets, liabilities, and investor relationships.
   ([/for-companies](src/app/pages/for-companies))
4. **Investor** — discovers investment opportunities, invests in
   companies/projects, manages a portfolio, and tracks returns.
   ([/for-investors](src/app/pages/for-investors))

## Status

Static demo, no backend or persistence yet. For contributor/developer setup
and coding conventions, see [AGENTS.md](AGENTS.md).
