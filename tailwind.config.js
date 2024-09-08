/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBody: 'rgba(19, 19, 25, 1)',
        bgPrimary: 'rgba(39, 41, 45, 1)',
        bgSecondary: 'rgba(25, 25, 32, 1)',
        textPrimary: 'rgba(197, 199, 202, 1)',
        textSecondary: 'rgba(127, 128, 132, 1)',
        textTertiary: 'rgba(107, 108, 112, 1)',
        btnPrimary: 'rgba(74, 150, 255, 1)',
        btnPrimaryDark: 'rgba(29, 124, 255, 1)',
        borderPrimary: 'rgba(53, 55, 59, 1)',
        gradientFrom: 'rgba(150, 150, 150, 1)',
        gradientTo: 'rgba(52, 52, 52, 1)',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderWidth: {
        DEFAULT: '1.5px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      fontSize: {
        sm: ['12px', '14.5px'],
        base: ['14px', '17px'],
        lg: ['16px', '19.5px'],
        xl: ['18px', '22px'],
        subtitle: ['16px', '24px'],
      },
      dropShadow: {
        'dark': [
            '0 6px 6px rgb(255, 255, 255, 0.1)',
            '0 3px 3px rgb(255, 255, 255, 0.06)'
        ],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    },
  },
  plugins: [],
};
