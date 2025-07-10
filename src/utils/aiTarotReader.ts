import { TarotCard } from '@/data/tarotDeck';

const GEMINI_API_KEY = 'AIzaSyAunvZeGoX4jnIBv5_PCGMzzR0z0AicyCQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const generateTarotReading = async (question: string, cards: TarotCard[]): Promise<string> => {
  try {
    const prompt = `You are a mystical tarot reader with deep knowledge of ancient wisdom and cosmic energies. 

The seeker has asked: "${question}"

The three cards drawn are:
1. Past Position - ${cards[0].name}: ${cards[0].meaning}
   Keywords: ${cards[0].keywords.join(', ')}
   
2. Present Position - ${cards[1].name}: ${cards[1].meaning}
   Keywords: ${cards[1].keywords.join(', ')}
   
3. Future Position - ${cards[2].name}: ${cards[2].meaning}
   Keywords: ${cards[2].keywords.join(', ')}

Please provide a mystical, insightful tarot reading that:
- Connects the three cards in a meaningful narrative
- Addresses the seeker's question directly
- Uses mystical and cosmic language
- Provides guidance and wisdom
- Is approximately 200-300 words
- Includes references to cosmic energies, ancient wisdom, and spiritual guidance
- Ends with an uplifting and empowering message

Format the reading in flowing paragraphs that feel mystical and profound.`;

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
        ]
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
    
    // Fallback to a mystical error message
    return `The cosmic energies are currently in flux, dear seeker. The ancient cards whisper that the universe is realigning to provide you with the perfect guidance at the perfect moment. 

Your question about "${question}" has been heard by the celestial forces. The cards ${cards.map(c => c.name).join(', ')} hold profound wisdom for your journey.

In this moment of cosmic recalibration, trust that your path is guided by divine wisdom. The answers you seek are already within you, waiting to be unveiled when the stars align perfectly for your highest good.

Return to the oracle when the cosmic winds have settled, and the universe will speak through these sacred symbols with crystal clarity. ✨🔮`;
  }
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