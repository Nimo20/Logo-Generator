const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const writeToFile = require('./lib/test.js');
const fs = require('fs')
//user prompts
function init() {
    inquirer
        .prompt([
            {
                name: 'textChoice',
                message: 'Enter text for logo (can be up to three letters'
            },
            {
                name: 'fontColor',
                message: 'choose a font color'
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'choose a shape',
                choices: ['circle', 'square', 'triangle']
            },
            {
                type: 'list',
                name: 'shapeColor',
                message: 'Choose a shape color',
                choices: ['green', 'blue', 'red', 'yellow', 'purple']
            }
        ])

        //create shape based on user input
        .then(answers => {
            const { textChoice, fontColor, shapeType, shapeColor } = answers;

            let shape;
            if (shapeType === 'circle') {
                shape = new Circle();
                shape.setColor(shapeColor);
            } else if (shapeType === 'square') {
                shape = new Square();
                shape.setColor(shapeColor);
            } else if (shapeType === 'triangle') {
                shape = new Triangle();
                shape.setColor(shapeColor);
                console.log(shape);
            }
            //generate svg markup
            let svgMarkup = ""
            if (answers.shapeType === "triangle") {
                svgMarkup = `<svg width="200" height="200">
                    ${shape.render()}
                    <text fill="${fontColor}" font-size="30" x="29" y="75" >${textChoice}</text>
                    </svg>`
            } else {
                svgMarkup = `<svg width="200" height="200">
                        ${shape.render()}
                        <text fill="${fontColor}" font-size="45" x="90" y="110" >${textChoice}</text>
                        </svg>`
            }


            //write svg data to file
            const fileName = 'logo.svg';
            fs.writeFileSync(fileName, svgMarkup);

            console.log('SVG file created!')

        });
}

// Function call to initialize app
init();