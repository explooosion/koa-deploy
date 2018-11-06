module.exports = {
  parser: "babel-eslint",
  extends: "airbnb-base",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: [
    "formatting"
  ],
  rules: {
    "generator-star-spacing": [0],
    "linebreak-style": [0],
    "consistent-return": [0],
    "global-require": [1],
    "import/prefer-default-export": [0],
    "import/no-unresolved": [0],
    "import/extensions": [0],
    "import/no-extraneous-dependencies": [0],
    "import/first": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/alt-text": [0],
    "arrow-body-style": [0],
    "no-nested-ternary": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "no-use-before-define": [0],
    "no-bitwise": [0],
    "no-console": [0],
    "no-alert": [0],
    "no-empty-function": [0],
    "no-undef": [0],
    "no-unused-vars": [0],
    "no-unneeded-ternary": [0],
    "no-useless-return": 0,
    "no-useless-constructor": [0],
    "no-cond-assign": [0],
    "no-restricted-globals": [0],
    "comma-dangle": [
      "warning",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "object-curly-newline": [0],
    "object-shorthand": [0],
    "function-paren-newline": [0],
    "prefer-destructuring": [0],
    "class-methods-use-this": [0],
    "require-yield": [1]
  },
};
