/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 30px 50px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [],
};
