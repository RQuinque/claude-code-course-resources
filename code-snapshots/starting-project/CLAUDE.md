# CLAUDE.md

We're building the app described in @SPEC.MD. Read that file for general architectural tasks or to double-check the exact database structure, tech stack or application architecture. 
Keep your replies extremely concise and focus on conveying the key information. No unnecessary fluff, no tong code snippets. 
This file provides guidance to Claude Code (claude.ai/code) when working With code in this repository. 

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a starting-point snapshot: a freshly scaffolded Next.js 16 (App Router) + React 19 + Tailwind 4 app. Only `app/layout.tsx`, `app/page.tsx` and `app/globals.css` exist so far. `SPEC.MD` is the technical specification for what is to be built — read it before implementing features.

## Commands

Bun is the package manager and runtime (`bun.lock`).

- `bun install` — install dependencies
- `bun run dev` — dev server (`next dev`)
- `bun run build` / `bun run start` — production build / serve
- `bun run lint` — ESLint (flat config, `eslint-config-next`)

There is no test runner configured.

## Target architecture (from SPEC.MD)

A note-taking app: authenticated users create/edit/delete rich-text notes and can share them via a public URL.

- **Auth:** better-auth (email + password), integrated via Next.js middleware + server helpers; auth state is needed in both server components and client UI.
- **Editor:** TipTap (`@tiptap/react`, `starter-kit`) — bold, italic, H1–H3, inline code/code blocks, bullet lists, horizontal rules. Notes are stored as TipTap JSON.
- **Database:** single SQLite file (e.g. `data/app.db`) accessed with Bun's built-in SQLite client and **raw SQL** (no ORM). better-auth tables (`user`, `session`, `account`, `verification`) plus a `notes` table with `user_id`, `is_public`, `public_slug` indexes.
- **Layers:** server components for data fetching; client components for the editor/interactive UI; REST-style Route Handlers under `app/api/notes` (`GET/POST /api/notes`, `GET/PUT/DELETE /api/notes/:id`, `POST /api/notes/:id/share`); a DB helper module and a note repository (`lib/notes.ts`). All note endpoints require auth except public reads.
- **Validation:** `zod` is a dependency.

## Conventions

- Path alias `@/*` maps to the project root (`tsconfig.json`).
- Next.js 16 / React 19 differ from older versions; check `node_modules/next/dist/docs` or the official docs rather than relying on memory of earlier APIs.
