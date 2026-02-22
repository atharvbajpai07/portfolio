/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                surface: "rgba(255, 255, 255, 0.03)",
                "surface-hover": "rgba(255, 255, 255, 0.08)",
                primary: "#8b5cf6", // Violet
                secondary: "#3b82f6", // Blue
                accent: "#06b6d4" // Cyan
            },
            fontFamily: {
                sans: ["Figtree", "sans-serif"],
                display: ["Bricolage Grotesque", "sans-serif"],
                mono: ["Google Sans Code", "monospace"],
                hand: ["Gochi Hand", "cursive"],
                pixel: ["Press Start 2P", "cursive"]
            },
        },
    },
    plugins: [],
}
