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
        },
        extend: {
            animation: {
                wiggle: 'wiggle 3s linear infinite',
            },
            borderStyle: ['hover', 'focus'],
            borderRadius: ['hover', 'focus'],
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            backgroundImage: ['hover', 'focus'],
            gradientColorStops: ['active', 'group-hover'],
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}
