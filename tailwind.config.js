module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.jsx"
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                "12xl": "15rem"
            }
        },
        fontFamily: {
            "sans": ["Inter"]
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
