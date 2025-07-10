import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { SubscriptionModal } from '@/components/SubscriptionModal';
import { getPlanByTier } from '@/data/subscriptionPlans';
import { 
  User, 
  Crown, 
  Calendar, 
  TrendingUp, 
  Settings, 
  LogOut,
  Sparkles,
  Eye
} from 'lucide-react';

export const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  if (!user) return null;

  const currentPlan = getPlanByTier(user.subscription);
  const usagePercentage = user.readingsLimit === -1 
    ? 0 
    : (user.readingsUsed / user.readingsLimit) * 100;

  const remainingReadings = user.readingsLimit === -1 
    ? 'Unlimited' 
    : user.readingsLimit - user.readingsUsed;

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-mystical bg-clip-text text-transparent">
              Welcome back, {user.name}
            </h1>
            <p className="text-foreground/70">Your cosmic dashboard awaits</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-accent/40 hover:bg-accent/20">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" onClick={logout} className="border-destructive/40 hover:bg-destructive/20">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-card/80 backdrop-blur-md border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                <Button 
                  className="bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30 h-16"
                  onClick={() => window.location.href = '/app'}
                >
                  <Eye className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">New Reading</div>
                    <div className="text-sm opacity-80">Ask the cosmos</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-accent/40 hover:bg-accent/20 h-16"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Reading History</div>
                    <div className="text-sm opacity-80">View past insights</div>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card className="bg-card/80 backdrop-blur-md border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your Spiritual Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{user.readingsUsed}</div>
                    <div className="text-sm text-foreground/70">Readings This Month</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{remainingReadings}</div>
                    <div className="text-sm text-foreground/70">Remaining</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">
                      {Math.floor((Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24))}
                    </div>
                    <div className="text-sm text-foreground/70">Days Active</div>
                  </div>
                </div>

                {user.readingsLimit !== -1 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Usage</span>
                      <span>{user.readingsUsed} / {user.readingsLimit}</span>
                    </div>
                    <Progress value={usagePercentage} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Current Plan */}
            <Card className="bg-card/80 backdrop-blur-md border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge 
                    className={`text-lg px-4 py-2 ${
                      currentPlan?.popular 
                        ? 'bg-gradient-mystical text-background' 
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {currentPlan?.name}
                  </Badge>
                  <div className="mt-2 text-2xl font-bold">
                    ${currentPlan?.price}
                    {currentPlan && currentPlan.price > 0 && (
                      <span className="text-sm font-normal text-foreground/60">/month</span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  {currentPlan?.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => setShowSubscriptionModal(true)}
                  className="w-full bg-gradient-mystical hover:shadow-lg hover:shadow-accent/30"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>

            {/* Profile */}
            <Card className="bg-card/80 backdrop-blur-md border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-foreground/70">Name</label>
                  <div className="font-medium">{user.name}</div>
                </div>
                <div>
                  <label className="text-sm text-foreground/70">Email</label>
                  <div className="font-medium">{user.email}</div>
                </div>
                <div>
                  <label className="text-sm text-foreground/70">Member Since</label>
                  <div className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SubscriptionModal 
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        currentPlan={user.subscription}
      />
    </div>
  );
};