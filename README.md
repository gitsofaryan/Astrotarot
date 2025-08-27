# 🔮 AstroTarot - AI-Powered Mystical Tarot Readings

![AstroTarot Banner](https://img.shields.io/badge/AstroTarot-Cosmic%20Wisdom-purple?style=for-the-badge&logo=star)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://astrotarot.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> ✨ *Unlock the mysteries of your destiny through ancient wisdom powered by cutting-edge AI technology* ✨

## 🌟 Live Demo

**🔗 [astrotarot.vercel.app](https://astrotarot.vercel.app)**

Experience the cosmic journey of personalized tarot readings powered by Google's Gemini AI, wrapped in a beautiful mystical interface.

## ✨ Features

### 🔮 **Mystical Core Features**
- **AI-Powered Readings**: Advanced Gemini AI interprets ancient tarot wisdom
- **Complete Tarot Deck**: Full 78-card deck with beautiful cosmic artwork
- **Multiple Reading Types**: Quick readings and custom card selection
- **Cosmic Animations**: Enchanting floating stars and mystical animations
- **Sound Experience**: Immersive audio with cosmic sound effects

### 🎨 **User Experience**
- **Dark/Light Themes**: Cosmic-themed UI with theme switching
- **Responsive Design**: Seamless experience across all devices
- **Interactive Cards**: Beautiful card animations and hover effects
- **Mystical Typography**: Gradient text and cosmic styling
- **Progress Tracking**: Visual reading progress indicators

### 🚀 **Technical Excellence**
- **Vercel Analytics**: Comprehensive user behavior tracking
- **Performance Monitoring**: Speed insights and Core Web Vitals
- **Share Functionality**: Native Web Share API with fallback
- **GitHub Integration**: Easy contribution and star features
- **Environment Configuration**: Secure API key management

### 📊 **Analytics & Insights**
- **Custom Event Tracking**: Card selections, readings, user interactions
- **Performance Metrics**: Real-time performance monitoring
- **User Behavior**: Geographic data, device analytics, bounce rates
- **Social Tracking**: Share events and GitHub star tracking

## 🛠️ Technologies Used

### **Frontend Stack**
- **⚡ Vite** - Lightning-fast build tool
- **⚛️ React 18** - Modern React with hooks
- **🎨 TypeScript** - Type-safe development
- **💅 Tailwind CSS** - Utility-first styling
- **🎭 shadcn/ui** - Beautiful UI components
- **🔮 Lucide React** - Mystical icons

### **AI & Analytics**
- **🤖 Google Gemini AI** - Advanced language model
- **📊 Vercel Analytics** - User behavior tracking
- **⚡ Vercel Speed Insights** - Performance monitoring
- **🎵 Web Audio API** - Immersive sound experience

### **Development Tools**
- **📱 React Router** - Client-side routing
- **🔍 ESLint** - Code quality
- **🎯 React Query** - Data fetching
- **🎨 CSS Animations** - Smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

```bash
# Clone the repository
git clone https://github.com/gitsofaryan/astrotarot.git

# Navigate to project directory
cd astrotarot

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Add your Gemini API key to .env

# Start development server
pnpm dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── TarotCard.tsx   # Interactive tarot card component
│   ├── TarotReading.tsx # Reading display component
│   └── AnalyticsWrapper.tsx # Analytics integration
├── pages/              # Main application pages
│   ├── Landing.tsx     # Landing page
│   ├── Reading.tsx     # Tarot reading interface
│   └── AppPage.tsx     # Main application
├── utils/              # Utility functions
│   ├── aiTarotReader.ts # AI integration
│   ├── analytics.ts    # Event tracking
│   └── sounds.ts       # Audio management
├── data/               # Static data
│   └── tarotDeck.ts    # Complete tarot deck data
└── assets/             # Images and media
```

## 🎯 Key Features Explained

### 🔮 **AI Tarot Reading System**
Our advanced AI system uses Google's Gemini model to provide personalized, insightful tarot readings that combine ancient wisdom with modern precision.

### 🃏 **Interactive Card Selection**
Users can choose between quick automated readings or manually select their cards from a beautifully animated deck.

### 📊 **Advanced Analytics**
Track user behavior, card preferences, reading patterns, and performance metrics through Vercel's analytics platform.

### 🎨 **Mystical UI Design**
Cosmic gradients, floating animations, and mystical typography create an immersive spiritual experience.

## 🔧 Configuration

### **Analytics Setup**
The app includes comprehensive analytics tracking:
- Page views and user sessions
- Custom events (card selections, readings, shares)
- Performance monitoring
- Geographic and device data

### **Audio System**
Immersive sound effects enhance the mystical experience:
- Card shuffling sounds
- Selection confirmations
- Mystical chimes
- Background cosmic ambience

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Sub-second load times

## 🤝 Contributing

We welcome contributions to enhance the mystical experience! 

### **How to Contribute**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/cosmic-enhancement`)
3. Commit your changes (`git commit -m 'Add mystical feature'`)
4. Push to the branch (`git push origin feature/cosmic-enhancement`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Maintain the mystical theme and UX
- Add analytics tracking for new features
- Ensure mobile responsiveness
- Write meaningful commit messages

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Arien Jain** - *Cosmic Code Architect*
- 🌐 Website: [github.com/gitsofaryan](https://github.com/gitsofaryan)
- 📧 Email: [Contact via GitHub](https://github.com/gitsofaryan)
- ⭐ If you love this project, [give it a star on GitHub](https://github.com/gitsofaryan/astrotarot)!

## 🙏 Acknowledgments

- **Tarot Wisdom**: Centuries of mystical knowledge
- **Google Gemini**: Advanced AI capabilities
- **Vercel**: Exceptional hosting and analytics
- **shadcn/ui**: Beautiful component library
- **Lucide**: Mystical icon set
- **Community**: All contributors and users who believe in digital mysticism

---

<div align="center">

### ✨ *"The universe has infinite stories to tell. AstroTarot helps you discover yours."* ✨

Made with 🔮 and cosmic energy by [Arien Jain](https://github.com/gitsofaryan)

[⭐ Star this repo](https://github.com/gitsofaryan/astrotarot) • [🌟 Try AstroTarot](https://astrotarot.vercel.app) • [🐛 Report Bug](https://github.com/gitsofaryan/astrotarot/issues)

</div>
