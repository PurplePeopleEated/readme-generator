const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

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
    choices: ['ISC', 'MIT', 'Apache 2.0']
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
  console.log(userData);
  const newMarkdown = generateMarkdown(userData);
  console.log(newMarkdown);
  fs.writeFile('./utils/README.md', newMarkdown, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
});