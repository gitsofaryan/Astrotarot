import { useState } from 'react';
import { TarotCard as TarotCardType } from '@/data/tarotDeck';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import tarotBackImage from '@/assets/tarot-back.jpg';

interface TarotCardProps {
  card?: TarotCardType;
  isRevealed?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
}

export const TarotCard = ({ 
  card, 
  isRevealed = false, 
  isSelected = false, 
  onClick, 
  className,
  size = 'medium',
  style
}: TarotCardProps) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: 'w-20 h-32',
    medium: 'w-32 h-48',
    large: 'w-40 h-60'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card
      className={cn(
        "relative transition-all duration-700 cursor-pointer group",
        sizeClasses[size],
        "hover:scale-105 hover:shadow-2xl hover:shadow-primary/30",
        isSelected && "ring-2 ring-accent shadow-lg shadow-accent/40 scale-105",
        "bg-gradient-to-br from-card via-secondary/20 to-card",
        "border-2 border-dotted border-accent/30 hover:border-accent/60",
        "rounded-xl overflow-hidden",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {/* Gentle Wave Animation Container */}
      <div className={cn(
        "relative w-full h-full transition-all duration-1000",
        isRevealed ? "animate-gentle-wave" : "animate-gentle-float"
      )}>
        
        {!isRevealed ? (
          // Card Back - Always Visible When Not Revealed
          <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
            <img
              src={tarotBackImage}
              alt="Tarot card back"
              className="w-full h-full object-cover rounded-lg"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-accent/60 rounded-full animate-cosmic-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ) : (
          // Card Front - Revealed Card
          <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-card to-secondary/30">
            {card && (
              <>
                {/* Card Image */}
                <div className="relative w-full h-3/4 overflow-hidden">
                  {imageError ? (
                    <div className="w-full h-full bg-gradient-mystical flex items-center justify-center">
                      <div className="text-center p-3">
                        <div className="text-accent text-4xl mb-3 animate-cosmic-pulse">✨</div>
                        <div className="text-sm text-accent font-bold">{card.name}</div>
                        <div className="text-xs text-accent/80 mt-1">{card.arcana} arcana</div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={handleImageError}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-card via-card/95 to-transparent backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-foreground text-center leading-tight mb-1">
                    {card.name}
                  </h3>
                  {card.suit && (
                    <p className="text-xs text-accent text-center capitalize font-medium">
                      {card.suit} • {card.arcana}
                    </p>
                  )}
                  <div className="flex justify-center mt-2">
                    <div className="w-8 h-0.5 bg-accent/60 rounded-full" />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-transparent via-primary/10 to-accent/10" />
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-cosmic-pulse">
          <div className="w-3 h-3 bg-card rounded-full" />
        </div>
      )}
    </Card>
  );
};