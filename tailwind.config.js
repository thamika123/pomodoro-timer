module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.jsx"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                "12xl": "15rem"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
