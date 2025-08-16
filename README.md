# 🚀 Vate AI - Email Automation Platform

> **AI-powered email automation platform that helps businesses streamline outreach, nurture leads, and run email campaigns with ease.**

![Vate AI Platform](https://img.shields.io/badge/Vate%20AI-Email%20Automation-ff6b6b?style=for-the-badge&logo=mail&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 **Core Functionality**

- **AI-Powered Email Automation** - Intelligent campaign creation and optimization
- **Smart Audience Targeting** - Advanced segmentation and personalization
- **A/B Testing Suite** - Optimize subject lines and content for better performance
- **Real-Time Analytics** - Comprehensive campaign performance insights
- **Template Library** - Professional email templates with AI assistance
- **Multi-Step Onboarding** - Seamless user setup and configuration

### 🎨 **Design System**

- **Dark Glass Morphism** - Modern, elegant interface with glass effects
- **Vate AI Color Palette** - Consistent brand colors and gradients
- **Liquid Glass Buttons** - Stunning interactive elements with glass texture
- **Responsive Design** - Perfect experience across all devices
- **Smooth Animations** - Professional transitions and micro-interactions

### 📱 **User Experience**

- **Intuitive Navigation** - Clean, organized interface structure
- **Progress Tracking** - Visual progress indicators for multi-step processes
- **Interactive Elements** - Hover effects, animations, and feedback
- **Accessibility** - WCAG compliant design and interactions

## 🛠️ Tech Stack

### **Frontend Framework**

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework

### **UI Components**

- **shadcn/ui v4** - Modern component library
- **Lucide React** - Beautiful icon library
- **Custom Components** - Glass morphism and liquid effects

### **Styling & Animation**

- **Glass Morphism** - Backdrop blur and transparency effects
- **CSS Gradients** - Brand color gradients and animations
- **Smooth Transitions** - 200-300ms duration animations

## 🎨 Design System

### **Color Palette**

```css
Primary Gradient: #761b2b → #84404b → #ea6077
Secondary Colors: #651d2c, #d46275
Neutral Colors: #e4e4e4, #ffffff, #0d0d0d
Background: #0d0d0d with glass morphism effects
```

### **Typography**

- **Gradient Headings** - All section headings use gradient text effects
- **Consistent Sizing** - `text-3xl md:text-4xl` for section headings
- **Glass Text** - White text with proper contrast

### **Components**

- **Liquid Glass Buttons** - Glass texture with backdrop blur
- **Gradient Borders** - Cards with gradient border effects
- **Glass Morphism** - Semi-transparent backgrounds with blur
- **Interactive Elements** - Hover effects and smooth transitions

## 📁 Project Structure

```
vate-ai/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Main dashboard
│   ├── campaigns/               # Campaign management
│   │   └── new/                # Campaign creation wizard
│   ├── login/                  # Authentication
│   ├── signup/                 # User registration
│   ├── onboarding/             # User setup wizard
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # Reusable components
│   ├── sections/               # Page sections
│   │   ├── hero-section.tsx    # Landing hero
│   │   ├── features-section.tsx # Features showcase
│   │   ├── testimonials-section.tsx # Customer testimonials
│   │   ├── cta-section.tsx     # Call-to-action
│   │   ├── footer.tsx          # Site footer
│   │   └── navigation.tsx      # Navigation bar
│   └── ui/                     # UI components
│       ├── button.tsx          # Button component
│       ├── liquid-glass-button.tsx # Glass effect buttons
│       ├── waves-background.tsx # Interactive waves
│       ├── static-waves.tsx    # Static wave backgrounds
│       ├── typewriter.tsx      # Typewriter effect
│       ├── avatar.tsx          # User avatars
│       ├── testimonial-card.tsx # Testimonial cards
│       └── testimonials-with-marquee.tsx # Scrolling testimonials
├── lib/                        # Utility functions
│   └── utils.ts                # Helper functions
├── public/                     # Static assets
│   ├── vate-ai-logo.png        # Company logo
│   └── vate-ai-logo-text.png   # Text logo
├── tailwind.config.ts          # Tailwind configuration
├── todo.md                     # Development checklist
├── PRD.md                      # Product requirements
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/vate-ai.git
   cd vate-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### **Environment Setup**

```bash
# Create environment file
cp .env.example .env.local

# Add your environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📱 Pages & Features

### **🏠 Landing Page**

- **Hero Section** - Interactive waves background with typewriter effect
- **Features Showcase** - AI-powered features with glass cards
- **Testimonials** - Scrolling marquee with customer feedback
- **Call-to-Action** - Liquid glass buttons for conversion

### **🔐 Authentication**

- **Sign Up** - User registration with Google SSO
- **Login** - Secure authentication with glass morphism design
- **Dark Glass Theme** - Consistent styling throughout

### **🎯 Onboarding Wizard**

- **5-Step Process** - Welcome, company info, email integration, team setup, goals
- **Progress Tracking** - Visual progress bar with gradient animation
- **Glass Morphism** - Beautiful step-by-step interface

### **📊 Dashboard**

- **Stats Cards** - Key metrics with gradient icons
- **Recent Campaigns** - Campaign list with status indicators
- **Quick Actions** - Common tasks with hover animations
- **Performance Charts** - Email performance and activity feed

### **📧 Campaign Creation**

- **5-Step Wizard** - Basics, targeting, content, A/B testing, scheduling
- **Template Gallery** - Professional templates with ratings
- **AI Content Editor** - AI-powered content generation
- **A/B Testing** - Subject line and content optimization
- **Scheduling** - Campaign timing and automation

## 🎨 Design Principles

### **Glass Morphism**

- **Backdrop Blur** - `backdrop-blur-sm` for glass effects
- **Transparency** - `bg-white/5` for subtle backgrounds
- **Borders** - `border-white/10` for definition
- **Gradients** - Brand color gradients for accents

### **Interactive Elements**

- **Hover Effects** - Scale animations and color transitions
- **Focus States** - Brand color focus rings
- **Smooth Transitions** - 200-300ms duration animations
- **Loading States** - Smooth loading indicators

### **Responsive Design**

- **Mobile-First** - Optimized for mobile devices
- **Flexible Layouts** - Adaptive grid systems
- **Touch-Friendly** - Appropriate button sizes and spacing
- **Typography Scaling** - Responsive text sizing

## 🔧 Development

### **Code Style**

- **TypeScript** - Strict type checking
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Component Architecture** - Modular, reusable components

### **Performance**

- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Component and image lazy loading
- **Caching** - Static generation and caching

### **Testing**

- **Component Testing** - Unit tests for components
- **Integration Testing** - User flow testing
- **Accessibility** - WCAG compliance testing
- **Cross-Browser** - Browser compatibility testing

## 📈 Analytics & Performance

### **Key Metrics**

- **Page Load Speed** - Optimized for fast loading
- **User Engagement** - Interactive elements for engagement
- **Conversion Rate** - Optimized CTAs and flows
- **Accessibility Score** - WCAG AA compliance

### **Performance Features**

- **Static Generation** - Pre-rendered pages for speed
- **Image Optimization** - Automatic image compression
- **Font Optimization** - System font stack for performance
- **Bundle Optimization** - Minimal JavaScript bundles

## 🤝 Contributing

### **Development Workflow**

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### **Code Standards**

- **TypeScript** - Use strict typing
- **Component Structure** - Follow established patterns
- **Styling** - Use Tailwind CSS classes
- **Accessibility** - Include ARIA labels and semantic HTML

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Lucide** - Beautiful icon library
- **Vercel** - Deployment and hosting platform

## 📞 Support

- **Documentation** - [docs.vateai.com](https://docs.vateai.com)
- **Support** - [support@vateai.com](mailto:support@vateai.com)
- **Discord** - [Join our community](https://discord.gg/vateai)

---

<div align="center">

**Built with ❤️ by the Vate AI Team**

[![Vate AI](https://img.shields.io/badge/Vate%20AI-Email%20Automation-ff6b6b?style=for-the-badge&logo=mail&logoColor=white)](https://vateai.com)

</div>
