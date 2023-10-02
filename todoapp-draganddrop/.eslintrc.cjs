module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2021: true 
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist',
   '.eslintrc.cjs'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
   ecmaVersion: 'latest',
   sourceType: 'module',
  //  project: [
  //   './tsconfig.json', 
  //   "./tsconfig.node.json"
  // ],
 },
  plugins: [
    'react-refresh', 
    'prettier',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
      'import/no-extraneous-dependencies': [
        "error", 
        {"devDependencies": true}
    ],
    'prettier/prettier': [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
    'react/function-component-definition': [
       2,
      {
        "namedComponents": ["arrow-function", "function-declaration"],
        "unnamedComponents": "arrow-function",
      },
    ],
    'react/react-in-jsx-scope': 0
  },
}
