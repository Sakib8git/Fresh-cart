# FreshCart E-Commerce App

A modern, full-featured grocery e-commerce platform built with Next.js and React. This application allows users to browse fresh produce, add items to cart, and manage their shopping experience seamlessly.

## Project Description

FreshCart E-Commerce App is a Next.js-powered web application designed for selling fresh grocery items including fruits, vegetables, dairy products, and more. The platform features a clean, intuitive interface with a focus on user experience, offering complete e-commerce functionality from product browsing to cart management and user authentication.

**Key Technologies:**

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Authentication
- **State Management:** React Context API
- **UI Components:** shadcn/ui, Radix UI, Lucide Icons
- **Form Handling:** React Hook Form

## Setup & Installation

### Prerequisites

- Node.js
- npm package manager
- Firebase project with authentication enabled

### Installation Steps

1. **Clone and Install Dependencies**

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the project root with your Firebase configuration:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **Configure Firebase Authorized Domains**

   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add `localhost:3000` for local development
   - Add your production domain when deployed

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Route Summary

### Public Routes

- `/` - **Home Page** - Landing page with featured products, categories, testimonials
- `/items` - **Products List** - Browse all grocery items with filtering and sorting
- `/items/[id]` - **Product Details** - Detailed view of a single product with images and specs
- `/login` - **Login** - User authentication with email/password and Google sign-in
- `/signup` - **Sign Up** - New user registration
- `/about` - **About Us** - Company information and mission
- `/contact` - **Contact** - Contact form and business information
- `/feedback` - **Feedback** - Customer feedback and review form
- `/cart` - **Shopping Cart** - View and manage cart items before checkout

### Protected Routes

- `/dashboard` - **User Dashboard** - Personalized user account, orders, profile management

## Implemented Features

### 1. **Authentication & User Management**

- Email/password login and registration
- Google Sign-In integration (Firebase)
- User profile management

### 2. **Product Catalog**

- Browse all grocery items with real images
- Advanced filtering by category
- Detailed product information

### 3. **Shopping Cart**

- Add/remove items from cart
- Real-time cart count in navbar
- Cart persistence using localStorage

### 4. **User Dashboard**

- View recent orders and order history
- Account information display
- Display Firebase user information in Profile

### 5. **Landing Page**

- Hero section with call-to-action
- Featured products showcase (limited to 4 items)
- Category browsing
- Customer testimonials
- Promotional banner
- Newsletter subscription
- Why Choose Us section

### 6. **Customer Feedback, About and Contact**

- Feedback form for reviews and suggestions
- Contact page with inquiry form
- About Us page with company information

### 7. **Responsive Design**

- Mobile-first design approach
- Fully responsive on all screen sizes
- Touch-friendly interface
- Fast loading and smooth interactions

## Getting Started

1. Install dependencies: `npm install`
2. Configure Firebase environment variables
3. Run development server: `npm run dev`
4. Visit `http://localhost:3000`
5. Browse products, create an account, and test the shopping cart
