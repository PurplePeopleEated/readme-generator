const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown');

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
  {
    type: 'list',
    name: 'license',
    message: 'Choose your license!',
    choices: ['ISC', 'MIT', 'Apache2.0']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'And your email address?'
  }
]).then((userData) => {
  const newMarkdown = generateMarkdown.js(userData);
});