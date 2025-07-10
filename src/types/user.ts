export interface User {
  id: string;
  email: string;
  name: string;
  subscription: SubscriptionTier;
  readingsUsed: number;
  readingsLimit: number;
  createdAt: string;
  subscriptionId?: string;
  customerId?: string;
}

export type SubscriptionTier = 'free' | 'mystic' | 'oracle' | 'cosmic';

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  price: number;
  priceId: string;
  readingsLimit: number;
  features: string[];
  popular?: boolean;
}