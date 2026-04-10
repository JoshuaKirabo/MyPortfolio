/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.html",
    "./src/**/*.{html,js}",],
  safelist: ["is-sticky"],
  theme: {

    extend: {

      'boxShadow': '0px 36px 100px 0px rgba(8, 8, 8, 0.15)',
      boxShadow: {
        '2xl': '0px 36px 100px 0px rgba(8, 8, 8, 0.15)',
      },
      screens: {
        // xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          // sm: '2rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
      fontFamily: {
        'Syne': ['"Syne"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif'],
        'sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "1",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "2",
          },
        ],
        tiny: [
          "16px",
          {
            lineHeight: "1.75",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "1.555",
          },
        ],
        lg: [
          "28px",
          {
            lineHeight: "1.428",
          },
        ],
        xl: [
          "36px",
          {
            lineHeight: "1.277",
          },
        ],
        "2xl": [
          "68px",
          {
            lineHeight: "1.1764",
          },
        ],
      },

      fontSize: {
        'h1': ['120px', {
          lineHeight: '1',
          fontWeight: '700',
        }],
        'h2': ['80px', {
          lineHeight: '8.5rem',
          fontWeight: '700',
        }],
        'h3': ['64px', {
          lineHeight: '72px',
          letterSpacing: '-0.96px',
          fontWeight: '700',
        }],
        'h4': ['44px', {
          lineHeight: '54px',
          fontWeight: '700',
        }],
        'h5': ['32px', {
          lineHeight: '40px',
          fontWeight: '700',
        }],
        'h6': ['24px', {
          lineHeight: '32px',
          fontWeight: '700',
        }],
        'subtitle': ['20px', {
          lineHeight: '28px',
          fontWeight: '700',
        }],

        sm: ['14px', '20px'],
        base: ['16px', '24px'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: {
          300: 'rgba(8, 8, 8, 0.03)',
          800: '#080808',
          700: 'rgba(8, 8, 8, 0.80)',
          600: 'rgba(8, 8, 8, 0.60)',
          500: 'rgba(8, 8, 8, 0.04)',
          text: {
            100: 'rgba(8, 8, 8, 0.1)',
            800: 'rgba(8, 8, 8, 0.8)',
            600: 'rgba(8, 8, 8, 0.6)',
            400: 'rgba(8, 8, 8, 0.4)',
          }


        },
        'active': 'rgba(8, 8, 8, 0.95)',
        'primary': '#FFB646',
        'orange': '#FF9330',
        'secondary': '#FFE9D9',
        'blue': '#24E9FF ',
        'violet': '#BF29FF',
        'green': '#05EB05',
        'yellow': '#FFE600',
        'bermuda': '#78dcca',
        'border-white': "rgba(255, 255, 255, 0.2)"
      },

      keyframes: {
        moveUp: {
          "0%": {
            opacity: 1,
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
          "25%": {
            opacity: 0,
            transform: "translateX(10px) translateY(-10px) scale(0.9)",
          },
          "26%": {
            opacity: 0,
            transform: "translateX(-10px) translateY(10px) scale(0.9)",

          },
          "55%": {
            opacity: 1,
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
        },

        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 0px, 10px)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0px, 0px)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100px, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100px,0 , 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        animateSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        "arrow-move-up": "moveUp 0.8s linear",
        "fadeInLeft1": "fadeInLeft 1.2s ease-in-out",
        "fadeInLeft2": "fadeInLeft 1.4s ease-in-out",
        "fadeInLeft3": "fadeInLeft 1.6s ease-in-out",
        "fadeInLeft4": "fadeInLeft 1.8s ease-in-out",
        "fadeInLeft5": "fadeInLeft 2s ease-in-out",
        "fadeInLeft6": "fadeInLeft 2.3s ease-in-out",
        "fadeInLeft7": "fadeInLeft 2.6s ease-in-out",
        "fadeInRight": "fadeInRight 1.8s ease-in-out",
        "fadeInDown": "fadeInDown 0.7s ease-in-out 0s normal none 1 running",
        "spin": "animateSpin 7s linear infinite",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1295px",
          },
        },
      });
    },
  ],
};


