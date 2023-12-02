const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'install',
    message: 'The installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What about usage information?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How about instructions on testing?'
  },
])