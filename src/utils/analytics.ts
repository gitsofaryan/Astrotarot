// Safe analytics tracking that works in all environments
let trackFunction: typeof import("@vercel/analytics").track | null = null;

// Dynamically import the track function to avoid build issues
const initializeTracking = async () => {
  if (
    !trackFunction &&
    (import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === "true")
  ) {
    try {
      const analytics = await import("@vercel/analytics");
      trackFunction = analytics.track;
    } catch (error) {
      console.warn("Failed to load analytics:", error);
    }
  }
};

// Safe track function that handles missing dependencies
const safeTrack = (
  eventName: string,
  properties?: Record<string, string | number | boolean | null>
) => {
  if (trackFunction && properties) {
    trackFunction(eventName, properties);
  } else if (trackFunction) {
    trackFunction(eventName);
  } else if (import.meta.env.DEV) {
    console.log("Analytics track:", eventName, properties);
  }
};

// Initialize tracking on first import
initializeTracking();

// Custom event tracking for AstroTarot
export const trackEvent = {
  // Track when a user starts a tarot reading
  startReading: (question: string) => {
    safeTrack("tarot_reading_started", {
      question_length: question.length,
      has_question: question.trim().length > 0,
    });
  },

  // Track when a reading is completed
  completeReading: (cards: string[], readingType: "quick" | "custom") => {
    safeTrack("tarot_reading_completed", {
      cards_count: cards.length,
      reading_type: readingType,
      cards_used: cards.join(", "),
    });
  },

  // Track card interactions
  cardSelected: (cardName: string, position: number) => {
    safeTrack("tarot_card_selected", {
      card_name: cardName,
      position: position,
    });
  },

  // Track sharing events
  shareReading: (method: "web_share" | "copy_link") => {
    safeTrack("reading_shared", {
      share_method: method,
    });
  },

  // Track GitHub star clicks
  githubStarClicked: () => {
    safeTrack("github_star_clicked");
  },

  // Track sound toggle
  soundToggled: (enabled: boolean) => {
    safeTrack("sound_toggled", {
      sound_enabled: enabled,
    });
  },

  // Track theme changes
  themeChanged: (theme: string) => {
    safeTrack("theme_changed", {
      theme: theme,
    });
  },

  // Track navigation events
  navigate: (from: string, to: string) => {
    safeTrack("navigation", {
      from_page: from,
      to_page: to,
    });
  },

  // Track AI reading generation success/failure
  aiReadingResult: (success: boolean, error?: string) => {
    safeTrack("ai_reading_result", {
      success: success,
      error: error || null,
    });
  },

  // Track deck shuffling
  deckShuffled: () => {
    safeTrack("deck_shuffled");
  },
};

// Helper function to track page views
export const trackPageView = (pageName: string) => {
  safeTrack("page_view", {
    page: pageName,
  });
};
