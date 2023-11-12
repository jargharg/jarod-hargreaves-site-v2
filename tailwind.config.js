module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './slices/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './error.vue',
    './app/prismic/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],

  theme: {
    container: false,

    fontFamily: {
      serif: ['kepler-std-condensed-subhead', 'Times New Roman', 'Times', 'sans-serif'],
      sans: ['Helvetica Neue', 'Helvetica', 'system-ui', 'sans-serif'],
    },

    fontSize: {
      '2xs': '0.75rem', // 12px
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      base: '1.25rem', // 20px
      lg: '1.5rem', // 24px
      xl: '1.75rem', // 28px
      '2xl': '2.125rem', // 34px
      '3xl': '2.875rem', // 46px
      '4xl': '3.75rem', // 60px
      '5xl': '5rem', // 80px
      '6xl': '6.25rem', // 100px
    },

    extend: {
      screens: {
        sm: '450px',
        '2xl': '1512px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
