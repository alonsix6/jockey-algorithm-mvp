/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // UCSP Brand Colors - Based on logo #002453 and #4d102c
        ucsp: {
          // Azules (basados en #002453)
          darkBlue: '#002453',     // Azul oscuro del logo
          blue: '#003B7A',         // Azul principal (más claro)
          lightBlue: '#0056A3',    // Azul claro para interacciones
          skyBlue: '#4A90E2',      // Azul cielo para acentos/tech

          // Burgundy/Vino (basados en #4d102c)
          darkBurgundy: '#4d102c', // Burdeos oscuro del logo
          burgundy: '#6B1B3D',     // Burdeos principal
          wine: '#8B2449',         // Vino para acentos

          // Complementarios
          gold: '#C5A572',         // Dorado académico
          gray: '#54565A',         // Gris corporativo
          lightGray: '#E6E6E6',    // Gris claro
          black: '#000000',        // Negro
          white: '#FFFFFF',        // Blanco
        },
        // Semantic colors
        success: '#0056A3',        // Azul UCSP para éxito
        warning: '#F59E0B',
        error: '#8B2449',          // Vino UCSP
        info: '#54565A',           // Gris UCSP
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes UCSP
        'gradient-ucsp': 'linear-gradient(135deg, #003B7A 0%, #002453 100%)',
        'gradient-ucsp-burgundy': 'linear-gradient(135deg, #6B1B3D 0%, #4d102c 100%)',
        'gradient-ucsp-light': 'linear-gradient(135deg, #FFFFFF 0%, #E6E6E6 100%)',
        'gradient-academic': 'linear-gradient(135deg, #0056A3 0%, #C5A572 100%)',
      },
      boxShadow: {
        'ucsp': '0 20px 50px rgba(0, 59, 122, 0.15)',
        'ucsp-lg': '0 30px 60px rgba(0, 36, 83, 0.25)',
        'ucsp-burgundy': '0 15px 40px rgba(107, 27, 61, 0.20)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
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
