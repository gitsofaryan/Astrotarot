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
      <Card className="bg-gradient-to-br from-card via-secondary/20 to-card border-2 border-dotted border-accent/40 shadow-2xl shadow-primary/20">
        <CardHeader className="pb-4">
          <CardTitle className="text-center text-accent flex items-center justify-center gap-3 text-xl">
            <Sparkles className="w-6 h-6 animate-cosmic-pulse" />
            Your Sacred Question
            <Sparkles className="w-6 h-6 animate-cosmic-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-6">
          <p className="text-center text-foreground italic text-xl font-medium leading-relaxed">
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
            <div key={card.id} className="text-center space-y-6">
              {/* Position Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-accent">
                  <IconComponent className="w-6 h-6 animate-cosmic-pulse" />
                  <h3 className="text-xl font-bold">{position.name}</h3>
                  <IconComponent className="w-6 h-6 animate-cosmic-pulse" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{position.description}</p>
              </div>

              {/* Card */}
              <div className="flex justify-center">
                <TarotCard 
                  card={card} 
                  isRevealed={true} 
                  size="large"
                  className="animate-gentle-wave shadow-2xl shadow-primary/30"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </div>

              {/* Card Meaning */}
              <Card className="bg-gradient-to-br from-secondary/30 via-card/50 to-secondary/30 border-2 border-dotted border-accent/30 shadow-xl shadow-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-bold text-accent mb-3 text-lg">{card.name}</h4>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                    {card.meaning}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {card.keywords.slice(0, 4).map(keyword => (
                      <span 
                        key={keyword}
                        className="px-3 py-1.5 bg-accent/20 text-accent text-xs rounded-full font-medium border border-accent/30"
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
      <Card className="bg-gradient-to-br from-card via-secondary/30 to-card border-2 border-dotted border-accent/40 shadow-2xl shadow-primary/20">
        <CardHeader className="pb-6">
          <CardTitle className="text-center text-accent flex items-center justify-center gap-4 text-3xl mb-4">
            <Sparkles className="w-10 h-10 animate-cosmic-pulse" />
            The Oracle's Sacred Interpretation
            <Sparkles className="w-10 h-10 animate-cosmic-pulse" />
          </CardTitle>
          <div className="text-center">
            <h3 className="text-2xl font-bold italic text-accent/90 animate-golden-glow">
              Your Mystical Reading
            </h3>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-3 animate-shimmer" />
          </div>
        </CardHeader>
        <CardContent className="p-8">
          {isLoading ? (
            <div className="text-center space-y-6">
              <div className="animate-cosmic-pulse">
                <Sparkles className="w-16 h-16 text-accent mx-auto mb-6" />
              </div>
              <p className="text-muted-foreground text-lg">The cosmic energies are aligning...</p>
              <p className="text-sm text-muted-foreground">Channeling the ancient wisdom...</p>
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {reading.split('\n\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
                <div 
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Golden Border Block */}
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-accent/8 via-background/90 to-accent/5 border border-accent/25 shadow-xl shadow-accent/10 overflow-hidden animate-text-reveal">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-foreground/95 leading-7 text-base font-normal italic tracking-wide">
                        {paragraph.trim().replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1').replace(/__(.*?)__/g, '$1').replace(/_(.*?)_/g, '$1')}
                      </p>
                    </div>

                    {/* Subtle Corner Accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-accent/40 rounded-tl" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-accent/40 rounded-tr" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-accent/40 rounded-bl" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent/40 rounded-br" />
                  </div>
                </div>
              ))}
              
              {/* Mystical Conclusion */}
              <div className="text-center mt-10 space-y-3">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-golden-glow" />
                <p className="text-accent text-lg font-semibold animate-cosmic-pulse italic">
                  ✨ The universe has spoken ✨
                </p>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto animate-golden-glow" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};