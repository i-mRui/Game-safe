# DigiTopia Website

A modern, multilingual website built with Next.js that focuses on digital safety and internet awareness. The website features a responsive design with RTL (Right-to-Left) language support and interactive visual elements.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Internationalization](#internationalization)
- [Visual Effects](#visual-effects)

## Features

- **Multilingual Support**: Full internationalization with support for both LTR and RTL languages
- **Interactive UI**: Modern, responsive interface with dynamic components
- **Visual Effects**: Immersive 3D background effects using Three.js
- **Accessibility**: Designed with accessibility in mind for all users
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Grid Layout**: Organized content display with CSS Grid for better visual hierarchy
- **Theme Support**: Light and dark mode capabilities

## Technologies Used

- **Next.js 15**: React framework for production-grade applications
- **React 19**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **i18next**: Internationalization framework
- **Three.js**: 3D graphics library for immersive backgrounds
- **GSAP**: Animation library for smooth transitions
- **CSS Modules**: Scoped styling for components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-app/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── assets/     # Fonts and other assets
│   │   ├── components/ # React components
│   │   │   ├── backgrounds/ # Visual effects components
│   │   │   ├── Header.tsx   # Site header with language switcher
│   │   │   ├── Hero.tsx     # Hero section component
│   │   │   ├── Section-2.tsx # Grid layout section
│   │   │   └── Resources.tsx # Resources information component
│   │   ├── globals.css  # Global styles
│   │   ├── page.tsx     # Main page component
│   │   └── layout.tsx   # Root layout
│   └── i18n.js         # Internationalization configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Components

The website is built with several key components:

### Header
- Provides navigation and language switching functionality
- Supports RTL (Right-to-Left) layout for Arabic and other RTL languages
- Contains the site logo and main navigation links

### Hero
- Main landing section with eye-catching visuals
- Introduces the website's purpose and main message
- Integrates with the Hyperspeed background effect

### Section-2
- Features a responsive grid layout (3×2) for displaying cards
- Each card contains important information about digital safety
- Properly handles RTL text direction for Arabic content

### Resources
- Provides educational resources about internet safety
- Contains cards with translated content using i18next
- Accessible design with proper heading hierarchy

### Hyperspeed Background
- Creates an immersive 3D visual experience
- Built with Three.js for high-performance graphics
- Responsive design that adapts to different screen sizes

## Internationalization

The website supports multiple languages including RTL languages like Arabic. The language switcher is located in the header.

### Adding a New Language

1. Add the language to the i18n configuration in `src/i18n.js`
2. Create translation files in the appropriate format
3. Update the language selector in the Header component

## Visual Effects

The website features immersive visual effects using Three.js:

- **Hyperspeed Background**: A dynamic 3D background effect that creates an immersive experience
- **Responsive Animations**: Effects that adapt to different screen sizes and device capabilities
