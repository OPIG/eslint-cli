const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const spawn = require('cross-spawn');

const { askForLanguage, askForFrame } = require('./question');
const { eslintrcConfig, needDeps } = require('./config');

module.exports = async () => {
  const language = await askForLanguage();
  const frame = await askForFrame();

  let type = language;
  if(frame) {
    type += `/${frame}`;
  }
  console.log(language, frame, type, '======');
  console.log(eslintrcConfig(type), '=====x=xxx');
  fs.writeFileSync(path.join(process.cwd(), '.eslintrc.js'),
  `module.exports = ${JSON.stringify(eslintrcConfig(type), null, 2)}\n`
  );
let deps = needDeps.javascript;
if(language === 'typescript') {
  deps = deps.concat(needDeps.typescript);
}
if(frame) {
  deps = deps.concat(needDeps[frame]);
}

  console.log(chalk.green(`使用配置：${type}`));
  console.log(chalk.green(`安装所需依赖：${deps.join(' + ')}`));
spawn.sync('npm', ['install', ...deps, '---save'], { stdio: 'inherit' });
};