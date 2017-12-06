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
<<<<<<< HEAD
        "no-var": 0,
        "no-alert": 0,
        "no-unused-vars": 0,
        "no-useless-constructor": 0,
        "padded-blocks": 0,
        "indent": 0,
        "import/no-extraneous-dependencies": 0,
        "formatting/newline-object-in-array": 0,
        "formatting/space-after-class-name": 0,
        "prefer-destructuring": 0,
        "prefer-arrow-callback": 0,
        "space-before-function-paren": 0,
        "class-methods-use-this": 0,
        "no-use-before-define": 0,
        "prefer-template": 0,
        "func-names": 0,
        "arrow-parens": 0,
        "arrow-body-style": 0,
=======
        "padded-blocks": 0,
        "indent": ["error", 4],
        "import/no-extraneous-dependencies": 0,
        "formatting/newline-object-in-array": 2,
        "formatting/space-after-class-name": 2,
        "space-before-function-paren": 0,
        "quote-props": 0,
        "no-unused-vars": 0,
>>>>>>> cabc11fef112e5caf377cbed453763eee983062d
        "comma-dangle": 0,
        "eol-last": 0
    }
};