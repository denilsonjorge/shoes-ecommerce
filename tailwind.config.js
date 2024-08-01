/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-banner":"url('src/components/Banner/assets/thumbnail.png')"
      }
    },
  },
  plugins: [],
}

