# Amazonia Modern Ecommerce Frontend

A responsive Amazon-inspired ecommerce frontend built with React, Vite, Tailwind CSS, React Router, Context API, Framer Motion, and Lucide icons.

## Project Structure

```text
src/
  components/
    home/
    layout/
    product/
  context/
  data/
  pages/
  services/
  utils/
```

## Setup

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Backend Integration Ideas

- Replace `src/services/productApi.js` with real REST or GraphQL calls.
- Persist cart state to user accounts and local storage.
- Add authenticated checkout, payment provider integration, inventory checks, and order history.
- Move product search to a backend search index for typo tolerance, filtering, and recommendations.
