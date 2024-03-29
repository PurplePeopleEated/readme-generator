// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Display badge depending on license choice
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
  // Display link to license based on user choice
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
function renderLicenseSection(license, username) {
  // Declare the current year
  const currentYear = new Date().getFullYear();
  // Display license based on user choice
  if (license === 'ISC') {
    return `${renderLicenseLink(license)}

    Copyright ${currentYear} ${username}
    
    Permission to use, copy, modify, and/or distribute this software for 
    any purpose with or without fee is hereby granted, provided that the above 
    copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH 
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY 
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM 
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR 
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE 
    OF THIS SOFTWARE.`
  } else if (license === 'MIT') {
    return `${renderLicenseLink(license)}
    
    Copyright ${currentYear} ${username}

    Permission is hereby granted, free of charge, to any person obtaining a copy of 
    this software and associated documentation files (the “Software”), to deal in 
    the Software without restriction, including without limitation the rights to use, 
    copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
    Software, and to permit persons to whom the Software is furnished to do so, subject 
    to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies 
    or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT 
    OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
    DEALINGS IN THE SOFTWARE.`
  } else if (license === 'Apache 2.0') {
    return `Copyright ${currentYear} ${username}
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
      ${renderLicenseLink(license)}
      
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else {
    console.log('No license matched');
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation  
${data.install}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license, data.username)}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
Questions for the dev?

GitHub: [Profile](https://github.com/${data.username})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;

// Tutor examples

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