import { lazy, Suspense } from 'react';

// Lazy load analytics components to avoid SSR/build issues
const Analytics = lazy(() => import('@vercel/analytics/react').then(module => ({ default: module.Analytics })));
const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then(module => ({ default: module.SpeedInsights })));

export const AnalyticsWrapper = () => {
    // Only render analytics in production or when explicitly enabled
    const shouldLoadAnalytics = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

    if (!shouldLoadAnalytics) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <Analytics />
            <SpeedInsights />
        </Suspense>
    );
};
