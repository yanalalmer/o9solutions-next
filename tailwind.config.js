/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      o9Sans: ['o9Sans', 'sans-serif'],
      'o9Sans-bold': ['o9Sans-bold', 'sans-serif'],
      'o9Sans-light': ['o9Sans-light', 'sans-serif'],
    },
    screens: {
      desktopL: '1920px',
      // => @media(min-width: 1920px)
      desktop: '1280px',
      // => @media(min-width: 1290px)
      tablet: '600px',
      // => @media(min-width: 600px)
      mobile: '390px',
      // => @media(min-width: 600px)
    },
    extend: {
      fontSize: {
        xxs: '12px',
        xs: '14px',
        base: '17px',
        s: '20px',
        xxm: '24px',
        xm: '32px',
        m: '40px',
        lm: '48px',
        l: '56px',
        xl: '80px',
        xxl: '104px',
      },
      colors: {
        black: '#000',
        white: '#fff',
        background: ' #E5E5E5',
        cardBackground: '#DADADA',
        cardBackgroundDark: '#CACACA',
        neon: '#D7FE51',
      },
    },
  },
  plugins: [],
};
