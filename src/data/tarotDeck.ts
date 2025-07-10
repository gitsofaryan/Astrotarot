export interface TarotCard {
  id: number;
  name: string;
  meaning: string;
  reversedMeaning: string;
  keywords: string[];
  suit?: string;
  arcana: 'major' | 'minor';
  image: string;
}

export const tarotDeck: TarotCard[] = [
  // Major Arcana
  {
    id: 0,
    name: "The Fool",
    meaning: "New beginnings, innocence, adventure, spontaneity, free spirit",
    reversedMeaning: "Recklessness, foolishness, risk-taking, lack of direction",
    keywords: ["beginnings", "adventure", "innocence", "journey"],
    arcana: "major",
    image: "/tarot/major/fool.jpg"
  },
  {
    id: 1,
    name: "The Magician",
    meaning: "Manifestation, power, resourcefulness, inspired action, willpower",
    reversedMeaning: "Manipulation, poor planning, untapped talents, illusion",
    keywords: ["manifestation", "power", "skill", "focus"],
    arcana: "major",
    image: "/tarot/major/magician.jpg"
  },
  {
    id: 2,
    name: "The High Priestess",
    meaning: "Intuition, sacred knowledge, divine feminine, subconscious mind",
    reversedMeaning: "Secrets, disconnected from intuition, withdrawal",
    keywords: ["intuition", "mystery", "wisdom", "inner voice"],
    arcana: "major",
    image: "/tarot/major/high-priestess.jpg"
  },
  {
    id: 3,
    name: "The Empress",
    meaning: "Femininity, beauty, nature, nurturing, abundance, creativity",
    reversedMeaning: "Creative block, dependence on others, smothering",
    keywords: ["abundance", "fertility", "nature", "creativity"],
    arcana: "major",
    image: "/tarot/major/empress.jpg"
  },
  {
    id: 4,
    name: "The Emperor",
    meaning: "Authority, establishment, structure, father figure, control",
    reversedMeaning: "Tyranny, rigidity, coldness, excessive control",
    keywords: ["authority", "structure", "control", "leadership"],
    arcana: "major",
    image: "/tarot/major/emperor.jpg"
  },
  {
    id: 5,
    name: "The Hierophant",
    meaning: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
    reversedMeaning: "Personal beliefs, freedom, challenging tradition",
    keywords: ["tradition", "wisdom", "teaching", "conformity"],
    arcana: "major",
    image: "/tarot/major/hierophant.jpg"
  },
  {
    id: 6,
    name: "The Lovers",
    meaning: "Love, harmony, relationships, values alignment, choices",
    reversedMeaning: "Self-love, disharmony, imbalance, misalignment",
    keywords: ["love", "relationships", "choices", "harmony"],
    arcana: "major",
    image: "/tarot/major/lovers.jpg"
  },
  {
    id: 7,
    name: "The Chariot",
    meaning: "Control, willpower, success, action, determination",
    reversedMeaning: "Self-discipline, opposition, lack of direction",
    keywords: ["victory", "control", "determination", "success"],
    arcana: "major",
    image: "/tarot/major/chariot.jpg"
  },
  {
    id: 8,
    name: "Strength",
    meaning: "Strength, courage, persuasion, influence, compassion",
    reversedMeaning: "Self doubt, low energy, raw emotion, weakness",
    keywords: ["courage", "inner strength", "compassion", "control"],
    arcana: "major",
    image: "/tarot/major/strength.jpg"
  },
  {
    id: 9,
    name: "The Hermit",
    meaning: "Soul searching, introspection, inner guidance, solitude",
    reversedMeaning: "Isolation, loneliness, withdrawal, lost your way",
    keywords: ["introspection", "guidance", "solitude", "wisdom"],
    arcana: "major",
    image: "/tarot/major/hermit.jpg"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    meaning: "Good luck, karma, life cycles, destiny, turning point",
    reversedMeaning: "Bad luck, lack of control, clinging to control",
    keywords: ["destiny", "luck", "cycles", "change"],
    arcana: "major",
    image: "/tarot/major/wheel-of-fortune.jpg"
  },
  {
    id: 11,
    name: "Justice",
    meaning: "Justice, fairness, truth, cause and effect, law",
    reversedMeaning: "Unfairness, lack of accountability, dishonesty",
    keywords: ["justice", "balance", "truth", "fairness"],
    arcana: "major",
    image: "/tarot/major/justice.jpg"
  },
  {
    id: 12,
    name: "The Hanged Man",
    meaning: "Suspension, restriction, letting go, sacrifice",
    reversedMeaning: "Delays, resistance, stalling, indecision",
    keywords: ["sacrifice", "waiting", "perspective", "letting go"],
    arcana: "major",
    image: "/tarot/major/hanged-man.jpg"
  },
  {
    id: 13,
    name: "Death",
    meaning: "Endings, change, transformation, transition",
    reversedMeaning: "Resistance to change, personal transformation",
    keywords: ["transformation", "endings", "rebirth", "change"],
    arcana: "major",
    image: "/tarot/major/death.jpg"
  },
  {
    id: 14,
    name: "Temperance",
    meaning: "Balance, moderation, patience, purpose, meaning",
    reversedMeaning: "Imbalance, excess, self-healing, re-alignment",
    keywords: ["balance", "moderation", "patience", "harmony"],
    arcana: "major",
    image: "/tarot/major/temperance.jpg"
  },
  {
    id: 15,
    name: "The Devil",
    meaning: "Shadow self, attachment, addiction, restriction, sexuality",
    reversedMeaning: "Releasing limiting beliefs, exploring dark thoughts",
    keywords: ["temptation", "bondage", "materialism", "ignorance"],
    arcana: "major",
    image: "/tarot/major/devil.jpg"
  },
  {
    id: 16,
    name: "The Tower",
    meaning: "Sudden change, upheaval, chaos, revelation, awakening",
    reversedMeaning: "Personal transformation, fear of change, averting disaster",
    keywords: ["upheaval", "awakening", "chaos", "revelation"],
    arcana: "major",
    image: "/tarot/major/tower.jpg"
  },
  {
    id: 17,
    name: "The Star",
    meaning: "Hope, faith, purpose, renewal, spirituality",
    reversedMeaning: "Lack of faith, despair, self-trust, disconnection",
    keywords: ["hope", "inspiration", "healing", "guidance"],
    arcana: "major",
    image: "/tarot/major/star.jpg"
  },
  {
    id: 18,
    name: "The Moon",
    meaning: "Illusion, fear, anxiety, subconscious, intuition",
    reversedMeaning: "Release of fear, repressed emotion, inner confusion",
    keywords: ["illusion", "intuition", "dreams", "unconscious"],
    arcana: "major",
    image: "/tarot/major/moon.jpg"
  },
  {
    id: 19,
    name: "The Sun",
    meaning: "Positivity, fun, warmth, success, vitality",
    reversedMeaning: "Inner child, feeling down, overly optimistic",
    keywords: ["joy", "success", "positivity", "vitality"],
    arcana: "major",
    image: "/tarot/major/sun.jpg"
  },
  {
    id: 20,
    name: "Judgement",
    meaning: "Judgement, rebirth, inner calling, absolution",
    reversedMeaning: "Self-doubt, inner critic, ignoring the call",
    keywords: ["rebirth", "awakening", "judgement", "calling"],
    arcana: "major",
    image: "/tarot/major/judgement.jpg"
  },
  {
    id: 21,
    name: "The World",
    meaning: "Completion, integration, accomplishment, travel",
    reversedMeaning: "Seeking personal closure, short-cut to success",
    keywords: ["completion", "accomplishment", "integration", "success"],
    arcana: "major",
    image: "/tarot/major/world.jpg"
  },

  // Minor Arcana - Cups (partial set for demo)
  {
    id: 22,
    name: "Ace of Cups",
    meaning: "Love, new relationships, compassion, creativity",
    reversedMeaning: "Self-love, intuition, repressed emotions",
    keywords: ["love", "emotions", "intuition", "new beginnings"],
    suit: "cups",
    arcana: "minor",
    image: "/tarot/cups/ace.jpg"
  },
  {
    id: 23,
    name: "Two of Cups",
    meaning: "Unified love, partnership, mutual attraction",
    reversedMeaning: "Self-love, break-up, disharmony, distrust",
    keywords: ["partnership", "connection", "love", "unity"],
    suit: "cups",
    arcana: "minor",
    image: "/tarot/cups/two.jpg"
  },
  {
    id: 24,
    name: "Three of Cups",
    meaning: "Celebration, friendship, creativity, collaborations",
    reversedMeaning: "Independence, alone time, hardcore partying",
    keywords: ["friendship", "celebration", "community", "joy"],
    suit: "cups",
    arcana: "minor",
    image: "/tarot/cups/three.jpg"
  },

  // Minor Arcana - Wands (partial set for demo)
  {
    id: 25,
    name: "Ace of Wands",
    meaning: "Inspiration, creative spark, new initiative",
    reversedMeaning: "Lack of energy, delayed progress, distraction",
    keywords: ["inspiration", "creativity", "energy", "potential"],
    suit: "wands",
    arcana: "minor",
    image: "/tarot/wands/ace.jpg"
  },
  {
    id: 26,
    name: "Two of Wands",
    meaning: "Future planning, making decisions, leaving comfort zone",
    reversedMeaning: "Fear of unknown, lack of planning, bad planning",
    keywords: ["planning", "decisions", "discovery", "personal power"],
    suit: "wands",
    arcana: "minor",
    image: "/tarot/wands/two.jpg"
  },

  // Minor Arcana - Swords (partial set for demo)  
  {
    id: 27,
    name: "Ace of Swords",
    meaning: "Breakthrough, new ideas, mental clarity, success",
    reversedMeaning: "Inner clarity, re-thinking an idea, clouded judgement",
    keywords: ["clarity", "breakthrough", "new ideas", "mental power"],
    suit: "swords",
    arcana: "minor",
    image: "/tarot/swords/ace.jpg"
  },
  {
    id: 28,
    name: "Two of Swords",
    meaning: "Difficult decisions, weighing options, indecision",
    reversedMeaning: "Indecision, confusion, information overload",
    keywords: ["decisions", "balance", "stalemate", "blocked emotions"],
    suit: "swords",
    arcana: "minor",
    image: "/tarot/swords/two.jpg"
  },

  // Minor Arcana - Pentacles (partial set for demo)
  {
    id: 29,
    name: "Ace of Pentacles",
    meaning: "New financial opportunity, manifestation, abundance",
    reversedMeaning: "Lost opportunity, lack of planning, poor investment",
    keywords: ["opportunity", "abundance", "manifestation", "new venture"],
    suit: "pentacles",
    arcana: "minor",
    image: "/tarot/pentacles/ace.jpg"
  },
  {
    id: 30,
    name: "Two of Pentacles",
    meaning: "Multiple priorities, time management, prioritization",
    reversedMeaning: "Over-committed, disorganization, reprioritization",
    keywords: ["balance", "priorities", "adaptability", "resourcefulness"],
    suit: "pentacles",
    arcana: "minor",
    image: "/tarot/pentacles/two.jpg"
  }
];

export const shuffleDeck = (deck: TarotCard[]): TarotCard[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const drawCards = (deck: TarotCard[], count: number = 3): TarotCard[] => {
  const shuffled = shuffleDeck(deck);
  return shuffled.slice(0, count);
};