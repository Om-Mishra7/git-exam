const assert = require('assert');
const { add, subtract } = require('../math');

describe('Math Functions', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            assert.strictEqual(add(1, 2), 3);
        });
    });

    describe('add with non-numeric inputs', () => {
        it('should return NaN when inputs are not numbers', () => {
            assert(isNaN(add('a', 'b')));
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            assert.strictEqual(subtract(5, 3), 2);
        });
    });
});