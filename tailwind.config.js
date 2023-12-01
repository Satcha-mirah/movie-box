/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainRed: "#BE123C",
                movieGray: "#9CA3AF",
                softRed: "rgba(190, 18, 60, 0.20)",
                favourite: "rgba(243, 244, 246, 0.50)",
            },

            fontFamily: {
                page2: "Poppins",
                main: "DM Sans",
            },

            screens: {
                "-950": { max: "950px" },
                "-720": { max: "720px" },
                "-500": { max: "500px" },
                "-400": { max: "400px" },
            },
        },
    },
    plugins: [],
};
