const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPowers');

const num1 = 3;
const num1String = "3";

const num2 = 9;
const num3 = 27;
describe('myPowers', function() {
    describe('myPower.toSqre', function() {
        it('myPower.toSqre(' + num1 + ') taking a number argument should return the value Cubed, in this case output should be 27', function() {
            let result = myPowers.toSqre(num1);
            assert.equal(result, num2);
        });

        it('myPower.toSqre("' + num1String + '") taking a string argument should return the value Cubed, in this case output should be 27', function() {
            let result = myPowers.toSqre(num1String);
            assert.equal(result, num2);
        });

        it('myPower.toSqre should return type number', function() {
            let result = myPowers.toSqre(num1);
            assert.typeOf(result, 'number');
        });
    });

});
describe('myPowers', function() {
    describe('myPower.toCbe', function() {
        it('myPower.toCbe(' + num1 + ') taking a number argument should return the value Cubed, in this case output should be 27', function() {
            let result = myPowers.toCbe(num1);
            assert.equal(result, num3);
        });

        it('myPower.toCbe("' + num1String + '") taking a string argument should return the value Cubed, in this case output should be 27', function() {
            let result = myPowers.toCbe(num1String);
            assert.equal(result, num3);
        });

        it('myPower.toCbe should return type number', function() {
            let result = myPowers.toCbe(num1);
            assert.typeOf(result, 'number');
        });
    });

});