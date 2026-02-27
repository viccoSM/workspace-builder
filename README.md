# Workspace Builder

A modern workspace setup builder built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Zustand**.

Users can customize their desk, chair, and accessories, then complete a checkout flow with persistent global state.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand (with persist middleware)

---

## Features

- Select desk and chair
- Toggle multiple accessories
- Dynamic total price calculation
- Global state management
- Persistent state across refresh
- Checkout validation
- Route protection for incomplete setup

---

## Architecture

- Zustand for scalable global state
- Persist middleware for UX consistency
- Derived pricing logic centralized in store
- Clean separation between UI and state logic

---

## Run Locally

```bash
git clone https://github.com/your-username/workspace-builder.git
cd workspace-builder
npm install
npm run dev