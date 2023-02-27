const hex2rgba = require('hex2rgba');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: ["class", ":global(.dark)"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        grey: '#c5c5c5',
        gray: '#666'
      },
      borderRadius: {
        sm: 4,
        md: 6,
        lg: 8,
        xl: 16
      },
      fontSize: {
        sm: 14,
        md: 16,
        lg: 18,
        xl: 24,
        xl2: 26,
        xxl: 28,
        xxxl: 38,
        xxxxl: 48
      },
      borderColor: {
        grey: '#d9d9d9',
      },
      backgroundColor: {
        newslatter: hex2rgba('#767676', 0.04),
        menu: '#323232'
      },
      backgroundImage: {
        mask: `linear-gradient(270deg, ${hex2rgba('#363636', 0.1)} 0%, ${hex2rgba('#404040', 0.26)} 100%)`,
        primary: 'linear-gradient(90deg, #F792BC 0%, #BA96D3 53.51%, #84C2E6 96.02%)',
        mint: 'linear-gradient(129.97deg, #F16297 10.56%, rgba(240, 139, 178, 0.03) 78.81%)',
        borrow: 'linear-gradient(157.15deg, rgba(61, 148, 206, 0.378) 8.36%, rgba(29, 162, 180, 0) 85.09%)',
        leverage: 'linear-gradient(157.15deg, rgba(217, 130, 236, 0.6) 8.36%, rgba(239, 231, 239, 0.6) 85.09%)',
        stake: 'linear-gradient(143.15deg, #F16297 11.32%, rgba(240, 139, 178, 0.03) 80.1%)',
        stakeasset: 'linear-gradient(143.15deg, #C2DAFF 11.32%, rgba(186, 210, 255, 0) 80.1%)'
      }
    },
    screens: {
      xxlmax: {
        max: '1460px'
      },
      xxlmin: {
        min: '1280px'
      },
      xlmax: {
        max: '1280px'
      },
      lgmax: {
        max: '1024px'
      },
      lgmin: {
        min: '1025px'
      },
      mdmax: {
        max: '768px'
      },
      smmax: {
        max: '375px'
      }
    }
  },
}
