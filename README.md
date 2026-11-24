# Miss DIY — Handmade Crafts & Gift Store

An e-commerce web application built for **Miss DIY**, showcasing handcrafted gifts, accessories, and decor—including crochet and fuzzy-wire bouquets, Lippan art, handmade bracelets, phone charms, and keychains.

## Features

- **Storefront & Discovery:** Hero showcase, category browsing, featured product cards, customer reviews, and an Instagram gallery section.
- **Product Pages:** Dedicated product detail views with imagery and descriptions.
- **Shopping Cart & Wishlist:** Persistent cart and wishlist state management using custom React hooks (`useCart`, `useWishlist`).
- **Responsive UI:** Built with Tailwind CSS and shadcn/ui components for mobile and desktop screens.
- **Supabase Integration:** Pre-configured Supabase client for backend data and future authentication/order storage.

## Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling & UI:** Tailwind CSS, shadcn/ui, Lucide Icons
- **Backend:** Supabase
- **Testing:** Vitest (unit tests) & Playwright (end-to-end tests)
- **Linting:** ESLint

## Project Structure

```text
DIY-products/
└── Miss DIY/
    ├── public/                  # Static assets (favicon, robots.txt)
    ├── src/
    │   ├── assets/              # Product photography and craft imagery
    │   ├── components/          # Storefront sections (Navbar, Hero, Categories, Reviews, Footer)
    │   │   └── ui/              # Reusable shadcn/ui components
    │   ├── data/                # Product catalog data
    │   ├── hooks/               # Custom hooks (useCart, useWishlist, use-mobile, use-toast)
    │   ├── integrations/        # Supabase client and generated types
    │   ├── pages/               # Route pages (Index, ProductPage, CartPage, NotFound)
    │   └── test/                # Unit test setup and specs
    ├── supabase/                # Supabase project configuration
    └── package.json
