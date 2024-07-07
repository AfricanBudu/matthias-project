/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Extralight_Grotesk: 'Extralight Grotesk',
        Light_Grotesk: 'Light Grotesk',
        Regular_Grotesk: 'Regular Grotesk',
        Medium_Grotesk: 'Medium Grotesk',
        Semibold_Grotesk: 'Semibold Grotesk',
        Bold_Grotesk: 'Bold Grotesk',
        taviraj: ['Taviraj', 'serif'],
        General_Sans: 'General Sans',
      },
      colors: {
        gradientFrom: '#DB8121',
        gradientVia: '#873804',
        gradientTo: '#6D2000',
        'active': '#C26918',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(90deg, #DB8121 0%, #873804 50%, #6D2000 100%)',
      },
    },
  },
  plugins: [],
}

