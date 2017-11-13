module.exports = {
    parser: "babel-eslint",
    extends: "airbnb-base",
    env: {
        es6: true,
        node: true,
        browser: true
    },
    "plugins": [
        "formatting"
    ],
    rules: {
        "linebreak-style": [1, "windows"],
        "semi": 0,
        "no-console": "off",
        "no-empty": "off",
        "padded-blocks": 0,
        "indent": ["error", 4],
        "import/no-extraneous-dependencies": 0,
        "formatting/newline-object-in-array": 2,
        "formatting/space-after-class-name": 2,
        "space-before-function-paren": 0,
        "quote-props": 0,
        "no-unused-vars": 0,
        "comma-dangle": 0,
        "eol-last": 0
    }
};