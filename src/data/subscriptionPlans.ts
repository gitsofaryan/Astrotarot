import { SubscriptionPlan } from '@/types/user';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Seeker',
    price: 0,
    priceId: '',
    readingsLimit: 3,
    features: [
      '3 tarot readings per month',
      'Basic AI interpretations',
      'Standard card deck',
      'Email support'
    ]
  },
  {
    id: 'mystic',
    name: 'Mystic',
    price: 9.99,
    priceId: 'price_mystic_monthly',
    readingsLimit: 25,
    features: [
      '25 tarot readings per month',
      'Enhanced AI interpretations',
      'Premium card designs',
      'Detailed card meanings',
      'Priority support',
      'Reading history'
    ],
    popular: true
  },
  {
    id: 'oracle',
    name: 'Oracle',
    price: 19.99,
    priceId: 'price_oracle_monthly',
    readingsLimit: 100,
    features: [
      '100 tarot readings per month',
      'Advanced AI insights',
      'Multiple spread types',
      'Personalized affirmations',
      'Export readings as PDF',
      'Premium support',
      'Custom card interpretations'
    ]
  },
  {
    id: 'cosmic',
    name: 'Cosmic Master',
    price: 39.99,
    priceId: 'price_cosmic_monthly',
    readingsLimit: -1, // Unlimited
    features: [
      'Unlimited tarot readings',
      'Master-level AI interpretations',
      'All spread types & layouts',
      'Personal tarot journal',
      'Advanced analytics',
      'White-glove support',
      'Early access to new features',
      'Custom deck uploads'
    ]
  }
];

export const getPlanByTier = (tier: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(plan => plan.id === tier);
};