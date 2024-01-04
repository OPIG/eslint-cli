const commander = require('commander');
const chalk = require('chalk');
const packageJson = require('./package.json');

module.exports = async function(){
  const program = new commander.Command(packageJson.name).version(packageJson.version, '-v --version');

  program.command('eslint')
  .description('eslint config')
  .action(() => {
    require('./eslint')();
  });

  program.on('--help', () => {
    console.log(11111);
  });

  program.commands.forEach((c) => c.on('--help', () => console.log(2222)));

  program.parse(process.argv);
};