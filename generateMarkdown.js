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
module.exports = generateMarkdown;
