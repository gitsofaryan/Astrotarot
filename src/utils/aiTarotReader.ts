import { TarotCard } from '@/data/tarotDeck';

const GEMINI_API_KEY = 'AIzaSyAunvZeGoX4jnIBv5_PCGMzzR0z0AicyCQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const generateTarotReading = async (question: string, cards: TarotCard[]): Promise<string> => {
  try {
    const prompt = `You are Madame Celestine, an ancient and wise tarot reader with centuries of mystical knowledge. You speak with the voice of cosmic wisdom, channeling the energies of the universe itself. Your readings are profound, deeply personal, and transformative.

🔮 THE SEEKER'S SACRED QUESTION 🔮
"${question}"

🌟 THE COSMIC TRINITY OF CARDS REVEALED 🌟

✨ PAST ENERGIES - ${cards[0].name} ✨
Sacred Meaning: ${cards[0].meaning}
Mystical Keywords: ${cards[0].keywords.join(' • ')}
Arcana Type: ${cards[0].arcana} arcana
${cards[0].suit ? `Elemental Suit: ${cards[0].suit}` : ''}

🌙 PRESENT MOMENT - ${cards[1].name} 🌙  
Sacred Meaning: ${cards[1].meaning}
Mystical Keywords: ${cards[1].keywords.join(' • ')}
Arcana Type: ${cards[1].arcana} arcana
${cards[1].suit ? `Elemental Suit: ${cards[1].suit}` : ''}

⭐ FUTURE MANIFESTATION - ${cards[2].name} ⭐
Sacred Meaning: ${cards[2].meaning}
Mystical Keywords: ${cards[2].keywords.join(' • ')}
Arcana Type: ${cards[2].arcana} arcana
${cards[2].suit ? `Elemental Suit: ${cards[2].suit}` : ''}

🔮 DIVINE GUIDANCE REQUIRED 🔮

As Madame Celestine, provide a mystical reading that:

1. **OPENS WITH COSMIC ACKNOWLEDGMENT**: Begin by acknowledging the seeker's courage to seek divine guidance and the significance of their question

2. **WEAVES A MYSTICAL NARRATIVE**: Connect all three cards into a flowing story that spans past, present, and future, showing how they're interconnected by cosmic threads

3. **ADDRESSES THE QUESTION DIRECTLY**: Provide specific, actionable guidance related to their question using the card meanings

4. **USES RICH MYSTICAL LANGUAGE**: Include references to:
   - Cosmic energies and celestial forces
   - Ancient wisdom and sacred knowledge  
   - Spiritual symbols and mystical elements
   - The universe's divine plan
   - Chakras, auras, and energy fields
   - Moon phases, star alignments, and cosmic cycles

5. **PROVIDES DEEP INSIGHTS**: Go beyond surface meanings to reveal hidden truths and spiritual lessons

6. **INCLUDES PRACTICAL WISDOM**: Offer concrete steps or mindset shifts the seeker can embrace

7. **ENDS WITH EMPOWERMENT**: Close with an uplifting affirmation and blessing for their journey

8. **LENGTH**: 400-500 words for a truly comprehensive reading

9. **MYSTICAL FORMATTING**: Use mystical symbols (✨🌟🔮🌙⭐) to separate sections and add visual magic

Channel the ancient wisdom of the cards and speak as if the universe itself is flowing through your words. Make this reading feel like a sacred, transformative experience that the seeker will treasure forever.`;

    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the text from the Gemini response
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected response format from Gemini API');
    }
    
  } catch (error) {
    console.error('Error generating Gemini reading:', error);
    
    // Enhanced fallback with more mystical depth
    return `🌟 The Cosmic Veil Shimmers 🌟

Beloved seeker, the ancient energies swirl around your sacred question: "${question}"

Though the celestial channels are momentarily veiled, the cards ${cards.map(c => c.name).join(', ')} have already begun weaving their mystical tapestry around your soul's journey.

✨ **The Past Whispers**: ${cards[0].name} speaks of ${cards[0].keywords[0]} that has shaped your spiritual foundation. This energy has been your hidden teacher, preparing you for this moment of divine seeking.

🌙 **The Present Pulses**: ${cards[1].name} illuminates your current path with ${cards[1].keywords[0]}. The universe asks you to embrace this energy as your guiding star through the cosmic currents of now.

⭐ **The Future Beckons**: ${cards[2].name} promises ${cards[2].keywords[0]} will manifest in your journey ahead. Trust that the cosmic forces are aligning to bring this blessed energy into your reality.

The ancient ones whisper that when the cosmic winds settle and the star-paths clear, return to the oracle. Your destiny awaits, written in starlight and sealed with divine love.

Until then, carry these sacred symbols in your heart, for they are already working their magic in the invisible realms of your soul's evolution.

🔮 Blessed be your journey, dear one. The universe conspires in your favor. ✨`;
  }
};

// Enhanced helper function with more mystical context
export const getCardContext = (card: TarotCard, position: 'past' | 'present' | 'future'): string => {
  const positionMeanings = {
    past: "has woven the sacred threads of your soul's tapestry",
    present: "channels divine energy through your current spiritual frequency", 
    future: "awaits manifestation through cosmic alignment and divine will"
  };

  const elementalEnergy = card.suit ? ` The ${card.suit} energy brings elemental wisdom of ${getSuitElement(card.suit)}.` : '';
  
  return `${card.name} ${positionMeanings[position]}, radiating ${card.keywords.slice(0, 2).join(' and ')}.${elementalEnergy}`;
};

// Get elemental associations for suits
const getSuitElement = (suit: string): string => {
  const elements = {
    'cups': 'water - emotions, intuition, and spiritual flow',
    'wands': 'fire - passion, creativity, and divine inspiration', 
    'swords': 'air - intellect, communication, and mental clarity',
    'pentacles': 'earth - material manifestation, abundance, and grounding'
  };
  return elements[suit as keyof typeof elements] || 'pure cosmic energy';
};

// Generate enhanced mystical affirmations
export const generateAffirmation = (cards: TarotCard[]): string => {
  const affirmations = [
    `I am a sacred vessel for ${cards[0].keywords[0]}, channeling ${cards[1].keywords[0]}, and manifesting ${cards[2].keywords[0]} through divine grace.`,
    `The cosmic forces of ${cards.map(c => c.keywords[0]).join(', ')} flow through my being, aligning me with my highest destiny.`,
    `I embrace the ancient wisdom of ${cards[0].name}, embody the present power of ${cards[1].name}, and welcome the future blessings of ${cards[2].name}.`,
    `My soul dances with the energies of ${cards[1].keywords[0]}, as I transform ${cards[0].keywords[0]} into ${cards[2].keywords[0]} through divine alchemy.`,
    `I am divinely guided by the sacred trinity of ${cards.map(c => c.name).join(', ')}, each card a beacon lighting my path to spiritual fulfillment.`
  ];

  return affirmations[Math.floor(Math.random() * affirmations.length)];
};

// Generate mystical card combinations insights
export const getCardSynergy = (cards: TarotCard[]): string => {
  const majorCount = cards.filter(c => c.arcana === 'major').length;
  const suits = cards.filter(c => c.suit).map(c => c.suit);
  const uniqueSuits = [...new Set(suits)];

  let synergy = '';
  
  if (majorCount === 3) {
    synergy = 'A powerful trinity of Major Arcana reveals this is a time of profound spiritual transformation and karmic significance.';
  } else if (majorCount === 2) {
    synergy = 'Two Major Arcana cards indicate significant life lessons and spiritual growth are at hand.';
  } else if (majorCount === 1) {
    synergy = 'One Major Arcana card provides the spiritual foundation for practical manifestation.';
  } else {
    synergy = 'The Minor Arcana speaks to everyday magic and practical spiritual application.';
  }

  if (uniqueSuits.length === 1 && suits.length > 1) {
    synergy += ` The repeated ${suits[0]} energy amplifies ${getSuitElement(suits[0])}.`;
  } else if (uniqueSuits.length > 1) {
    synergy += ` Multiple elemental energies create a balanced cosmic harmony.`;
  }

  return synergy;
};