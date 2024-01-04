https://github1s.com/axuebin/axb-lint/blob/HEAD/lib/program.js


https://github1s.com/axuebin/eslint-config-axuebin/blob/HEAD/package.json

关于新版本的husky，比老版本多了一个动作。

老版本：安装 ——> 配置

新版本：安装 ——> 启用 ——> 生成 .husky相关配置
步骤：
npm install husky --save-dev 安装
npx husky install  手动启用husky
npx husky add .husky/pre-commit "npm run lint-staged"  生成husky配置文件（执行完这一步，根目录会有一个 .husky目录）