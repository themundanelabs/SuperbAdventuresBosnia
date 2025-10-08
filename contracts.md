# Super B Adventures Website - Implementation Plan

## Project Overview
Redesigning Super B Adventures website into a modern, visually striking static adventure travel site with Three.js 3D animations, earth tone palette, and immersive user experience.

## Tech Stack
- **Frontend**: React + Three.js + React Three Fiber + Drei
- **Styling**: Tailwind CSS + Framer Motion for micro-animations
- **Components**: Shadcn UI
- **3D**: Three.js with React Three Fiber for mountain/nature scenes

## Design System

### Color Palette (Earth Tones)
- Primary: Forest Green (#2D5016, #3A6B35)
- Secondary: Earth Brown (#8B4513, #A0522D)
- Accent: Vibrant Orange (#FF6B35, #F77F00)
- Neutral: Stone Gray (#6B7280, #9CA3AF)
- Background: Off-white (#FAFAF9), Dark Gray (#1F2937)

### Typography
- Headings: 'Montserrat' (bold, adventure feel)
- Body: 'Inter' (clean readability)

## Site Structure

### Pages/Sections
1. **Hero Section** - Full viewport with 3D animated mountain scene
2. **Featured Tours** - Best-selling, Winter, Day tours
3. **About Us** - Company story with parallax effects
4. **Why Choose Us** - 4 feature cards with icons
5. **Customer Reviews** - Testimonial carousel
6. **Gallery** - Interactive photo grid with lightbox
7. **Featured In** - Media logos
8. **Contact/Footer** - Contact info, social links

## Three.js 3D Scenes

### Scene 1: Hero Mountain Scene
- Animated low-poly mountain landscape
- Floating camera movement
- Particle system for atmosphere
- Mouse parallax interaction

### Scene 2: Interactive Elements
- 3D card hover effects
- Scroll-triggered animations
- Floating icons with physics

## Component Structure

```
/app/frontend/src/
├── components/
│   ├── ui/              # Shadcn components
│   ├── Hero.jsx         # Hero with 3D scene
│   ├── Navigation.jsx   # Header navigation
│   ├── TourCard.jsx     # Tour display cards
│   ├── About.jsx        # About section
│   ├── Features.jsx     # Why choose us
│   ├── Testimonials.jsx # Customer reviews
│   ├── Gallery.jsx      # Photo gallery
│   ├── FeaturedIn.jsx   # Media section
│   ├── Footer.jsx       # Footer with contact
│   └── Scene3D.jsx      # Three.js 3D scene
├── data/
│   └── mock.js          # All static content
└── App.js               # Main app
```

## Mock Data Structure (mock.js)

```javascript
export const tours = [
  { id, title, description, duration, price, image, category }
]

export const features = [
  { icon, title, description }
]

export const testimonials = [
  { name, location, review, avatar, rating }
]

export const galleryImages = [
  { url, alt, category }
]

export const socialLinks = [
  { platform, url, icon }
]

export const contactInfo = {
  phone, email, address
}
```

## Image Assets

### Hero & Main Sections
- Hero: https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5
- Adventure Spirit: https://images.unsplash.com/photo-1578952258885-6ee0651294e6
- Mountain Achievement: https://images.unsplash.com/photo-1508339917912-c0892cfee9d1

### Activities
- Winter: https://images.unsplash.com/photo-1551632811-561732d1e306
- Scenic: https://images.unsplash.com/photo-1533240332313-0db49b459ad6
- Paragliding: https://images.unsplash.com/photo-1456139333202-745e9029f0ef
- Forest: https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b
- Hiking: https://images.unsplash.com/photo-1501554728187-ce583db33af7

### Tours & Gallery
- Rafting 1: https://images.unsplash.com/photo-1627241129356-137242cf14f0
- Rafting 2: https://images.unsplash.com/photo-1629248457649-b082812aea6c
- SUV 1: https://images.unsplash.com/photo-1565787731382-4f355b73e7dc
- SUV 2: https://images.unsplash.com/photo-1507242207323-a3ca53b80849
- Group 1: https://images.unsplash.com/photo-1536607961765-592e80bcc19e
- Group 2: https://images.unsplash.com/photo-1529156069898-49953e39b3ac
- Cultural: https://images.unsplash.com/photo-1639763703351-c27defbb51b1

## Features & Interactions

### Animations
- Scroll-triggered fade-ins (Framer Motion)
- 3D mouse parallax effects
- Smooth page transitions
- Card hover animations with 3D transforms
- Button hover states with scale/glow

### Glassmorphism Effects
- Navigation bar with backdrop blur
- Card overlays on images
- Modal/dialog backgrounds

### Responsive Design
- Mobile: Stack layout, simplified 3D
- Tablet: 2-column grids
- Desktop: Full 3D experience, multi-column

## Dependencies to Install
```
yarn add three @react-three/fiber @react-three/drei framer-motion
```

## Implementation Phases

### Phase 1: Frontend Only (Mock Data)
1. Install dependencies
2. Create mock.js with all content
3. Build all components with mock data
4. Implement Three.js 3D scenes
5. Add animations and interactions
6. Test responsiveness

### Phase 2: No Backend Needed
- This is a static website
- All content from mock.js
- No API calls required
- No database needed

## Notes
- Static site - no backend implementation
- All data hardcoded in mock.js
- Three.js scenes optimized for performance
- Lazy loading for images
- SEO-friendly structure
