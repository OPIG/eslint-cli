module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
      // 'eslint:recommended',
      'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
      'no-console': 'error',
      'semi': 'error',
      'quotes': ['error', 'single'],
      'no-unused-vars': 'error',
      'prefer-const': 'error',
    },
    'settings': {
      'react': {
        'version': 'detect'
      }
    }
};
