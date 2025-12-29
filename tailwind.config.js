/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // VNatural Brand Colors from Logo
        'vn-forest': '#006B3F',
        'vn-forest-dark': '#005030',
        'vn-forest-darker': '#004d2e',
        'vn-lime': '#7ED321',
        'vn-lime-light': '#8BC34A',
        'vn-orange': '#FF6B35',
        'vn-orange-light': '#FF7043',
      },
      backgroundImage: {
        'gradient-vn-primary': 'linear-gradient(135deg, #006B3F 0%, #7ED321 100%)',
        'gradient-vn-accent': 'linear-gradient(135deg, #FF6B35 0%, #FF7043 100%)',
        'gradient-vn-hero': 'linear-gradient(135deg, #004d2e 0%, #006B3F 50%, #7ED321 100%)',
      },
    },
  },
  plugins: [],
};
