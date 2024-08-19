/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1256px",
            },
        },
        extend: {
            boxShadow:{
                2: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)",
                1: "-2px 2px 20px -1px rgba(113, 113, 113, 0.20)"
            },
            screens: {
                'mb': '487.98px',
            },
            backgroundImage: {
                linear: "linear-gradient(95deg, #F7F4EF 0%, #EFEAE2 100%)",
                "stock":" linear-gradient(287deg, #B0E9C9 1.99%, #1FB6CF 48.52%, #1975B9 98.92%)",
                'gradient-linear-stroke-bottom': 'linear-gradient(147deg, rgba(12, 104, 244, 0.30) 60.98%, rgba(12, 104, 244, 0.70) 81.93%, rgba(12, 104, 244, 0.30) 99.45%)',
            },
            blur: {
                '30px': '30px',
            },
            fontSize: {
                xs: "0.75rem",
                sm: '0.875rem',
                base: '1rem',
                lg: "1.125rem", 
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                "6xl": "4rem"
            },
            colors: {
                "blue":"rgba(12, 104, 244, 0.30)",
                "secondar":"#F45E0C",
                "primar": "#0C68F4",
                "primary": {
                    "25": "#E4EEFE",
                    "50": "#AECDFB",
                    "75": "#78ABF9",
                    "100": "#428AF6",
                    "200": "#2779F5",
                    "400": "#0951BE",
                    "500": "#063A88",
                    "600": "#052E6D",
                    "700": "#042352",
                    "900": "#021736"
                },
                "secondary" : {
                    "100": "#FDDBC9",
                    "200": "#FAB793",
                    "300": "#F68242",
                    "400": "#F45E0C",
                    "500": "#BE4909",
                    "600": "#883406",
                },
                "black": "#0C0C0C",
                "white": "#FFF",
                "grey": {
                    "50": "#F9F9F9",
                    "100": "#F6F6F6",
                    "200": "#EDEDED",
                    "300": "#CBCBCB",
                    "400": "#B4B4B4",
                    "500": "#9E9E9E",
                    "600": "#717171",
                    "700": "#505050",
                    "800": "#444",
                    "900": "#2D2D2D"
                },
                "status": {
                    "error":"#C91433",
                    "error-light": "#FAE7EB",
                    "success":"#146C43",
                    "success-light": "#D1F7E5"
                }
            },
        },
    }
}