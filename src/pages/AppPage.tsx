import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TarotCard } from '@/components/TarotCard';
import { TarotReading } from '@/components/TarotReading';
import { SubscriptionModal } from '@/components/SubscriptionModal';
import { tarotDeck, drawCards, TarotCard as TarotCardType } from '@/data/tarotDeck';
import { generateTarotReading } from '@/utils/aiTarotReader';
import { tarotSounds } from '@/utils/sounds';
import { useAuth } from '@/contexts/AuthContext';
import { getPlanByTier } from '@/data/subscriptionPlans';
import {
  Sparkles,
  Shuffle,
  Eye,
  Moon,
  Star,
  Volume2,
  VolumeX,
  Crown,
  Home,
  User,
  AlertTriangle,
  Github,
  ExternalLink,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';
import cosmicHero from '@/assets/cosmic-hero.jpg';

const AppPage = () => {
  const { user, updateUser } = useAuth();
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState<TarotCardType[]>([]);
  const [reading, setReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [shuffledDeck, setShuffledDeck] = useState<TarotCardType[]>([]);
  const [showDeck, setShowDeck] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const currentPlan = getPlanByTier(user?.subscription || 'free');
  const canUseReading = user && (user.readingsLimit === -1 || user.readingsUsed < user.readingsLimit);
  const usagePercentage = user && user.readingsLimit !== -1
    ? (user.readingsUsed / user.readingsLimit) * 100
    : 0;

  const handleShuffleDeck = () => {
    if (!question.trim()) {
      toast.error('Please enter your question first');
      return;
    }

    if (!canUseReading) {
      setShowSubscriptionModal(true);
      return;
    }

    const shuffled = [...tarotDeck].sort(() => Math.random() - 0.5);
    setShuffledDeck(shuffled);
    setShowDeck(true);
    setSelectedCards([]);
    setSelectedCount(0);
    setShowReading(false);
    setReading('');

    tarotSounds.playSound('shuffle');
  };

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      const newSelected = [...selectedCards, card];
      setSelectedCards(newSelected);
      setSelectedCount(newSelected.length);

      tarotSounds.playSound('cardSelect');

      if (newSelected.length === 3) {
        setTimeout(() => tarotSounds.playSound('mysticalChime'), 300);
        setTimeout(() => performReading(newSelected), 500);
      }
    }
  };

  const performReading = async (cards: TarotCardType[]) => {
    if (!user || !canUseReading) {
      setShowSubscriptionModal(true);
      return;
    }

    setIsLoading(true);
    setShowReading(true);

    tarotSounds.playSound('cardReveal');

    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);

      // Update user's reading count
      updateUser({
        readingsUsed: user.readingsUsed + 1
      });

      tarotSounds.playSound('readingComplete');
      toast.success('Your cosmic reading is complete!');
    } catch (error) {
      console.error('Error generating reading:', error);
      setReading('The cosmic energies are currently misaligned. Please try again later.');
      toast.error('Failed to generate reading. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReading = async () => {
    if (!question.trim()) {
      toast.error('Please enter your question first');
      return;
    }

    if (!canUseReading) {
      setShowSubscriptionModal(true);
      return;
    }

    setIsLoading(true);
    setShowDeck(false);

    tarotSounds.playSound('shuffle');

    const cards = drawCards(tarotDeck, 3);
    setSelectedCards(cards);
    setShowReading(true);

    setTimeout(() => tarotSounds.playSound('cardReveal'), 500);

    try {
      const aiReading = await generateTarotReading(question, cards);
      setReading(aiReading);

      // Update user's reading count
      if (user) {
        updateUser({
          readingsUsed: user.readingsUsed + 1
        });
      }

      tarotSounds.playSound('readingComplete');
      toast.success('Your cosmic reading is complete!');
    } catch (error) {
      console.error('Error generating reading:', error);
      setReading('The cosmic energies are currently misaligned. Please try again later.');
      toast.error('Failed to generate reading. Please try again.');
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
            {/* Usage Indicator */}
            {user && user.readingsLimit !== -1 && (
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-foreground/70">
                  {user.readingsUsed}/{user.readingsLimit} readings
                </span>
                <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-mystical transition-all duration-300"
                    style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                  />
                </div>
              </div>
            )}

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

            <Button
              onClick={toggleSound}
              variant="ghost"
              size="sm"
              className="text-accent hover:bg-accent/20"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>

            <Button
              onClick={() => window.location.href = '/dashboard'}
              variant="ghost"
              className="text-accent hover:bg-accent/20"
            >
              <User className="w-5 h-5 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

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
        {/* Usage Warning */}
        {user && !canUseReading && (
          <Card className="mb-8 bg-destructive/10 border-2 border-destructive/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <div>
                  <h3 className="font-semibold text-destructive">Reading Limit Reached</h3>
                  <p className="text-sm text-foreground/70">
                    You've used all {user.readingsLimit} readings for this month. Upgrade to continue your cosmic journey.
                  </p>
                </div>
                <Button
                  onClick={() => setShowSubscriptionModal(true)}
                  className="ml-auto bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-8 h-8 text-accent animate-cosmic-float" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              Your Cosmic Reading
            </h1>
            <Star className="w-8 h-8 text-accent animate-cosmic-float" style={{ animationDelay: '1s' }} />
          </div>

          {user && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <Badge className="bg-accent/20 text-accent">
                {currentPlan?.name} Plan
              </Badge>
              {user.readingsLimit === -1 ? (
                <Badge className="bg-gradient-mystical text-background">
                  Unlimited Readings
                </Badge>
              ) : (
                <Badge variant="outline" className="border-accent/40">
                  {user.readingsLimit - user.readingsUsed} readings left
                </Badge>
              )}
            </div>
          )}

          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Ask your question and let the cosmic energies guide your path through the ancient wisdom of the Tarot.
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
                    disabled={!question.trim() || isLoading || !canUseReading}
                    className="flex-1 bg-gradient-mystical hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 h-14 text-lg font-semibold"
                    size="lg"
                  >
                    <Sparkles className="w-6 h-6 mr-3" />
                    Quick Reading
                  </Button>

                  <Button
                    onClick={handleShuffleDeck}
                    disabled={!question.trim() || !canUseReading}
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

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        currentPlan={user?.subscription}
      />
    </div>
  );
};

export default AppPage;