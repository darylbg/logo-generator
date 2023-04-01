import { Shapes } from './shapes.js';
//const Shapes = require("./shapes");

describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return a triangle svg', () =>{
            const expectedSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                    <polygon points="150,20 70,180 230,180" fill="black"/>
                    <text x="150" y="130" font-size="40" text-anchor="middle" fill="white">ABC</text>
                </svg>`;
            expect(Shapes.Triangle('black', 'white', 'ABC')).toBe(expectedSvg);

        });
    });
});


