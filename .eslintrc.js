module.exports = {
  "parser": "@babel/eslint-parser",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [ 'react' , "simple-import-sort"],
  'rules': {
    "react/require-extension": "off" ,
    'react/forbid-prop-types': 'error',
    'react/no-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'no-unused-vars': 'off',
    "simple-import-sort/imports": "error",
    'react/prop-types': 'off',

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': [ 'error', 'always' ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { 'maximum': 3 }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'no-undef': "off"
  }
};