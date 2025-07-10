import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TarotCard } from '@/components/TarotCard';
import { TarotReading } from '@/components/TarotReading';
import { tarotDeck, drawCards, TarotCard as TarotCardType } from '@/data/tarotDeck';
import { generateTarotReading } from '@/utils/aiTarotReader';
import { Sparkles, Shuffle, Eye, Moon, Star } from 'lucide-react';
import cosmicHero from '@/assets/cosmic-hero.jpg';

const Index = () => {
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState<TarotCardType[]>([]);
  const [reading, setReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [shuffledDeck, setShuffledDeck] = useState<TarotCardType[]>([]);
  const [showDeck, setShowDeck] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleShuffleDeck = () => {
    if (!question.trim()) {
      return;
    }

    const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled);
    setShowDeck(true);
    setSelectedCards([]);
    setSelectedCount(0);
    setShowReading(false);
    setReading('');
  };

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      const newSelected = [...selectedCards, card];
      setSelectedCards(newSelected);
      setSelectedCount(newSelected.length);

      if (newSelected.length === 3) {
        performReading(newSelected);
      }
    }
  };

  const performReading = async (cards: TarotCardType[]) => {
    setIsLoading(true);
    setShowReading(true);
    
    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);
    } catch (error) {
      console.error('Error generating reading:', error);
      setReading('The cosmic energies are currently misaligned. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReading = async () => {
    if (!question.trim()) return;

    setIsLoading(true);
    setShowDeck(false);
    
    const cards = drawCards(tarotDeck, 3);
    setSelectedCards(cards);
    setShowReading(true);

    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);
    } catch (error) {
      console.error('Error generating reading:', error);
      setReading('The cosmic energies are currently misaligned. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setReading('');
    setShowReading(false);
    setShowDeck(false);
    setSelectedCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <img 
          src={cosmicHero} 
          alt="Cosmic background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-cosmic/80" />
      </div>

      {/* Floating Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-8 h-8 text-accent animate-cosmic-float" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              Mystic Oracle
            </h1>
            <Star className="w-8 h-8 text-accent animate-cosmic-float" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Unveil the mysteries of your destiny through the ancient wisdom of the Tarot. 
            Ask your question and let the cosmic energies guide your path.
          </p>
        </div>

        {!showReading ? (
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Question Input */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-center text-accent flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Speak Your Question to the Universe
                  <Eye className="w-5 h-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What guidance do you seek from the cosmic energies?"
                  className="text-lg p-4 bg-background/50 border-accent/30 focus:border-accent text-center"
                />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleQuickReading}
                    disabled={!question.trim() || isLoading}
                    className="flex-1 bg-gradient-mystical hover:shadow-[var(--glow-mystical)] transition-all duration-300"
                    size="lg"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Quick Reading
                  </Button>
                  
                  <Button
                    onClick={handleShuffleDeck}
                    disabled={!question.trim()}
                    variant="outline"
                    className="flex-1 border-accent/50 hover:bg-accent/10 hover:border-accent"
                    size="lg"
                  >
                    <Shuffle className="w-5 h-5 mr-2" />
                    Choose Your Cards
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Deck Selection */}
            {showDeck && (
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-center text-accent">
                    Select 3 Cards ({selectedCount}/3)
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Trust your intuition and choose the cards that call to you
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-96 overflow-y-auto">
                    {shuffledDeck.slice(0, 20).map((card, index) => (
                      <TarotCard
                        key={`${card.id}-${index}`}
                        card={card}
                        isRevealed={false}
                        isSelected={selectedCards.some(c => c.id === card.id)}
                        onClick={() => handleCardSelect(card)}
                        size="small"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto space-y-8">
            <TarotReading
              cards={selectedCards}
              question={question}
              reading={reading}
              isLoading={isLoading}
            />

            <div className="text-center">
              <Button
                onClick={resetReading}
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 hover:border-accent"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                New Reading
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
