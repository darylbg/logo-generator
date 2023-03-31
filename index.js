import inquirer from "inquirer";
import fs from 'fs';

// Check if the input is a color keyword or a hexadecimal color
const colorValidator = function (input) { 
  // regex code found online
  const colorRegex = /^([a-zA-Z]+|\#[0-9a-fA-F]{6}|\#[0-9a-fA-F]{3})$/;
  if (input.match(colorRegex)) {
    return true;
  } else {
    return 'Please enter a valid color keyword or hexadecimal color';
  }
};

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Input the text for your logo up to 3 charachters',
        validate: function(input) {
          if (input.length > 3) {
            return 'Please enter no more than 3 characters!';
          } else {
            return true;
          }
        }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color or a hexadecimal number for your logo text color',
      validate: colorValidator,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select logo shape.',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color or a hexadecimal number for your logo background color',
      validate: colorValidator,
    }
  ])
  .then((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
    var answeresSvg;
    if (shape == 'Triangle') {
      answeresSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
          <polygon points="150,20 70,180 230,180" fill="${shapeColor}"/>
          <text x="150" y="130" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    } else if (shape == 'Circle') {
      answeresSvg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    } else if (shape == 'Square') {
      answeresSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
          <rect x="70" y="20" width="160" height="160" fill="${shapeColor}"/>
          <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
    fs.writeFile('logo.svg', answeresSvg, (error) => {
      error ? console.log(error) : console.log('Generated logo.svg!')
    })
  })
  .catch((error) => {
    console.log(error);
  });