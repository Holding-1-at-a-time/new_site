# Service Management System - One Detail At A Time LLC

## Overview

This document explains how to add, remove, and manage car detailing services in the One Detail At A Time LLC website. The system automatically generates individual pages with SEO metadata and Schema.org markup for each service.

## 📁 File Structure

```
src/lib/
├── data.ts                    # Main services array (edit here)
├── serviceManager.ts          # Service management utilities
└── utils.ts                   # Helper functions

app/services/
├── [slug]/page.tsx            # Dynamic service pages
├── page.tsx                   # Services listing page
├── ceramic-coating/page.tsx   # Static service pages (legacy)
└── headlight-restoration/page.tsx

public/images/
└── [service-name]-*.jpg       # Service images
```

## 🚀 Quick Start

### Adding a New Service

1. **Edit the main services array** in `src/lib/data.ts`:
```typescript
// Add your service to the services array
export const services: Service[] = [
  // ... existing services
  {
    id: "your-service-slug",
    name: "Your Service Name",
    slug: "your-service-slug",
    // ... complete service data
  }
];
```

2. **Add service images** to `public/images/`:
   - `your-service-slug-1.jpg`
   - `your-service-slug-2.jpg`
   - `your-service-slug-3.jpg`

3. **Build the project** to generate the new service page automatically.

### Removing a Service

1. **Remove from services array** in `src/lib/data.ts`
2. **Delete service images** from `public/images/`
3. **Rebuild the project**

## 🔧 Using the Service Manager

The `serviceManager.ts` provides utilities for managing services programmatically.

### Import the Service Manager

```typescript
import { 
  createService, 
  addService, 
  removeService, 
  updateService,
  validateService 
} from '../lib/serviceManager';
```

### Creating Services from Templates

```typescript
import { createService } from '../lib/serviceManager';

// Create a basic exterior wash service
const newService = createService('exteriorWash', {
  name: "Premium Hand Wash & Wax",
  price: "Starting at $200",
  startingPrice: 200,
  duration: "3-4 hours"
});
```

### Adding Services

```typescript
import { services } from '../lib/data';
import { addService } from '../lib/serviceManager';

// Add new service to existing services
const updatedServices = addService(services, newService);
```

### Removing Services

```typescript
import { removeService } from '../lib/serviceManager';

// Remove service by slug
const updatedServices = removeService(services, 'service-slug-to-remove');
```

## 📝 Service Data Structure

Each service must have the following structure:

```typescript
interface Service {
  id: string;                    // Unique identifier (usually same as slug)
  name: string;                  // Service display name
  slug: string;                  // URL-friendly identifier
  shortDescription: string;      // Brief description for listings
  fullDescription: string;       // Detailed description for service page
  price: string;                 // Display price (e.g., "Starting at $150")
  startingPrice: number;         // Numeric price for calculations
  duration: string;              // Service duration (e.g., "2-3 hours")
  benefits: string[];            // Array of service benefits
  includes: string[];            // Array of what's included
  process: ProcessStep[];        // Service process steps
  faqs: FAQ[];                   // Frequently asked questions
  images: string[];              // Array of image paths
  keywords: string[];            // SEO keywords (auto-generated)
  metaDescription: string;       // SEO meta description
  serviceAreas: string[];        // Areas served
  localBenefits: string[];       // Location-specific benefits
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
}

interface FAQ {
  question: string;
  answer: string;
}
```

## 🎯 Service Templates

Pre-built templates are available for common service types:

### Available Templates

1. **exteriorWash** - Exterior hand wash and sealant
2. **interiorDetail** - Interior deep cleaning
3. **paintCorrection** - Paint correction services

### Using Templates

```typescript
import { createService, SERVICE_TEMPLATES } from '../lib/serviceManager';

// Create service from template
const myService = createService('exteriorWash', {
  name: "Premium Exterior Service",
  price: "Starting at $175",
  startingPrice: 175,
  customBenefits: [
    "Premium foam wash",
    "High-grade sealant",
    "Wheel protection"
  ]
});
```

## 🏠 Page Structure

Each service automatically generates:

### Individual Service Pages (`/services/[slug]`)

1. **Sticky Header** - Service name with phone CTA
2. **Hero Section** - Full-viewport hero with pricing
3. **Service Gallery** - Before/after images
4. **Before/After Showcase** - Interactive comparison
5. **What's Included** - Detailed inclusions
6. **Local Benefits** - San Antonio-specific benefits
7. **Service Areas** - Coverage areas map
8. **Why Choose** - Service-specific advantages
9. **Process** - Step-by-step timeline
10. **FAQ** - Common questions
11. **Final CTA** - Contact information

### Homepage (`/`)

- **Services Preview** - Shows first 6 services
- **Call-to-Action** - Links to services and contact

### Services Listing (`/services`)

- **All Services Grid** - Complete service overview
- **Process Overview** - 4-step process explanation
- **Professional Benefits** - Why choose professional service

## 🔍 SEO Features

### Automatic SEO Metadata

Each service page gets:
- **Unique Title**: `{Service Name} San Antonio | One Detail At A Time LLC`
- **Meta Description**: Custom description for each service
- **Keywords**: Auto-generated from service name and location
- **Open Graph**: Social media sharing optimization

### Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{Service Name}",
  "provider": {
    "@type": "LocalBusiness",
    "name": "One Detail At A Time LLC"
  },
  "areaServed": [...],
  "offers": {
    "@type": "Offer",
    "price": "{Price}",
    "priceCurrency": "USD"
  }
}
```

### Local SEO Optimization

- **San Antonio-specific keywords**
- **Neighborhood targeting** (Alamo Heights, Stone Oak, etc.)
- **Service area mapping**
- **Local business schema**

## 📊 Current Services

### 1. Exterior Hand Wash & Sealant
- **Slug**: `exterior-hand-wash-sealant`
- **Price**: Starting at $150
- **Duration**: 2-3 hours

### 2. Interior Deep Cleansing
- **Slug**: `interior-deep-cleansing`
- **Price**: Starting at $175
- **Duration**: 3-4 hours

### 3. Paint Correction
- **Slug**: `paint-correction`
- **Price**: Starting at $400
- **Duration**: 6-8 hours

### 4. Ceramic Coating
- **Slug**: `ceramic-coating`
- **Price**: Starting at $800
- **Duration**: 1-2 days

### 5. Headlight Restoration
- **Slug**: `headlight-restoration`
- **Price**: Starting at $100
- **Duration**: 1-2 hours

### 6. Full Detail Package
- **Slug**: `full-detail-package`
- **Price**: Starting at $450
- **Duration**: 8-12 hours

## 🛠️ Development Commands

### Adding a Service

1. **Edit data.ts**:
```typescript
// Add to services array in src/lib/data.ts
{
  id: "new-service",
  name: "New Service Name",
  slug: "new-service",
  // ... complete service object
}
```

2. **Add images**: Place 3 images in `public/images/new-service-*.jpg`

3. **Test locally**:
```bash
npm run dev
```

4. **Visit page**: `http://localhost:3000/services/new-service`

### Building for Production

```bash
npm run build
npm run start
```

## 🎨 Image Requirements

### Image Specifications
- **Format**: JPG or WebP
- **Size**: 800x600px minimum
- **Quality**: High resolution
- **Naming**: `{service-slug}-{number}.jpg`

### Image Guidelines
1. **Before/After Images**: Show clear transformation
2. **Service Images**: Professional, well-lit photos
3. **Consistent Style**: Similar lighting and background
4. **San Antonio Context**: Texas license plates, local landmarks

## 📱 Mobile Optimization

All service pages are optimized for:
- **Responsive Design**: Adapts to all screen sizes
- **Touch Targets**: 44px minimum for buttons
- **Fast Loading**: Optimized images and code splitting
- **SEO Mobile-Friendly**: Google mobile-first indexing

## 🔗 Links and Navigation

### Internal Links
- **Navigation**: Consistent across all pages
- **Breadcrumbs**: Shows service hierarchy
- **Related Services**: Cross-linking between services
- **Contact Links**: Direct phone and email integration

### External Links
- **Google Maps**: Opens in new tab with security attributes
- **Phone Numbers**: `tel:` protocol integration
- **Email**: `mailto:` protocol integration

## 🚨 Troubleshooting

### Common Issues

1. **Service page 404**:
   - Check slug matches exactly in URL
   - Verify service is in `services` array
   - Ensure images exist in `public/images/`

2. **SEO issues**:
   - Verify `metaDescription` is present
   - Check `keywords` array is populated
   - Ensure `images` array has content

3. **Build errors**:
   - Check TypeScript types match
   - Verify all required fields are present
   - Run `npm run build` to see specific errors

### Debug Commands

```bash
# Check for missing images
find public/images -name "*.jpg" | grep -v "exterior-wash\|interior-clean\|paint-correction\|ceramic-coating\|headlight-restoration\|full-detail"

# Verify service data
node -e "console.log(require('./src/lib/data').services.map(s => s.slug))"
```

## 📈 Performance Optimization

### Automatic Optimizations
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic per-page splitting
- **Static Generation**: Pre-built pages for fast loading
- **SEO**: Optimized metadata and structured data

### Manual Optimizations
- **Image Compression**: Use tools like TinyPNG
- **Cache Headers**: Configured in Next.js
- **Bundle Analysis**: Monitor with `npm run analyze`

## 🎯 Future Enhancements

### Planned Features
1. **Admin Dashboard**: Web interface for service management
2. **Image Upload**: Drag-and-drop image management
3. **Service Analytics**: Track service page performance
4. **A/B Testing**: Test different service descriptions
5. **Multilingual Support**: Spanish language support

### Contact for Support
- **Email**: rromerojr1@gmail.com
- **Phone**: (726) 207-1007
- **Business**: One Detail At A Time LLC
- **Location**: San Antonio, TX

---

**Last Updated**: November 23, 2025
**Version**: 1.0
**Framework**: Next.js 15.1.8 with TypeScript