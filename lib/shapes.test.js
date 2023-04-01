import Shapes from './lib/shapes.js';

describe('Shapes', () => {
    describe('Triangle', () => {
        it('Should return a triangle svg', () =>{
            const expectedSvg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="white" />
                    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
            expect(Shapes.Triangle('white', 'black', 'ABC')).toBe(expectedSvg);

        });
    });
});


