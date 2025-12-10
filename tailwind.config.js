/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jockey Plaza Brand Colors
        jockey: {
          // Principal - Carmesí/Magenta intenso
          primary: '#d10947',        // Color principal de marca
          primaryDark: '#b0073b',    // Hover/active state
          primaryLight: '#e83a6a',   // Highlights

          // Neutros
          dark: '#1a1a1a',           // Negro profundo
          gray: '#4a4a4a',           // Gris oscuro
          grayMedium: '#6b7280',     // Gris neutro
          grayLight: '#9ca3af',      // Gris claro
          lightGray: '#f3f4f6',      // Fondos claros
          white: '#ffffff',          // Blanco

          // Complementarios
          teal: '#0d9488',           // Teal complementario (métricas positivas)
          tealLight: '#14b8a6',      // Teal claro
          tealDark: '#0f766e',       // Teal oscuro
        },
        // Semantic colors
        success: '#0d9488',          // Teal para éxito
        warning: '#f59e0b',          // Amber para advertencia
        error: '#d10947',            // Carmesí para error
        info: '#6b7280',             // Gris para info
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes Jockey Plaza
        'gradient-jockey': 'linear-gradient(135deg, #d10947 0%, #b0073b 100%)',
        'gradient-jockey-dark': 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
        'gradient-jockey-light': 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
        'gradient-jockey-teal': 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
        'gradient-jockey-primary-teal': 'linear-gradient(135deg, #d10947 0%, #0d9488 100%)',
      },
      boxShadow: {
        'jockey': '0 20px 50px rgba(209, 9, 71, 0.15)',
        'jockey-lg': '0 30px 60px rgba(209, 9, 71, 0.25)',
        'jockey-dark': '0 15px 40px rgba(26, 26, 26, 0.20)',
        'jockey-teal': '0 15px 40px rgba(13, 148, 136, 0.15)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
