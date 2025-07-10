import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { subscriptionPlans, getPlanByTier } from '@/data/subscriptionPlans';
import { useAuth } from '@/contexts/AuthContext';
import { Check, Crown, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan?: string;
}

export const SubscriptionModal = ({ isOpen, onClose, currentPlan = 'free' }: SubscriptionModalProps) => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);

  const handleUpgrade = async (planId: string) => {
    if (!user) return;

    setLoading(true);
    try {
      // Simulate Stripe payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const plan = getPlanByTier(planId);
      if (plan) {
        updateUser({
          subscription: plan.id,
          readingsLimit: plan.readingsLimit,
          readingsUsed: 0 // Reset usage on upgrade
        });
        
        toast.success(`Successfully upgraded to ${plan.name}!`);
        onClose();
      }
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-md border-2 border-accent/30">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl text-accent flex items-center justify-center gap-3">
            <Crown className="w-8 h-8" />
            Upgrade Your Cosmic Journey
            <Crown className="w-8 h-8" />
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {subscriptionPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id
                  ? 'border-accent shadow-xl shadow-accent/20 scale-105'
                  : 'border-accent/20 hover:border-accent/40'
              } ${
                currentPlan === plan.id
                  ? 'bg-accent/10'
                  : 'bg-card/80'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-mystical text-background px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              {currentPlan === plan.id && (
                <div className="absolute -top-3 right-3">
                  <Badge variant="outline" className="border-accent text-accent">
                    Current
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-accent mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  {plan.price > 0 && <span className="text-foreground/60">/month</span>}
                </div>
                <p className="text-sm text-foreground/70">
                  {plan.readingsLimit === -1 ? 'Unlimited' : plan.readingsLimit} readings
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {currentPlan !== plan.id && (
                  <Button 
                    className={`w-full ${
                      selectedPlan === plan.id
                        ? 'bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={loading || currentPlan === plan.id}
                  >
                    {loading && selectedPlan === plan.id ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    {plan.price === 0 ? 'Downgrade' : 'Upgrade'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-semibold text-accent">Secure Payment</span>
          </div>
          <p className="text-sm text-foreground/70">
            All payments are processed securely through Stripe. Cancel anytime with no hidden fees.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};