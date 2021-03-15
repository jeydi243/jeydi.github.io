module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            newsreader: ['Newsreader', 'Serif'],
            reggae: ["'Reggae One'", 'cursive'],
            roboto: ['Roboto', 'sans-serif'],
        },
        extend: {
            animation: {
                wiggle: 'wiggle 3s linear infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
