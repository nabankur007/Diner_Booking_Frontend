/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                coral: {
                    50: "#FFF3F2",
                    100: "#FFE5E3",
                    600: "#FF7F6E",
                    700: "#F56555",
                },
                sage: {
                    50: "#F5FAF8",
                    100: "#E8F4F0",
                    600: "#87BCA8",
                    700: "#6BA592",
                },
                navy: {
                    800: "#2D3E50",
                    900: "#1A2733",
                },
            },
        },
    },
    plugins: [],
};
