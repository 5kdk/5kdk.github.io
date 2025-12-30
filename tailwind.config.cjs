/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Docusaurus의 기본 스타일과 충돌 방지
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'], // Docusaurus 다크모드와 호환
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './blog/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '0px',
        lg: '997px',
      },
    },
  },
  plugins: [],
};
