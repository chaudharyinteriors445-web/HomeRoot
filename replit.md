# Home Root Farms - Atta Collection

## Overview

Home Root Farms is an e-commerce web application for a premium organic flour brand specializing in stone-ground atta (flour) products made from ancient grains and millets. The application showcases a collection of heritage grain flours with detailed product information, health benefits, and educational content about stone-grinding technology. The platform emphasizes the nutritional advantages of stone-ground flours over traditional chakki-milled alternatives, targeting health-conscious consumers seeking high-quality, nutrient-rich flour products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and caching

**UI Component Strategy**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled base components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system with three typography families:
  - Cormorant Garamond (headings) - elegant serif
  - Nunito (body) - clean sans-serif
  - Playfair Display (display/accent) - special display elements
- Custom color palette centered around wheat (#cfa15a), organic green (#7c9a47), and warm beige (#f5e6d0)

**Component Organization**
- Page components in `client/src/pages/` (Home, Products, ProductDetail, About, Contact, Compare, ColdPressedBenefits)
- Reusable UI components in `client/src/components/` (Header, Footer, ProductCard, TrustBadges, WhatsAppButton, ComparisonTable)
- Shadcn UI primitives in `client/src/components/ui/`
- Static product data defined in `client/src/data/products.ts`

**State Management Approach**
- Static product catalog (no dynamic API fetching for products currently)
- React Query configured for future API integration with custom query functions
- Local component state using React hooks for UI interactions (filters, forms)

### Backend Architecture

**Server Framework**
- Express.js HTTP server with TypeScript
- HTTP server created for potential WebSocket upgrade capability
- Middleware stack: JSON parsing, URL encoding, request logging with timestamps
- Custom logging utility tracking request duration and JSON responses

**API Structure**
- RESTful API endpoints prefixed with `/api` (currently minimal implementation)
- Routes registered through `registerRoutes()` function in `server/routes.ts`
- Static file serving for production builds via `serveStatic()` middleware
- SPA fallback routing (all non-API routes serve `index.html`)

**Development vs Production**
- Development: Vite middleware integration with HMR over `/vite-hmr` path
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration via `NODE_ENV`

### Data Storage Solutions

**Current Implementation**
- In-memory storage implementation (`MemStorage` class) for user data
- Storage abstraction layer via `IStorage` interface for future flexibility
- Product data stored as static TypeScript objects (no database)

**Database Preparation**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` with users table
- Migration system configured (`drizzle.config.ts`) pointing to `./migrations`
- Database connection via `DATABASE_URL` environment variable
- Note: Database may not be actively provisioned yet; system ready for PostgreSQL addition

**Data Models**
- User schema: id (UUID), username (unique), password
- Product type interface: comprehensive product details including nutritional info, health benefits, images
- Zod validation schemas for runtime type checking via `drizzle-zod`

### External Dependencies

**Third-Party Services & APIs**
- Neon Database (PostgreSQL serverless) - prepared but may not be connected
- Google Fonts CDN for typography (Cormorant Garamond, Nunito, Playfair Display)
- WhatsApp Business integration via deep links for customer contact (`wa.me` links with phone number +919876543210)

**Build & Development Tools**
- ESBuild for server-side bundling with selective dependency bundling (allowlist approach)
- PostCSS with Tailwind CSS and Autoprefixer


**UI Libraries**
- Radix UI primitives (28+ component packages for accessible UI elements)
- Embla Carousel for image carousels
- React Hook Form with Zod resolvers for form validation
- Lucide React for icons
- React Icons (simple-icons) for social media icons
- date-fns for date formatting
- cmdk for command palette components
- class-variance-authority (CVA) for component variant management

**Session & Security** (Prepared but not actively used)
- Express Session with connect-pg-simple for PostgreSQL session store
- Passport.js for authentication (configured but not implemented in routes)

**Design System Implementation**
- Custom CSS variables for theme colors and design tokens
- Light/dark mode support via CSS custom properties
- Responsive design with mobile-first approach
- Custom hover and elevation effects via Tailwind utilities