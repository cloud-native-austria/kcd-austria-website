/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'Plus Jakarta Sans Fallback', ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['12px'],
      sm: ['14px'],
      base: ['20px'],
      lg: ['22px'],
      xl: ['24px'],
      '2xl': ['26px'],
      '3xl': ['28px'],
      '4xl': ['36px'],
      '5xl': ['40px'],
      '6xl': ['50px'],
      '7xl': ['56px'],
      '8xl': ['80px'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      purple: '#531CB3',
      pink: '#E30282',
      orange: '#FFBC42',

      green: '#0DD8B5',
      blue: '#0086FF',
      primary: {
        1: '#262F59',
        2: 'rgba(38, 47, 89, 0.1)',
        3: 'rgba(38, 47, 89, 0.3)',
        4: 'rgba(38, 47, 89, 0.03)',
        5: 'rgba(38, 47, 89, 0.8)',
      },
      gray: {
        1: '#0D0D0D',
        2: '#1A1A1A',
        3: '#262626',
        4: '#333333',
        5: '#4D4D4D',
        6: '#666666',
        7: '#808080',
        8: '#999999',
        9: '#CCCCCC',
        10: '#E6E6E6',
        11: '#D1D1E0',
        12: '#F5F5F5',
      },
      lightYellow: 'rgba(255, 234, 125, 0.3)',
      lightGreen: 'rgba(125, 255, 208, 0.2)',
      lightOrange: 'rgba(255, 180, 125, 0.2)',
    }),
    backgroundImage: {
      'header-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
      ...defaultTheme.backgroundImage,
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '479px' },
    },
    extend: {
      lineHeight: {
        denser: '1.125',
      },
      letterSpacing: {
        tight: '-0.02em',
        tighter: '-0.04em',
      },
      boxShadow: {
        lg: '0px 14px 20px rgba(38, 47, 89, 0.1)',
        xl: '0px 15px 40px #999999',
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        overflow: '300% 100%',
        normal: '100% 100%',
      },
      animation: {
        slide1: 'slide1 10s ease-in-out infinite',
        slide2: 'slide2 10s ease-in-out infinite',
        slide3: 'slide3 10s ease-in-out infinite',
      },
      keyframes: {
        slide1: {
          '0%, 23%, 100%': { transform: 'translateX(0)', opacity: 1 },
          '33%': { transform: 'translateX(500px)', opacity: 0 },
          '90%': { transform: 'translateX(-500px)', opacity: 0 },
        },
        slide2: {
          '0%, 23%': { transform: 'translateX(-500px)', opacity: 0 },
          '33%, 56%': { transform: 'translateX(0)', opacity: 1 },
          '66%, 100%': { transform: 'translateX(500px)', opacity: 0 },
        },
        slide3: {
          '0%, 56%': { transform: 'translateX(-500px)', opacity: 0 },
          '66%, 90%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(500px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
