


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        wiggle: 'wiggle 100ms ease-in-out',
        spin: 'spin 10000ms linear infinite',
        bounce: 'bounce 2s infinite',
        smallbounce : 'smallbounce 1s infinite',
        rotatebutton : 'rotatebutton 1s ease'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(10px)'},
          '50%': { transform: 'translateY(0)'},  
        },
        smallbounce: {
          '0%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0)'}
        },
        rotatebutton: {
           transform: 'rotate(-45deg)',
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
