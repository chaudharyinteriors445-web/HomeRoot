# TrueOrganic Farms – Atta Collection Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium organic/natural food brands (Whole Foods, Thrive Market) combined with clean e-commerce patterns (Shopify stores). The design emphasizes trust, authenticity, and scientific credibility while maintaining an earthy, premium aesthetic.

---

## Core Design Elements

### A. Typography
- **Headings**: Cormorant Garamond (elegant serif, appeals to health-conscious audience)
  - Use `font-heading` class for all heading elements
  - H1: Large, commanding presence for hero sections
  - H2/H3: Section headers with generous spacing
  - Global CSS automatically applies heading font to all h1-h6 elements
- **Body Text**: Nunito (clean, modern sans-serif)
  - Use `font-sans` class (default body font)
  - Paragraph text with optimal line-height (1.6-1.8) for readability
  - Button text in medium weight for clarity
- **Display Text**: Playfair Display (for special accents)
  - Use `font-serif` class for special display elements

### B. Color Palette (Provided)
- **Wheat**: #cfa15a (Primary accent, CTAs, highlights)
- **Organic Green**: #7c9a47 (Secondary accent, badges, trust signals)
- **Warm Beige**: #f5e6d0 (Backgrounds, cards, soft sections)
- **White**: Backgrounds and contrast
- **Charcoal**: Text (suggest: #2d2d2d or #333333)

### C. Layout System
**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8 for grids

---

## Page-Specific Layouts

### Homepage
**Hero Section** (80-90vh):
- Full-width background image of golden wheat fields at sunset
- Centered overlay content with blurred-background buttons
- Tagline: "Pure Atta. Ancient Grains. Modern Health." in large serif
- Dual CTAs: "Explore Products" + "Learn About Cold-Pressed"

**Trust Badges Section**:
- 4-column grid (2x2 on mobile) featuring circular icons
- Badges: "100% Organic", "Cold-Pressed", "Stone-Ground", "Low GI"
- Each badge: icon + title + one-line description

**Featured Products Grid**:
- 3-column layout (1 column mobile, 2 tablet, 3 desktop)
- 6 product cards showcasing Khapli, Whole Wheat, Multigrain, Bajra, Jowar, Ragi
- Each card: product image, title, short description, badge, CTA

**Why Cold-Pressed Preview**:
- 2-column split: left side has 3 key benefits with icons, right side has comparison image or illustration
- Link to full comparison page

### Products Listing Page
**Filter Sidebar** (desktop) / Collapsible Menu (mobile):
- Search bar at top
- Filter categories: Ancient Grain, Millet, Whole Wheat
- Active filter pills displayed

**Product Grid**:
- 3-column responsive grid (same as homepage)
- ProductCard component: image, title, price per kg, short description, badges, "View Details" button

### Product Detail Page
**Layout**:
- 2-column split (stacks on mobile)
- Left: Large product image (600x600px minimum)
- Right: Product title, price, description, health benefits list, nutritional info table

**Related Products**:
- Horizontal scroll carousel showing 4-6 related items
- "Order via WhatsApp" button (prominent, wheat color, with WhatsApp icon)

### Cold-Pressed Benefits Page
**Hero**: Bold headline "The Science Behind Cold-Pressed Atta"

**7 Scientific Benefits**:
- Vertical card layout with alternating image/text sides
- Each benefit: icon, title, 2-3 sentences, supporting fact/citation
- Benefits: Lower Heat/Higher Nutrients, Better Fiber, Lower GI, Wheat-Germ Oil, No Burnt Aroma, Longer Shelf Life, Better Dough Quality

### Comparison Page
**Header**: "Cold-Pressed vs Chakki Atta: The Complete Comparison"

**Comparison Table**:
- Side-by-side columns with Cold-Pressed (green highlights) vs Chakki Atta (neutral)
- Rows: Temperature, Nutrient Retention, Fiber Quality, Glycemic Index, Oil Preservation, Aroma, Shelf Life, Roti Quality

**Visual Cards Section**:
- 3 large cards highlighting top 3 differentiators with illustrations

### About Page
**Brand Story**:
- Single column, prose-width text (max-w-3xl)
- Interspersed with 2-3 images: wheat fields, mills, farmer imagery

**Values Grid**:
- 3-column: Sustainable Farming, Ancient Grains, Clean Processing
- Each with icon and paragraph

### Contact/Wholesale Page
**2-Column Layout**:
- Left: Contact form (name, email, phone, message, submit)
- Right: WhatsApp quick order, contact details, business hours

---

## Component Library

### Navigation Header
- Logo left, menu center/right
- Menu items: Home, Products, Cold-Pressed Benefits, About, Contact
- Mobile: Hamburger menu
- Sticky on scroll

### Footer
- 4-column grid: About, Quick Links, Products, Contact
- Social icons row
- Copyright centered at bottom
- Newsletter signup bar above footer

### WhatsApp Floating Button
- Fixed bottom-right corner
- Green circular button with WhatsApp icon
- Subtle shadow and hover lift effect

### Product Card
- Image with hover zoom effect
- Title in serif
- Price in bold
- Badges as small pills (organic green background)
- "View Details" button (wheat color)

### Comparison Table
- Sticky header on scroll
- Checkmarks/X marks for yes/no
- Temperature displayed with thermometer icons
- Percentage bars for nutrient retention

---

## Visual Elements & Imagery

### Images Needed
1. **Hero**: Golden wheat field at sunset/sunrise (full-width, high-quality)
2. **Product Images**: Each atta type in burlap sack or glass jar on wooden surface
3. **About Section**: Farmer in wheat field, traditional stone mill, organic farm landscape
4. **Benefits Page**: Scientific diagrams, temperature comparisons, grain close-ups

### Icons
- Use Heroicons for UI elements (menu, search, filter)
- Custom wheat/grain icons for badges and product categories
- WhatsApp icon from Font Awesome or similar

### Textures & Patterns
- Subtle jute/burlap texture for section backgrounds (low opacity)
- Wheat stalk border decorations for section dividers

---

## Animations
- Minimal, purposeful animations only
- Product card hover: slight scale + shadow increase
- Button hover: subtle color darken
- Page transitions: smooth fade
- No scroll-triggered animations to maintain premium, grounded feel

---

## Accessibility & Interaction
- Minimum 4.5:1 contrast ratio for all text
- Focus states on all interactive elements
- Form validation with clear error messages
- Touch targets minimum 44x44px for mobile

This design creates a premium, trustworthy e-commerce experience that educates users on cold-pressed benefits while showcasing the product line with earthy, natural aesthetics.