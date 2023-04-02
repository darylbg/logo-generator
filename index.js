const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js')

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
      answeresSvg = Shapes.Triangle(shapeColor, textColor, text);
    } else if (shape == 'Circle') {
      answeresSvg = Shapes.Circle(shapeColor, textColor, text);
    } else if (shape == 'Square') {
      answeresSvg = Shapes.Square(shapeColor, textColor, text);
    }
    fs.writeFile('logo.svg', answeresSvg, (error) => {
      error ? console.log(error) : console.log('Generated logo.svg!')
    })
  })
  .catch((error) => {
    console.log(error);
  });