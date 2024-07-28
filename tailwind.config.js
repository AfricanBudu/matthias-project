/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs: "300px",
      ss: "400px",
      sm: "640px",
      md: "768px",
      lg: "1114px",
      xl: "1280px",
      ["2xl"]: "1530px",
      miniPhone: {'max': '350px'},
      phone: {'max': '639px'},
      tab: {'max': '1113px'},
    },
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
        'radialGradient': 'radial-gradient( rgba(219,129,33,0.95) 100%, rgba(109,33,0,0.95) 100%)',
      },
    },
  },
  plugins: [],
}

