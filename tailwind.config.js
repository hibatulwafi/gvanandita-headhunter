// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    brand: {
                        50: "#fdfaf6",
                        100: "#f7f1e6",
                        200: "#e9dcc1",
                        300: "#dbc79c",
                        400: "#cdb277",
                        500: "#b49359", // warna utama
                        600: "#997b47",
                        700: "#7a6239",
                        800: "#5c4a2b",
                        900: "#3d321c",
                    }
                }
            }
        }
    },
    plugins: [],
}
