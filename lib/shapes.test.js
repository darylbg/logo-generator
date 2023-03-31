const Arethmetic = require('./shapes.js');

describe('Arethmetic', () => {
    describe('sum', () => {
        it('should add two given numbers together', () => {
            const total = 10;
            const arethmetic = new Arethmetic();
            expect(arethmetic.sum(5, 5)).toEqual(total);
        })
    })

    describe('remainder', () => {
        const total = 3;
        const arethmetic = new Arethmetic();
        expect(arethmetic.remainder(11, 8)).toEqual(total);
    })
})

