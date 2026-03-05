# Aether — Hotel Booking Dashboard

A modern, responsive, and premium Hotel Booking Dashboard built with Next.js 16, React, TypeScript, and Tailwind CSS. The dashboard features a clean SaaS-style aesthetic inspired by top-tier enterprise products.

## Overview

This project implements a full mock frontend for a hotel booking application, featuring authentication, dashboard room listing, detailed hotel views, availability checking, booking confirmation, and a user bookings management page.

## Key Features

1. **Mock Authentication**: LocalStorage-backed authentication system (login/register).
2. **Dashboard Overview**: A central hub showing available hotels, recent bookings, integrated calendar, and quick stats.
3. **Availability Checking**: Dynamic date selection that checks against mock existing bookings and simulates network delays and failure scenarios.
4. **Booking Flow**: Multi-step modal for booking confirmation.
5. **My Bookings Page**: A management interface to view and cancel existing bookings.
6. **Responsive Design**: Mobile-friendly slide-out sidebar and fluid grid layouts.
7. **Global Error Handling**: Custom Error Boundary that gracefully catches rendering crashes.
8. **Chatbot Widget**: A floating chatbot widget for user assistance.

## Technologies Used

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Icons**: Inline SVG icons
* **State Management**: React Context API (`AuthContext`, `BookingContext`, `SidebarContext`) + LocalStorage
* **Fonts**: `Inter` (sans) and `Space Mono` (monospace) from `next/font/google`

## Required Installations

To run this application locally, you will need Node.js installed.

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

* `app/`: Next.js App Router definitions. Contains all pages (`/login`, `/register`, `/dashboard`, `/hotels`, `/bookings`).
* `components/`: Reusable React components.
  * `dashboard/`: Dashboard-specific elements like the Sidebar, Header, and Cards.
  * `layout/`: AppShell, Navbar, ErrorBoundary, and ProtectedRoute wrappers.
  * `rooms/`: Booking Modal and domain-specific Room components.
  * `sections/`: Landing page sections.
  * `ui/`: Generic UI primitives (Button, Input, Card, Badge, Loader).
* `context/`: React Contexts for global state management.
* `services/`: Interfaces for interacting with mock APIs (data arrays + simulated delays/errors).
* `types/`: Global TypeScript interfaces.
* `utils/`: Helper functions (date math, formatting).
