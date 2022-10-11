module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
        minHeight: {
            '1/2': '50%',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}