/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens mapped to CSS variables defined in src/styles/globals.css
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        offwhite: 'var(--secondary)',
        accent: 'var(--accent)',
        blush: 'var(--accent)',
        slate: 'var(--foreground)',
        text: 'var(--foreground)',
  header: 'var(--header-text)',
        muted: 'var(--muted)',
        border: 'var(--border)'
      }
    }
  },
  plugins: []
}
