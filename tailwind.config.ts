/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        border: 'var(--base-border)',
        input: 'var(--base-input)',
        background: 'var(--base-background)',
        baseText: 'var(--base-text)',
        title: 'var(--base-title)',
        subtitle: 'var(--base-subtitle)',
        post: 'var(--base-post)',
        label: 'var(--base-label)',
        profile: 'var(--base-profile)',
        span: 'var(--base-span)',
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
      fontSize: {
        base: '1rem',
        sm: '0.875rem',
        md: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.375rem',
        '3xl': '1.5rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        default: ['Source Code Pro', 'monospace'],
      },

      borderRadius: {
        lg: 'var(--radius)',
        circle: '50%',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      height: {
        lg: '600px',
      },

      backgroundImage: {
        hero: "url('./assets/Cover.png')",
      },
    },
  },
}
