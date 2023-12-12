// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if else or switch
  switch (license) {
    case 'ISC':
      // code block
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'MIT':
      // code block
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Apache 2.0':
      // code block
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    default:
      // code block
      console.log('No license matched');
      return ''
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'ISC') {
    return '[ISC License](https://opensource.org/license/isc-license-txt/)'
  } else if (license === 'MIT') {
    return '[MIT License](https://opensource.org/license/mit/)'
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0)'
  } else {
    console.log('No license matched');
    return '';
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#quesions)

## Installation  
${data.install}

## Usage

## License

## Contributing

## Tests

## Questions

`;
}

// function example1(){
//   console.log("something");
//   return 1+1;
// }

// function example2(){
//  let x = example1()
//  return x + 3
// }

// function example3(){
//   let x = example1()
// }
// const obj = {
//   eg1: "example 1",
//   eg2: "example 2"
// }
// array[1]
// obj.eg1 //'example 1'
// obj.eg2 //'example 2'

module.exports = generateMarkdown;
