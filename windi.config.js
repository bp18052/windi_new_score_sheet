import { defineConfig, transform } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  extract: {
    include: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    backdropBrightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
    backdropBlur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
    zIndex: {
      first: 10,
      second: 20,
    },
    extend: {
      fontFamily: {
        itc:['itc avant garde gothic pro'],
        milka:['milka'],
        milkaBrittle:['milka brittle'],
        aryadouble:['arya double'],
        aryatriple:['arya triple']
      },
      fontWeight: {
        'hairline': 100,
        'extra-light': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'extra-bold': 800,
        'black': 900,
      },
      backgroundImage: theme => ({
        'top-img': "url('public/HomeImage.jpg')"
      })
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  shortcuts:{
    'itc': 'visible font-itc font-normal not-italic',
    'milka': 'visible font-milka font-normal not-italic',
    'milka-brittle': 'visible font-milkaBrittle font-normal not-italic',
    'aryadouble': 'visible font-aryadouble font-normal not-italic',
    'aryatriple': 'visible font-aryatriple font-normal not-italic',
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/filters'),
    require('@windicss/plugin-question-mark'),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 300,
      },
    }),
    transform('flowbite/plugin'),
    transform("daisyui"),
  ],
});
