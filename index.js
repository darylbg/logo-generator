const inquirer = require('inquirer');
const fs = require('fs');
// Node package that returns all valid color keywords
const colors = require('color-name');
// Node package to check validity of a hex code 
const hexColorRegex = require('hex-color-regex')
// import shapes class
const Shapes = require('./lib/shapes.js')

// Store color names only in a const
const colorNames = Object.keys(colors);

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Input the text for your logo up to 3 charachters',
        // Validates length of user input
        validate: function(input) {
          if (input.length > 3 || input.length < 1) {
            return 'Please enter 1 - 3 charachters';
          } else {
            return true;
          }
        }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color or a hexadecimal number for your logo text color',
      // Validates that the user input color is a valid color keyword, or a valid hexidecimal code
      validate: function(input) {
        if (colorNames.includes(input) || hexColorRegex().test(input)) {
          return true;
        } else {
          return 'You must enter a valid color keyword or hexadecimal number'
        }
      }
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
      // Validates that the user input color is a valid color keyword, or a valid hexidecimal code
      validate: function(input) {
        if (colorNames.includes(input) || hexColorRegex().test(input)) {
          return true;
        } else {
          return 'You must enter a valid color keyword or hexadecimal number'
        }
      }
    }
  ])
  .then((answers) => {
    // Deconstruct prompts into consts
    const {text, textColor, shape, shapeColor} = answers;
    // Checks shape's type and passes in colors and text
    var answeresSvg;
    if (shape == 'Triangle') {
      answeresSvg = Shapes.Triangle(shapeColor, textColor, text);
    } else if (shape == 'Circle') {
      answeresSvg = Shapes.Circle(shapeColor, textColor, text);
    } else if (shape == 'Square') {
      answeresSvg = Shapes.Square(shapeColor, textColor, text);
    }
    // Writes output to a .svg file if successfull otherwise prints out error
    fs.writeFile('logo.svg', answeresSvg, (error) => {
      error ? console.log(error) : console.log('Generated logo.svg!')
    })
  })
  .catch((error) => {
    console.log(error);
  });