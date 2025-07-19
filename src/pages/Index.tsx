import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TarotCard } from '@/components/TarotCard';
import { TarotReading } from '@/components/TarotReading';
import { tarotDeck, drawCards, TarotCard as TarotCardType } from '@/data/tarotDeck';
import { generateTarotReading } from '@/utils/aiTarotReader';
import { tarotSounds } from '@/utils/sounds';
import { Sparkles, Shuffle, Eye, Moon, Star, Volume2, VolumeX } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  const [soundEnabled, setSoundEnabled] = useState(true);

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
    
    // Play shuffle sound
    tarotSounds.playSound('shuffle');
  };

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      const newSelected = [...selectedCards, card];
      setSelectedCards(newSelected);
      setSelectedCount(newSelected.length);

      // Play card select sound
      tarotSounds.playSound('cardSelect');

      if (newSelected.length === 3) {
        // Play mystical chime when all cards are selected
        setTimeout(() => tarotSounds.playSound('mysticalChime'), 300);
        setTimeout(() => performReading(newSelected), 500);
      }
    }
  };

  const performReading = async (cards: TarotCardType[]) => {
    setIsLoading(true);
    setShowReading(true);
    
    // Play card reveal sound
    tarotSounds.playSound('cardReveal');
    
    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);
      // Play completion sound when reading is done
      tarotSounds.playSound('readingComplete');
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
    
    // Play shuffle sound
    tarotSounds.playSound('shuffle');
    
    const cards = drawCards(tarotDeck, 3);
    setSelectedCards(cards);
    setShowReading(true);

    // Play card reveal sound after shuffle
    setTimeout(() => tarotSounds.playSound('cardReveal'), 500);

    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);
      // Play completion sound
      tarotSounds.playSound('readingComplete');
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
    
    // Play mystical chime for reset
    tarotSounds.playSound('mysticalChime');
  };

  const toggleSound = () => {
    const newState = tarotSounds.toggleSounds();
    setSoundEnabled(newState);
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
        <div className="text-center mb-12 animate-fade-in-up relative">
          {/* Controls */}
          <div className="absolute top-0 right-4 flex gap-2">
            <ThemeToggle />
            <Button
              onClick={toggleSound}
              variant="ghost"
              size="sm"
              className="text-accent hover:bg-accent/20 transition-all duration-300"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-8 h-8 text-accent animate-cosmic-float" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              AstroTarot
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
            <Card className="bg-card/90 backdrop-blur-md border-2 border-dotted border-accent/50 shadow-2xl shadow-primary/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-accent flex items-center justify-center gap-3 text-2xl">
                  <Eye className="w-7 h-7 animate-cosmic-pulse" />
                  Speak Your Question to the Universe
                  <Eye className="w-7 h-7 animate-cosmic-pulse" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="What guidance do you seek from the cosmic energies?"
                  className="text-lg p-6 bg-background/60 border-2 border-accent/40 focus:border-accent text-center rounded-xl font-medium placeholder:text-muted-foreground/70"
                />
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    onClick={handleQuickReading}
                    disabled={!question.trim() || isLoading}
                    className="flex-1 bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 h-14 text-lg font-semibold"
                    size="lg"
                  >
                    <Sparkles className="w-6 h-6 mr-3" />
                    Quick Reading
                  </Button>
                  
                  <Button
                    onClick={handleShuffleDeck}
                    disabled={!question.trim()}
                    variant="outline"
                    className="flex-1 border-2 border-accent/60 hover:bg-accent/20 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 h-14 text-lg font-semibold"
                    size="lg"
                  >
                    <Shuffle className="w-6 h-6 mr-3" />
                    Choose Your Cards
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Deck Selection */}
            {showDeck && (
              <Card className="bg-card/90 backdrop-blur-md border-2 border-dotted border-accent/50 shadow-2xl shadow-primary/20 animate-fade-in-up">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-accent text-xl">
                    Select 3 Cards ({selectedCount}/3)
                  </CardTitle>
                  <p className="text-center text-muted-foreground font-medium">
                    Trust your intuition and choose the cards that call to your soul
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-96 overflow-y-auto p-2">
                    {shuffledDeck.slice(0, 20).map((card, index) => (
                      <TarotCard
                        key={`${card.id}-${index}`}
                        card={card}
                        isRevealed={false}
                        isSelected={selectedCards.some(c => c.id === card.id)}
                        onClick={() => handleCardSelect(card)}
                        size="small"
                        className="hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-accent/30"
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
                className="border-2 border-accent/60 hover:bg-accent/20 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 h-12 text-lg font-semibold px-8"
                size="lg"
              >
                <Sparkles className="w-6 h-6 mr-3" />
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
