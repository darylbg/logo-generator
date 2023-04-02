// Imports Shapes class
const Shapes = require("./shapes");
// Describes a test for each shape type
// Sets an expected svg output and compares it to an output with values that are passed in
describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return a triangle svg', () =>{
            const expectedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="150,20 70,180 230,180" fill="black"/>
<text x="150" y="130" font-size="40" text-anchor="middle" fill="white">CIR</text>
</svg>`;
            const actualSvg = Shapes.Triangle('black', 'white', 'CIR');
            console.log(expectedSvg);
            expect(actualSvg).toBe(expectedSvg);
        });
    });
    describe('Circle', () => {
        it('Should return a circle svg', () =>{
            const expectedSvg = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="115" font-size="60" text-anchor="middle" fill="green">TRI</text>
</svg>`;
            const actualSvg = Shapes.Circle('red', 'green', 'TRI');
            console.log(expectedSvg);
            expect(actualSvg).toBe(expectedSvg);
        });
    });
    describe('Square', () => {
        it('Should return a square svg', () =>{
            const expectedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x="70" y="20" width="160" height="160" fill="#800020"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="#FFE6EA">SQU</text>
</svg>`;
            const actualSvg = Shapes.Square('#800020', '#FFE6EA', 'SQU');
            console.log(expectedSvg);
            expect(actualSvg).toBe(expectedSvg);
        });
    });
});


