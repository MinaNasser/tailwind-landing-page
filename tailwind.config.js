/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      'serif': ['Merriweather', 'Georgia', 'serif'],
      'mono': ['Courier New', 'Courier', 'monospace'],
      'custom': ['"Open Sans"', 'Arial', 'sans-serif'],
      'body': ['"Roboto"', 'sans-serif'],
      'heading': ['"Montserrat"', 'sans-serif'],
      'display': ['"Lora"', 'serif'],
    },
    fontWeight: {
      'thin': '100',
      'extra-light': '200',
      'light': '300',
      'regular': '400',
      'medium': '500',
      'semi-bold': '600',
      'bold': '700',
      'extra-bold': '800',
      'black': '900',
    },
    fontSize: {
      'xs': '0.75rem',  // 12px
      'sm': '0.875rem', // 14px
      'base': '1rem',   // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem',  // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '4rem',     // 64px
      '7xl': '5rem',     // 80px
      'xxl': '2.5rem',   // 40px
      'xxx-lg': '3rem',  // 48px
    },
    lineHeight: {
      'tight': '1.1',
      'snug': '1.375',
      'normal': '1.5',
      'relaxed': '1.625',
      'loose': '2',
      'extra-loose': '2.5',
      'super-tight': '1.1',
      'super-loose': '3',
    },
    letterSpacing: {
      'tight': '-0.025em',
      'normal': '0em',
      'wide': '0.025em',
      'wider': '0.1em',
      'widest': '0.2em',
      'extra-tight': '-0.05em',
      'extra-wide': '0.3em',
    },
    

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
      '4xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },


    extend: {
      colors: {
        'bk-red': {
          50: '#ffe5e5',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#e60000',
          700: '#cc0000',
          800: '#b30000',
          900: '#800000',
        },
        'bk-blue': {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#007bff',
          600: '#0066cc',
          700: '#0052b3',
          800: '#003d80',
          900: '#00264d',
        },

        'bk-green': {
          50: '#e6ffe6',
          100: '#ccffcc',
          200: '#99ff99',
          300: '#66ff66',
          400: '#33ff33',
          500: '#00ff00',
          600: '#00cc00',
          700: '#009900',
          800: '#006600',
          900: '#003300',
        },
        'bk-yellow': {
          50: '#fffde5',
          100: '#fffacb',
          200: '#fff599',
          300: '#fff066',
          400: '#ffeb33',
          500: '#ffe600',
          600: '#e6cf00',
          700: '#ccb800',
          800: '#b3a000',
          900: '#806c00',
        },
        // ألوان البنفسجي (Purple)
        'bk-purple': {
          50: '#f5e6ff',
          100: '#ebccff',
          200: '#d999ff',
          300: '#c666ff',
          400: '#b333ff',
          500: '#a000ff',
          600: '#9000e6',
          700: '#8000cc',
          800: '#7000b3',
          900: '#500080',
        },
        // ألوان البرتقالي (Orange)
        'bk-orange': {
          50: '#fff2e5',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#e67300',
          700: '#cc6600',
          800: '#b35900',
          900: '#804000',
        },
        // ألوان الرمادي (Gray)
        'bk-gray': {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#4d4d4d',
          900: '#333333',
        },
        // ألوان سماوية (Cyan)
        'bk-cyan': {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        // ألوان زهرية (Pink)
        'bk-pink': {
          50: '#ffe6f2',
          100: '#ffccde',
          200: '#ff99bd',
          300: '#ff669b',
          400: '#ff337a',
          500: '#ff0059',
          600: '#e60050',
          700: '#cc0046',
          800: '#b3003d',
          900: '#80002b',
        },


        'primary': '#000000',
        'secondary': '#ffffff',
        'accent': '#ff0000',
        'neutral': '#333333',
        'base-100': '#ffffff',
        'info': '#3abff8',
        'success': '#36d399',
        'warning': '#fbbd23',
        'error': '#f87272',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        'bk-teal': '#008080',
        'bk-indigo': '#3F51B5',
        'bk-brown': '#795548',
        'bk-dark': '#1C1C1C',
        'bk-light': '#F1F1F1',
        'bk-gold': '#FFD700',
        'bk-silver': '#C0C0C0',
        'bk-lime': '#32CD32',

      },
      spacing: {
        '2': '0.5rem',   // 8px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
      },
    },
    plugins: [],
  }
}

