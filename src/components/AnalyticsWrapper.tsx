import { useEffect } from 'react';

// Extend window object to include Vercel Analytics
declare global {
    interface Window {
        va?: {
            track: (event: string, properties?: Record<string, unknown>) => void;
        };
        si?: {
            track: () => void;
        };
    }
}

export const AnalyticsWrapper = () => {
    useEffect(() => {
        // Only load analytics in production
        if (!import.meta.env.PROD) return;

        // Inject Vercel Analytics script
        const injectAnalyticsScript = () => {
            // Check if scripts are already injected
            if (document.querySelector('script[data-vercel-analytics]')) return;

            // Inject Analytics script
            const analyticsScript = document.createElement('script');
            analyticsScript.src = 'https://unpkg.com/@vercel/analytics@1/dist/index.js';
            analyticsScript.setAttribute('data-vercel-analytics', 'true');
            analyticsScript.async = true;
            analyticsScript.onload = () => {
                // Initialize analytics after script loads
                if (window.va) {
                    console.log('Vercel Analytics loaded successfully');
                }
            };
            document.head.appendChild(analyticsScript);

            // Inject Speed Insights script
            const speedScript = document.createElement('script');
            speedScript.src = 'https://unpkg.com/@vercel/speed-insights@1/dist/index.js';
            speedScript.setAttribute('data-vercel-speed-insights', 'true');
            speedScript.async = true;
            speedScript.onload = () => {
                // Initialize speed insights after script loads
                if (window.si) {
                    console.log('Vercel Speed Insights loaded successfully');
                }
            };
            document.head.appendChild(speedScript);
        };

        // Inject scripts after a short delay to ensure DOM is ready
        const timer = setTimeout(injectAnalyticsScript, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
};
