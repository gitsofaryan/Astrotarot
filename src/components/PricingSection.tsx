import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Cosmic Explorer",
      price: "Free",
      period: "Forever",
      description: "Perfect for discovering your cosmic path",
      features: [
        "3 AI Tarot Readings per day",
        "Basic cosmic insights",
        "Daily horoscope",
        "Moon phase tracking",
        "Community access"
      ],
      icon: <Star className="w-6 h-6" />,
      badge: "Most Popular",
      badgeVariant: "mystical" as const,
      buttonText: "Start Free Journey",
      buttonVariant: "outline" as const
    },
    {
      name: "Mystic Seeker",
      price: "$9.99",
      period: "per month",
      description: "For dedicated spiritual practitioners",
      features: [
        "Unlimited AI Tarot Readings",
        "Advanced astrological charts",
        "Personalized cosmic calendar",
        "Relationship compatibility",
        "Dream interpretation",
        "Priority support"
      ],
      icon: <Zap className="w-6 h-6" />,
      badge: "Best Value",
      badgeVariant: "cosmic" as const,
      buttonText: "Upgrade to Mystic",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Cosmic Master",
      price: "$19.99",
      period: "per month",
      description: "Ultimate spiritual guidance experience",
      features: [
        "Everything in Mystic Seeker",
        "Personal AI astrologer",
        "Live cosmic events calendar",
        "Advanced numerology readings",
        "Chakra balancing guides",
        "Exclusive master classes",
        "1-on-1 spiritual coaching"
      ],
      icon: <Crown className="w-6 h-6" />,
      badge: "Premium",
      badgeVariant: "cosmic" as const,
      buttonText: "Become a Master",
      buttonVariant: "default" as const
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-mystical bg-clip-text text-transparent mb-6">
          Choose Your Cosmic Journey
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Unlock deeper mysteries and accelerate your spiritual growth with our premium cosmic guidance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index}
            className={`relative bg-card/90 backdrop-blur-md border-2 border-dotted shadow-2xl shadow-primary/20 hover:shadow-accent/30 transition-all duration-500 hover:scale-105 animate-fade-in-up ${
              plan.popular 
                ? 'border-accent/80 ring-2 ring-accent/30' 
                : 'border-accent/40 hover:border-accent/80'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant={plan.badgeVariant} className="px-4 py-1">
                  {plan.badge}
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4 pt-8">
              <div className="text-accent mb-4 flex justify-center">
                {plan.icon}
              </div>
              <CardTitle className="text-2xl text-accent mb-2">{plan.name}</CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period !== "Forever" && (
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
                )}
              </div>
              <p className="text-foreground/80">{plan.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.buttonVariant}
                className={`w-full h-12 text-lg font-semibold transition-all duration-500 ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-gradient-mystical hover:shadow-xl hover:shadow-accent/30' 
                    : 'border-2 border-accent/60 hover:bg-accent/20 hover:border-accent hover:shadow-xl hover:shadow-accent/20'
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-foreground/60 mb-4">
          All plans include our 30-day cosmic satisfaction guarantee
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Secure payments</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>24/7 cosmic support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;