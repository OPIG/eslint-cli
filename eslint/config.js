const path = require('path');
const configPkgName = 'configs';

/**
 */
const configPkgPath = {
  javascript: '',
  'javascript/vue': 'vue',
  'javascript/react': 'react',
  typescript: 'typescript',
  'typescript/vue': 'typescript/vue',
  'typescript/react': 'typescript/react',
};

const needDeps = {
  javascript: ['eslint', '@babel/eslint-parser'],
  typescript: [
    'react-dom',
    'typescript',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
  ],
  react: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  vue: ['eslint-plugin-vue', 'vue-eslint-parser'],
};

const eslintrcConfig = (type) => {
  console.log(configPkgName, configPkgPath[type], '===configPkgName==');
  return {
  extends: path.join( process.cwd(), configPkgName, configPkgPath[type]),
};};

module.exports = {
  eslintrcConfig,
  needDeps,
};