q2aa# TechStore 🛒

<div align="center">

**A Modern Full-Stack E-Commerce Application Built with Next.js 15**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express-4.18-gray?style=flat-square&logo=express)](https://expressjs.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Authentication](#-authentication)
- [Routes](#-routes)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

**TechStore** is a comprehensive, production-ready e-commerce web application designed to demonstrate modern full-stack development practices. Built with Next.js 15's App Router and Express.js, the application provides a seamless shopping experience with a beautiful, responsive user interface and robust backend API.

### What This Project Demonstrates

- ⚡ **Modern React Patterns** - Server Components, Client Components, and React Hooks
- 🎨 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔐 **Authentication System** - Cookie-based session management
- 📡 **RESTful API** - Clean, well-structured backend endpoints
- 🛡️ **Route Protection** - Secure access control for authenticated pages
- ✨ **Type Safety** - Full TypeScript implementation
- 🎭 **UI/UX Excellence** - Professional design with smooth animations

---

## ✨ Key Features

### 🌐 Frontend Features

- **Landing Page**
  - Hero section with compelling call-to-action
  - Feature highlights (Shipping, Security, Returns, Support)
  - Product categories with visual cards
  - Popular products showcase
  - Customer testimonials section
  - About us section
  - Final call-to-action section

- **Product Management**
  - Browse all products with responsive grid layout
  - Detailed product view with full specifications
  - Real-time stock status indicators
  - Image optimization with Next.js Image component

- **Authentication UI**
  - Clean, intuitive login interface
  - Form validation and error handling
  - Protected route redirects

- **Admin Features**
  - Add new products (authenticated users only)
  - Form validation and submission
  - Success/error toast notifications

### 🔧 Backend Features

- **RESTful API**
  - CRUD operations for products
  - Authentication endpoints
  - Cookie-based session management
  - CORS configuration

- **Security**
  - Protected API routes
  - Secure cookie handling
  - Input validation

---

## 🛠️ Technology Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.0 | React framework with App Router, SSR, and routing |
| **React** | 18.3 | UI library for building interactive interfaces |
| **TypeScript** | 5.3 | Type-safe JavaScript for better development experience |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework for rapid UI development |
| **react-toastify** | 10.0 | Beautiful toast notification library |

### Backend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Express.js** | 4.18 | Fast, minimal web framework for Node.js |
| **cookie-parser** | 1.4 | Middleware for parsing cookies |
| **CORS** | 2.8 | Enable Cross-Origin Resource Sharing |

### Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting and quality assurance |
| **PostCSS** | CSS processing and transformation |
| **Autoprefixer** | Automatic vendor prefixing |

### Typography & Design

- **Inter** - Modern, readable sans-serif font for body text
- **Playfair Display** - Elegant serif font for headings
- Custom color palette with indigo/purple gradients

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Next.js 15 (App Router)                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │   │
│  │  │  Pages   │  │ Components│  │  State Management │   │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST
┌─────────────────────────────────────────────────────────────┐
│                        Server Layer                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Express.js API Server                    │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │   │
│  │  │  Routes  │  │Middleware│  │   Data Storage    │   │   │
│  │  │          │  │ (Auth,   │  │   (In-Memory)     │   │   │
│  │  │          │  │  CORS)   │  │                   │   │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Request** → Next.js page/component
2. **API Call** → Express.js endpoint (with credentials if authenticated)
3. **Server Processing** → Authentication check, data retrieval/creation
4. **Response** → JSON data returned to client
5. **UI Update** → React state update, re-render

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd basic-test-item
```

#### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies for both frontend and backend.

#### 3. Start the Development Servers

The application requires two servers to run simultaneously. Open two terminal windows:

**Terminal 1 - Start Express.js API Server:**
```bash
npm run server
```
✅ Server running on: `http://localhost:3001`

**Terminal 2 - Start Next.js Development Server:**
```bash
npm run dev
```
✅ Application running on: `http://localhost:3000`

#### 4. Access the Application

Open your browser and navigate to:
- **Frontend Application**: http://localhost:3000
- **API Server** (for testing): http://localhost:3001

---

## 📁 Project Structure

```
basic-test-item/
│
├── app/                          # Next.js App Router directory
│   ├── items/                    # Product-related pages
│   │   ├── page.tsx             # Product listing page
│   │   └── [id]/                # Dynamic route folder
│   │       └── page.tsx         # Individual product details
│   ├── login/                    # Authentication
│   │   └── page.tsx             # Login page
│   ├── add-item/                 # Protected route
│   │   └── page.tsx             # Add new product form
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles and Tailwind imports
│
├── components/                    # Reusable React components
│   ├── Navbar.tsx                # Navigation bar with auth state
│   ├── Footer.tsx                # Site footer
│   ├── Hero.tsx                  # Landing page hero section
│   ├── Features.tsx              # Feature highlights section
│   ├── Categories.tsx            # Product categories section
│   ├── PopularProducts.tsx       # Featured products section
│   ├── Testimonials.tsx          # Customer reviews section
│   ├── About.tsx                 # About us section
│   └── CTA.tsx                   # Call-to-action section
│
├── server/                        # Express.js backend
│   └── index.js                  # API server with all endpoints
│
├── public/                        # Static assets (if any)
│
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── next.config.js                 # Next.js configuration
└── README.md                      # Project documentation
```

### Key Configuration Files

- **`package.json`** - Dependencies, scripts, and project metadata
- **`tsconfig.json`** - TypeScript compiler options and path aliases
- **`tailwind.config.ts`** - Tailwind CSS customization
- **`next.config.js`** - Next.js settings (image domains, etc.)

---

## 📡 API Documentation

### Base URL

```
http://localhost:3001/api
```

### Endpoints

#### Public Endpoints

##### Get All Products
```http
GET /api/items
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Bluetooth Headphones",
    "description": "Premium noise-cancelling headphones...",
    "price": 199.99,
    "image": "https://...",
    "category": "Electronics",
    "inStock": true
  }
]
```

##### Get Single Product
```http
GET /api/items/:id
```

**Parameters:**
- `id` (number) - Product ID

**Response:**
```json
{
  "id": 1,
  "name": "Wireless Bluetooth Headphones",
  "description": "...",
  "price": 199.99,
  "image": "https://...",
  "category": "Electronics",
  "inStock": true
}
```

#### Authentication Endpoints

##### Login
```http
POST /api/login
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful"
}
```

**Sets cookie:** `authToken=authenticated`

##### Logout
```http
POST /api/logout
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

##### Check Auth Status
```http
GET /api/auth/status
```

**Response:**
```json
{
  "authenticated": true
}
```

#### Protected Endpoints

##### Create Product (Requires Authentication)
```http
POST /api/items
Content-Type: application/json
Cookie: authToken=authenticated
```

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "image": "https://...",
  "category": "Electronics",
  "inStock": true
}
```

**Response:**
```json
{
  "id": 7,
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "image": "https://...",
  "category": "Electronics",
  "inStock": true
}
```

**Status Codes:**
- `200` - Success
- `201` - Created (new item)
- `400` - Bad Request (missing required fields)
- `401` - Unauthorized (not authenticated)
- `404` - Not Found (item doesn't exist)

---

## 🔐 Authentication

### Authentication Method

TechStore uses **cookie-based authentication** with a simple token system. This approach is suitable for development and can be extended with JWT tokens for production.

### How It Works

1. **Login Process:**
   - User submits credentials via login form
   - Server validates credentials
   - On success, server sets HTTP-only cookie: `authToken=authenticated`
   - Cookie expires after 24 hours

2. **Protected Routes:**
   - Client checks authentication status on mount
   - Unauthenticated users are redirected to `/login`
   - Authenticated users can access protected pages

3. **API Protection:**
   - Protected endpoints check for `authToken` cookie
   - Missing or invalid token returns `401 Unauthorized`

### Demo Credentials

For testing purposes, use these credentials:

```
Email: admin@example.com
Password: password123
```

> ⚠️ **Note:** These are hardcoded demo credentials. In production, use a proper database with hashed passwords.

---

## 🗺️ Routes

| Route | Type | Access | Description |
|-------|------|--------|-------------|
| `/` | Page | Public | Landing page with 7 sections |
| `/items` | Page | Public | Product catalog listing |
| `/items/[id]` | Dynamic | Public | Individual product details page |
| `/login` | Page | Public | User authentication page |
| `/add-item` | Page | Protected | Add new product (admin) |

### Route Behavior

- **Public Routes** - Accessible without authentication
- **Protected Routes** - Require valid authentication, redirect to `/login` if not authenticated
- **Dynamic Routes** - Use Next.js dynamic routing with `[id]` parameter

---

## 💻 Development

### Available Scripts

```bash
# Start Next.js development server
npm run dev

# Start Express.js API server
npm run server

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Development Workflow

1. **Make Changes** - Edit files in `app/`, `components/`, or `server/`
2. **Hot Reload** - Next.js automatically refreshes on file changes
3. **API Changes** - Restart Express server to see backend changes
4. **Type Checking** - TypeScript validates types on save (in VS Code)

### Code Style

- **TypeScript** - All components and utilities are typed
- **ESLint** - Configured with Next.js recommended rules
- **Component Structure** - Functional components with hooks
- **Naming** - PascalCase for components, camelCase for functions/variables

### Adding New Features

1. **New Page**: Create folder in `app/` with `page.tsx`
2. **New Component**: Add file in `components/`
3. **New API Endpoint**: Add route in `server/index.js`
4. **Styling**: Use Tailwind CSS utility classes

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

**Recommended platform:** [Vercel](https://vercel.com)

1. Push code to GitHub repository
2. Import project on Vercel dashboard
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add environment variables if needed
5. Deploy!

**Alternative platforms:**
- Netlify
- Railway
- AWS Amplify

### Backend Deployment

**Recommended platforms:**
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Heroku](https://heroku.com)

**Steps:**
1. Deploy Express server to chosen platform
2. Update CORS configuration with production frontend URL
3. Set environment variables (if using database)
4. Update API base URL in Next.js app if different from localhost

### Environment Variables (Production)

Create `.env.local` for Next.js:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

Update fetch calls to use:
```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
```

---

## 🔧 Configuration

### Tailwind CSS Customization

The project uses a custom color palette defined in `tailwind.config.ts`. Key colors:
- Primary: Indigo (`indigo-600`, `indigo-700`)
- Accents: Purple, Pink gradients
- Background: Gray scale (`gray-50`, `gray-900`)

### Next.js Configuration

Image optimization is configured in `next.config.js`:
- Allowed image domains: `images.unsplash.com`
- Automatic image optimization enabled

---

## 📝 Notes & Limitations

### Current Limitations

- **In-Memory Storage** - Products are stored in memory (resets on server restart)
- **Mock Authentication** - Hardcoded credentials (not production-ready)
- **No Database** - Consider adding PostgreSQL, MongoDB, or similar
- **No Image Upload** - Uses external URLs (add file upload for production)

### Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] JWT token authentication
- [ ] User registration system
- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Payment gateway integration
- [ ] Image upload with storage
- [ ] Admin dashboard
- [ ] Product search and filtering
- [ ] User reviews and ratings

---

