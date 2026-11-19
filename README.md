# Refund App (front end)

> **Work in progress.** The screens are built, but they are not connected to the API yet.

Front end of the refund system whose back end is [RefundAPI](https://github.com/loboganng/RefundAPI). Employees submit refund requests for work expenses with a receipt, and managers review them.

## What is done

- Sign-in and sign-up screens.
- Employee area: refund request form (name, category, amount, receipt upload) and confirmation screen.
- Manager area: dashboard with a search form for refund requests.
- Separate layouts and routes for authentication, employees and managers, plus a 404 page.

## What is missing

- Calling RefundAPI (sign-in, creating and listing refunds, receipt upload).
- Auth context to choose the routes by the user's role (today the manager routes are hard-coded in `src/routes/index.tsx`).
- Deploy.

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS 4, React Router 7.

## Getting started

```bash
npm install
npm run dev
```
