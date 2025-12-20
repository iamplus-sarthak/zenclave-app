/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
                display: ['Bricolage Grotesque', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#0A2540',
                    light: '#1a3a5a',
                },
                accent: {
                    DEFAULT: '#00D4AA',
                    dark: '#00b890',
                },
            },
        },
    },
    plugins: [],
}
