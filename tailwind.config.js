/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // agar semua file di src terbaca
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E11D48',     // merah utama
          redSoft: '#F43F5E', // aksen merah lembut
          black: '#0B0B0C',   // hitam dasar
          grayDark: '#1F1F22',
          gray: '#2A2A2E',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
