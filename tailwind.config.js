/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            colors: {
                'h-black': '#282B2A',
                'h-red': '#E53F49',
                'h-green': '#00BB7E',
                'h-white': '#FDFDFD',
                'h-blue': '#5B98D2',
            }
        },

    },
    plugins: [],
}

