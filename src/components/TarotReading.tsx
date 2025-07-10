import { TarotCard as TarotCardType } from '@/data/tarotDeck';
import { TarotCard } from './TarotCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Eye, Heart } from 'lucide-react';

interface TarotReadingProps {
  cards: TarotCardType[];
  question: string;
  reading: string;
  isLoading?: boolean;
}

export const TarotReading = ({ cards, question, reading, isLoading }: TarotReadingProps) => {
  const cardPositions = [
    { name: "Past", icon: Eye, description: "What has shaped your path" },
    { name: "Present", icon: Heart, description: "Your current energy" },
    { name: "Future", icon: Sparkles, description: "What awaits ahead" }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Question Display */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-center text-accent flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Your Question
            <Sparkles className="w-5 h-5" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-foreground italic text-lg">
            "{question}"
          </p>
        </CardContent>
      </Card>

      {/* Three Card Spread */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const position = cardPositions[index];
          const IconComponent = position.icon;
          
          return (
            <div key={card.id} className="text-center space-y-4">
              {/* Position Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-accent">
                  <IconComponent className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">{position.name}</h3>
                  <IconComponent className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground">{position.description}</p>
              </div>

              {/* Card */}
              <div className="flex justify-center">
                <TarotCard 
                  card={card} 
                  isRevealed={true} 
                  size="large"
                  className="animate-cosmic-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>

              {/* Card Meaning */}
              <Card className="bg-secondary/50 border-border/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-accent mb-2">{card.name}</h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {card.meaning}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {card.keywords.slice(0, 3).map(keyword => (
                      <span 
                        key={keyword}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* AI Reading */}
      <Card className="bg-gradient-to-br from-card via-secondary/30 to-card border-accent/30">
        <CardHeader>
          <CardTitle className="text-center text-accent flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 animate-cosmic-pulse" />
            The Oracle's Interpretation
            <Sparkles className="w-6 h-6 animate-cosmic-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {isLoading ? (
            <div className="text-center space-y-4">
              <div className="animate-cosmic-pulse">
                <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              </div>
              <p className="text-muted-foreground">The cosmic energies are aligning...</p>
              <p className="text-sm text-muted-foreground">Channeling the ancient wisdom...</p>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line font-medium">
                {reading}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};