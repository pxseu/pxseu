module.exports = {
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: ["import", "react"],
  extends: ["airbnb-typescript", "prettier"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/indent": ["error", "tab"],
    "func-names": ["error", "as-needed"],
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "no-restricted-syntax": "off",
    "import/extensions": "off",
  },
  env: {
    es6: true,
    node: true,
  },
};
