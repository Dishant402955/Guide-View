# Guide-View Monorepo

This repository uses **Turborepo** to manage multiple Node.js projects in a single place.

The goal is simple:
> **Co-locate multiple independent Node.js applications that together form one system, without forcing unnecessary coupling or opinions.**

---

## Why Turborepo?

This is **not** a single application.  
It is a system composed of multiple Node-based projects (apps, services, workers, etc.).

Turborepo is used **only** as:
- A task orchestrator
- A way to run, build, and manage multiple projects from one repo

We intentionally avoid heavy starters or opinionated setups.

---

## Repository Structure


- Each folder under `apps/` is a **fully independent Node.js project**
- All projects share **one lockfile** at the root
- No app is forced to share dependencies unless explicitly intended

---

## Prerequisites

- Node.js ≥ 18
- pnpm

Install pnpm globally if needed:

```bash
npm install -g pnpm
