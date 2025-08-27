import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { subscriptionPlans } from '@/data/subscriptionPlans';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from '@/components/AuthModal';
import {
  Sparkles,
  Moon,
  Star,
  Check,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Eye,
  Heart,
  Crown,
  Github,
  ExternalLink,
  Share2
} from 'lucide-react';
import cosmicHero from '@/assets/cosmic-hero.jpg';

export const LandingPage = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const handleGetStarted = () => {
    if (user) {
      // User is logged in, redirect to app
      window.location.href = '/app';
    } else {
      setAuthMode('signup');
      setShowAuthModal(true);
    }
  };

  const handleSignIn = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Readings",
      description: "Advanced AI interprets your cards with mystical wisdom and personal insights"
    },
    {
      icon: Moon,
      title: "Sacred Tarot Deck",
      description: "Complete 78-card deck with beautiful artwork and detailed meanings"
    },
    {
      icon: Star,
      title: "Multiple Spreads",
      description: "Choose from various layouts including Celtic Cross, Three Card, and more"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your readings and personal data are completely private and secure"
    },
    {
      icon: TrendingUp,
      title: "Reading History",
      description: "Track your spiritual journey with detailed reading history and insights"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Tailored interpretations based on your questions and spiritual path"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "AstroTarot has transformed my spiritual practice. The AI readings are incredibly accurate and insightful.",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "I've been using tarot for years, and this app provides the most detailed interpretations I've ever seen.",
      rating: 5
    },
    {
      name: "Luna K.",
      text: "The cosmic design and mystical atmosphere make every reading feel truly magical.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      {/* Navigation */}
      <nav className="relative z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              AstroTarot
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/gitsofaryan/astrotarot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-xs bg-accent/10 hover:bg-accent/20 px-2 py-1 rounded"
                title="Give us a star on GitHub"
              >
                <Star className="w-3 h-3" />
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'AstroTarot - AI Powered Tarot Readings',
                      text: 'Discover your cosmic destiny with AI-powered tarot readings!',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-xs bg-accent/10 hover:bg-accent/20 px-2 py-1 rounded"
                title="Share with friends"
              >
                <Share2 className="w-3 h-3" />
              </button>
            </div>
            <a
              href="https://github.com/gitsofaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">Arien Jain</span>
            </a>
            {user ? (
              <Button
                onClick={() => window.location.href = '/app'}
                className="bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30"
              >
                Open App
              </Button>
            ) : (
              <>
                <Button variant="ghost" onClick={handleSignIn}>
                  Sign In
                </Button>
                <Button
                  onClick={handleGetStarted}
                  className="bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cosmicHero}
            alt="Cosmic background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-cosmic/80" />
        </div>

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-accent animate-cosmic-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${0.5 + Math.random() * 1}rem`
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
              Unlock Your Destiny with AI Tarot
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Experience the ancient wisdom of tarot cards enhanced by cutting-edge AI.
              Get personalized readings that illuminate your path forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/30 text-lg px-8 py-6 h-auto"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent/60 hover:bg-accent/20 text-lg px-8 py-6 h-auto"
              >
                <Eye className="w-6 h-6 mr-3" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>10,000+ Readings</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
              Mystical Features
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Discover the powerful features that make AstroTarot the most advanced tarot reading platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-md border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20"
              >
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 text-accent mx-auto mb-4 animate-cosmic-pulse" />
                  <CardTitle className="text-xl text-accent">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
              Choose Your Path
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Select the perfect plan for your spiritual journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <Card
                key={plan.id}
                className={`relative bg-card/80 backdrop-blur-md border-2 transition-all duration-500 hover:shadow-2xl ${plan.popular
                    ? 'border-accent shadow-xl shadow-accent/20 scale-105'
                    : 'border-accent/20 hover:border-accent/40'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-mystical text-background px-4 py-1">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-accent mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price > 0 && <span className="text-foreground/60">/month</span>}
                  </div>
                  <p className="text-sm text-foreground/70">
                    {plan.readingsLimit === -1 ? 'Unlimited' : plan.readingsLimit} readings per month
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${plan.popular
                        ? 'bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30'
                        : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    onClick={handleGetStarted}
                  >
                    {plan.price === 0 ? 'Start Free' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
              Trusted by Seekers Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-md border-2 border-accent/20 hover:border-accent/40 transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-accent font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mystical bg-clip-text text-transparent">
              Begin Your Cosmic Journey Today
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join thousands of seekers who have discovered their path through AstroTarot
            </p>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/30 text-lg px-12 py-6 h-auto"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Start Free Reading
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-accent/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Moon className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
                  AstroTarot
                </span>
              </div>
              <p className="text-foreground/60 text-sm">
                Unlock the mysteries of your destiny through AI-powered tarot readings.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 AstroTarot. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};