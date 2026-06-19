# RevenueOS

RevenueOS is a production-style frontend demo for an AI sales agent operating system. It packages revenue intelligence, outreach orchestration, and deal execution into a polished single-page React application powered entirely by realistic mock data.

## Demo disclaimer

This repository is a frontend-only experience. There is **no backend**, **no live integrations**, and **no external API traffic**. Every workflow, chart, conversation, and insight is powered by local TypeScript mock data to simulate a fully operational product.

## Workspaces

### Mission Control
- KPI command center with animated sparklines
- AI chat with simulated streaming responses
- Autonomous activity feed and live prospect monitoring
- Pipeline overview with stage-level visibility

### Company Intelligence
- Scrollable account list with fit scoring
- Rich company profiles with hiring, buying, and funding signals
- AI-generated company briefs and growth indicators

### Contact Intelligence
- Master-detail contact explorer
- Engagement scoring, trend analysis, and social activity
- Career timelines, AI insights, and stakeholder mapping

### Outreach Studio
- Sequence builder with editable steps and preview controls
- AI-style personalization options for tone, length, and context
- Analytics dashboards for funnel and performance trends

### Deal Room
- Kanban pipeline board with stage grouping
- Detailed deal intelligence panels with risks and next actions
- AI win probability, stakeholder context, and recent activity

## Tech stack

- Vite + React 18 + TypeScript
- TailwindCSS
- Hand-rolled shadcn/ui-style primitives
- React Router v6
- Framer Motion
- Recharts
- Lucide React
- class-variance-authority, clsx, tailwind-merge
- Inter via `@fontsource/inter`

## Getting started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The project is expected to build cleanly with zero TypeScript errors.
