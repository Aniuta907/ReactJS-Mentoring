module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:  [
      "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:jest/recommended", "prettier"
    ],
    plugins: ["@typescript-eslint/eslint-plugin"],
    parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
    },
    rules:  {
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": 0
    },
    settings:  {
      react:  {
        version: 'detect',
      },
    },
};