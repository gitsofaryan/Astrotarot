import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Moon, Star, Eye, Zap, Heart, Globe, ArrowRight, CheckCircle, Telescope, Compass, Italic as Crystal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cosmicHero from '@/assets/cosmic-hero.jpg';

const Landing = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: <Crystal className="w-8 h-8" />,
      title: "AI-Powered Tarot Readings",
      description: "Advanced AI interprets ancient tarot wisdom with modern precision, providing personalized insights for your life's journey."
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Cosmic Energy Analysis",
      description: "Tap into lunar cycles, planetary alignments, and celestial energies that influence your daily life and major decisions."
    },
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Astrological Insights",
      description: "Discover how the positions of planets and stars at your birth continue to shape your personality and destiny."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Life Path Guidance",
      description: "Navigate life's challenges with ancient wisdom combined with cutting-edge technology for accurate spiritual guidance."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Relationship Compatibility",
      description: "Understand your connections with others through cosmic energy patterns and astrological compatibility analysis."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Cosmic Insights",
      description: "Get immediate answers to your burning questions with our lightning-fast AI oracle powered by centuries of mystical knowledge."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "AstroTarot gave me the clarity I needed during a difficult career transition. The readings are incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael R.",
      text: "I've been using tarot for years, but this AI interpretation adds a whole new dimension to my spiritual practice.",
      rating: 5
    },
    {
      name: "Luna K.",
      text: "The cosmic insights helped me understand my relationship patterns. Life-changing experience!",
      rating: 5
    }
  ];

  const cosmicFacts = [
    {
      title: "The Ancient Art of Tarot",
      description: "Tarot cards originated in 15th century Europe and have been guiding seekers for over 600 years. Each card carries deep symbolic meaning rooted in archetypal wisdom."
    },
    {
      title: "Planetary Influences",
      description: "The positions of celestial bodies at your birth create a unique cosmic fingerprint that influences your personality, relationships, and life path throughout your journey."
    },
    {
      title: "Lunar Cycles & Energy",
      description: "The Moon's phases affect not just ocean tides, but human emotions and intuition. New moons bring new beginnings, while full moons amplify manifestation power."
    },
    {
      title: "Sacred Geometry",
      description: "The universe operates on mathematical principles. Sacred geometric patterns found in nature, from flower petals to galaxy spirals, reflect cosmic harmony and divine order."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <img 
          src={cosmicHero} 
          alt="Cosmic background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-cosmic/90" />
      </div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Moon className="w-12 h-12 text-accent animate-cosmic-float" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
                AstroTarot
              </h1>
              <Star className="w-12 h-12 text-accent animate-cosmic-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <p className="text-2xl md:text-3xl text-foreground/90 mb-8 leading-relaxed">
              Unlock the Mysteries of Your Destiny
            </p>
            
            <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect fusion of ancient tarot wisdom and cutting-edge AI technology. 
              Discover your cosmic blueprint, navigate life's challenges, and manifest your highest potential 
              through personalized readings powered by celestial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => navigate('/reading')}
                className="bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 h-16 px-12 text-xl font-semibold group"
                size="lg"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-cosmic-pulse" />
                Start Your Cosmic Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-accent/60 hover:bg-accent/20 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 h-16 px-12 text-xl font-semibold"
                size="lg"
              >
                <Eye className="w-6 h-6 mr-3" />
                Explore the Cosmos
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-mystical bg-clip-text text-transparent mb-6">
              Cosmic Features & Mystical Powers
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Harness the power of the universe with our advanced spiritual technology platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/90 backdrop-blur-md border-2 border-dotted border-accent/40 hover:border-accent/80 shadow-2xl shadow-primary/20 hover:shadow-accent/30 transition-all duration-500 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-accent mb-4 flex justify-center group-hover:animate-cosmic-pulse">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-accent">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cosmic Knowledge Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-mystical bg-clip-text text-transparent mb-6">
              Ancient Wisdom Meets Modern Technology
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Discover the profound knowledge that has guided humanity for millennia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cosmicFacts.map((fact, index) => (
              <Card 
                key={index}
                className="bg-card/90 backdrop-blur-md border-2 border-dotted border-accent/40 shadow-2xl shadow-primary/20 hover:shadow-accent/30 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-accent flex items-center gap-3">
                    <Globe className="w-6 h-6 animate-cosmic-pulse" />
                    {fact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-lg">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-mystical bg-clip-text text-transparent mb-6">
              Cosmic Transformations
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Real stories from souls who found their path through the stars
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur-md border-2 border-dotted border-accent/40 shadow-2xl shadow-primary/20 min-h-[200px] flex items-center">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-xl text-foreground/90 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-accent font-semibold text-lg">
                  — {testimonials[currentTestimonial].name}
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-accent/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-mystical/20 backdrop-blur-md border-2 border-dotted border-accent/60 shadow-2xl shadow-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
                Your Cosmic Destiny Awaits
              </h2>
              <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
                Step into the realm of infinite possibilities. Let the ancient wisdom of the cosmos 
                illuminate your path and reveal the secrets written in the stars.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  onClick={() => navigate('/reading')}
                  className="bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/40 transition-all duration-500 h-16 px-12 text-xl font-semibold group"
                  size="lg"
                >
                  <Sparkles className="w-6 h-6 mr-3 group-hover:animate-cosmic-pulse" />
                  Begin Your Reading Now
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Instant AI Readings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No Registration Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>100% Free Experience</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center border-t border-accent/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-6 h-6 text-accent" />
            <span className="text-2xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              AstroTarot
            </span>
            <Star className="w-6 h-6 text-accent" />
          </div>
          <p className="text-foreground/60">
            © 2024 AstroTarot. Connecting souls with cosmic wisdom since the dawn of digital mysticism.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;