import { TarotCard } from '@/data/tarotDeck';

// Simulated AI interpretation for demo purposes
// In a real app, this would call an AI service like Grok, OpenAI, etc.
export const generateTarotReading = async (question: string, cards: TarotCard[]): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const readings = [
    `The cosmic energies speak through these sacred cards, revealing profound insights into your query about "${question}".

The ${cards[0].name} in your past position illuminates the foundation of your current journey. ${cards[0].meaning.split(',')[0]} has been the driving force that brought you to this moment of seeking. The universe whispers that this energy has prepared you for what lies ahead.

Your present moment, revealed by ${cards[1].name}, shows ${cards[1].meaning.split(',')[0].toLowerCase()} as your current spiritual state. This card encourages you to embrace ${cards[1].keywords[0]} and ${cards[1].keywords[1]}, for they are your allies in navigating the mystical currents of now.

The future unfolds through ${cards[2].name}, promising ${cards[2].meaning.split(',')[0].toLowerCase()}. The stars align to bring ${cards[2].keywords[0]} into your path. Trust in the cosmic dance, for the universe conspires to manifest your highest good.

May the wisdom of these ancient symbols guide your steps forward. ✨`,

    `The ancient wisdom flows through these mystical cards, offering divine guidance for your question: "${question}".

In the realm of what was, ${cards[0].name} emerges as your spiritual anchor. This powerful archetype speaks of ${cards[0].meaning.split(',')[0].toLowerCase()}, revealing how past experiences have woven the tapestry of your current reality. The card's essence of ${cards[0].keywords.slice(0, 2).join(' and ')} has been your hidden strength.

The present moment crystallizes through ${cards[1].name}, a card of profound significance. It mirrors your current soul's journey, emphasizing ${cards[1].meaning.split(',')[1]?.trim() || cards[1].meaning.split(',')[0]}. The universe calls you to embody ${cards[1].keywords[0]} as you stand at this crossroads of destiny.

Your future path illuminates through ${cards[2].name}, herald of ${cards[2].meaning.split(',')[0].toLowerCase()}. This sacred symbol promises that ${cards[2].keywords.slice(0, 2).join(' and ')} will manifest in your journey ahead. The cosmic forces align to support your transformation.

Trust the wisdom that flows through these ancient messengers. Your path is blessed. 🌟`,

    `The sacred cards have chosen to speak, revealing the cosmic truth surrounding your inquiry: "${question}".

${cards[0].name} emerges from the shadows of your past, carrying the essence of ${cards[0].meaning.split(',')[0].toLowerCase()}. This archetypal energy has been silently shaping your destiny, teaching you the sacred lessons of ${cards[0].keywords.slice(0, 2).join(' and ')}. Honor this foundation, for it is your spiritual bedrock.

In the eternal now, ${cards[1].name} blazes forth with clarity. This card embodies ${cards[1].meaning.split(',')[0].toLowerCase()}, revealing your current spiritual frequency. The universe asks you to fully embrace ${cards[1].keywords[0]}, for it is through this energy that your highest potential awakens.

The future realm beckons through ${cards[2].name}, bearer of ${cards[2].meaning.split(',')[0].toLowerCase()}. This mystical force promises to weave ${cards[2].keywords.slice(0, 2).join(' and ')} into the fabric of your tomorrow. The cosmic wheel turns in your favor.

Remember, dear seeker, that you are both the question and the answer. These cards merely reflect the wisdom already dwelling within your soul. 🔮`
  ];

  // Return a random reading for variety
  const randomIndex = Math.floor(Math.random() * readings.length);
  return readings[randomIndex];
};

// Helper function to create mystical card interpretations
export const getCardContext = (card: TarotCard, position: 'past' | 'present' | 'future'): string => {
  const positionMeanings = {
    past: "has shaped your journey",
    present: "guides your current path", 
    future: "awaits your manifestation"
  };

  return `${card.name} ${positionMeanings[position]}, bringing ${card.keywords.slice(0, 2).join(' and ')}.`;
};

// Generate mystical affirmations based on the cards
export const generateAffirmation = (cards: TarotCard[]): string => {
  const affirmations = [
    `I embrace the wisdom of ${cards[0].keywords[0]} and welcome ${cards[2].keywords[0]} into my life.`,
    `The universe flows through me with ${cards[1].keywords[0]}, guiding me towards ${cards[2].keywords[0]}.`,
    `I am aligned with the cosmic energies of ${cards.map(c => c.keywords[0]).join(', ')}.`,
    `My path unfolds with divine ${cards[1].keywords[0]}, leading to ${cards[2].keywords[0]}.`
  ];

  return affirmations[Math.floor(Math.random() * affirmations.length)];
};