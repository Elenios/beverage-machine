module.exports = {
  "extends": "airbnb",
  "rules": {
    "linebreak-style": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
        ],
      },
    ],
    'react/destructuring-assignment': ['error', {
      functional: 'always',
      class: 'never',
    }],
    "no-param-reassign": [2, { "props": false }],
  },
  "env": {
    "browser": true,
  },
  "parser": 'babel-eslint',
};