// const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            newsreader: ['Newsreader', 'Serif'],
            reggae: ["'Reggae One'", 'cursive'],
            roboto: ['Roboto', 'sans-serif'],
            tinos: ['Tinos', 'Serif'],
            fira: ["'Fira Sans'", 'sans-serif'],
            abril: ["'Abril Fatface'", 'cursive'],
            playfair: ["'Playfair Display'", 'serif'],
            k2d: ['K2D', 'sans-serif'],
        },
        extend: {
            animation: {
                wiggle: 'wiggle 3s linear infinite',
                blob: 'blob 7s infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px,0px) scale(1)' },
                    '30%': { transform: 'translate(30px,-10px) scale(1.1)' },
                    '60%': { transform: 'translate(60px,-50px) scale(1.9)' },
                    '90%': { transform: 'translate(10px,-60px) scale(0.5)' },
                    '100%': { transform: 'translate(0px,0px) scale(1)' },
                },
            },
            backgroundImage: (theme) => ({
                'logo-epa': "url('../img/epa/logoepa-v2.png')",
            }),
            colors: {
                teal: {
                    100: '#CCFBF1',
                    200: '#99F6E4',
                    300: '#5EEAD4',
                    400: '#2DD4BF',
                    500: '#14B8A6',
                    600: '#0D9488',
                    700: '#0F766E',
                    800: '#115E59',
                    900: '#134E4A',
                },
            },
            opacity: {
                05: '0.05',
                15: '0.15',
                35: '0.35',
                65: '0.65',
            },
            ringOpacity: {
                05: '0.05',
                15: '0.15',
                35: '0.35',
                65: '0.65',
            },
            zIndex: {
                '-10': '-10',
            },
        },
    },
    variants: {
        extend: {
            animation: ['hover', 'focus'],
            skew: ['active', 'group-hover', 'hover'],
            transform: ['hover', 'focus'],
            translate: ['active', 'group-hover', 'hover'],
            borderStyle: ['hover', 'focus'],
            gradientColorStops: ['active', 'group-hover', 'hover'],
            borderRadius: ['hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
