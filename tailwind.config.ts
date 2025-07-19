import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'cosmic-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(2deg)' }
				},
				'gentle-wave': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg) scale(1)' },
					'25%': { transform: 'translateY(-8px) rotateZ(1deg) scale(1.02)' },
					'50%': { transform: 'translateY(-4px) rotateZ(-1deg) scale(1.01)' },
					'75%': { transform: 'translateY(-12px) rotateZ(0.5deg) scale(1.02)' }
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'50%': { transform: 'translateY(-6px) rotateZ(1deg)' }
				},
				'mystical-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(270 91% 65% / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(45 93% 47% / 0.4)' }
				},
				'cosmic-pulse': {
					'0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'golden-glow': {
					'0%, 100%': { textShadow: '0 0 10px hsl(45 93% 47% / 0.5)' },
					'50%': { textShadow: '0 0 20px hsl(45 93% 47% / 0.8), 0 0 30px hsl(45 93% 47% / 0.3)' }
				},
				'text-reveal': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cosmic-float': 'cosmic-float 4s ease-in-out infinite',
				'gentle-wave': 'gentle-wave 3s ease-in-out infinite',
				'gentle-float': 'gentle-float 2s ease-in-out infinite',
				'mystical-glow': 'mystical-glow 2s ease-in-out infinite',
				'cosmic-pulse': 'cosmic-pulse 1.5s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'golden-glow': 'golden-glow 2s ease-in-out infinite',
				'text-reveal': 'text-reveal 0.8s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out'
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-mystical': 'var(--gradient-mystical)',
				'gradient-card': 'var(--gradient-card)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
