module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'splash-mobile': "url('/background-mobile.svg')",
        'splash-desk': "url('/background-desk.svg')",
      },
      colors: {
        'pooch-blue': '#f3f8ff',
        'pooch-blue-2': '#077997'
      },
      fontFamily: {
        'Museo-Sans-Rounded-300': ['MuseoSansRounded-300'],
        'Museo-Sans-Rounded-500': ['MuseoSansRounded-500'],
        'Museo-Sans-Rounded-700': ['MuseoSansRounded-700'],
        'Museo-Sans-Rounded-900': ['MuseoSansRounded-900'],
      },
    },
  },
  plugins: [],
}