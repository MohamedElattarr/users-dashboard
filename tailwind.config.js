/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      xs: '320px',
      sm: '375px',
      sml: '500px',
      md: '667px',
      mdl: '768px',
      lg: '660px', 
      lgl: '1024px',
      xl: '1280px',
    },

    extend: {
      colors: {
        pri: '#450A0A',
        sec: '#FF9D13',
        ter: '#ED2B02',
        fourth:'#7b3f45ad',
    },
  },
  plugins: [],
}
}