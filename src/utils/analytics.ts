// Safe analytics tracking using @vercel/analytics
import { track } from '@vercel/analytics';

// Safe track function that handles errors gracefully
const safeTrack = (
  eventName: string,
  properties?: Record<string, string | number | boolean | null>
) => {
  try {
    if (properties) {
      track(eventName, properties);
    } else {
      track(eventName);
    }
  } catch (error) {
    // Fallback: log to console in development
    if (import.meta.env.DEV) {
      console.log("Analytics track:", eventName, properties);
    }
  }
};

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
