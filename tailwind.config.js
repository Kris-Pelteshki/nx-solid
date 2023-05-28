/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/solid/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ea580c',
        secondary: '#fed7aa',
        tertiary: '#c084fc',
      },
    },
    plugins: [],
  }
};

