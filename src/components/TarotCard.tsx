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
        "relative transition-all duration-500 cursor-pointer group perspective-1000",
        sizeClasses[size],
        "hover:scale-105 hover:shadow-[var(--glow-mystical)]",
        isSelected && "ring-2 ring-accent shadow-[var(--glow-golden)]",
        className
      )}
      onClick={onClick}
      style={style}
    >
      <div className={cn(
        "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
        isRevealed && "rotate-y-180"
      )}>
        {/* Card Back */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden">
          <img
            src={tarotBackImage}
            alt="Tarot card back"
            className="w-full h-full object-cover rounded-lg"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent rounded-full animate-cosmic-pulse" />
          </div>
        </div>

        {/* Card Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden bg-gradient-card">
          {card && (
            <>
              {/* Card Image */}
              <div className="relative w-full h-3/4 overflow-hidden">
                {imageError ? (
                  <div className="w-full h-full bg-gradient-mystical flex items-center justify-center">
                    <div className="text-center p-2">
                      <div className="text-accent text-2xl mb-2">✨</div>
                      <div className="text-xs text-accent font-medium">{card.name}</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>

              {/* Card Info */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-card/90 backdrop-blur-sm">
                <h3 className="text-xs font-semibold text-foreground text-center leading-tight">
                  {card.name}
                </h3>
                {card.suit && (
                  <p className="text-xs text-muted-foreground text-center capitalize">
                    {card.suit}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mystical Glow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-full h-full rounded-lg shadow-lg shadow-primary/30" />
      </div>
    </Card>
  );
};