import { add, divide } from "../src/calc.js";

describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    it('adds negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    it('throws when inputs are not numbers', () => {
        expect(() => add('2', 3)).toThrow('add expects two numbers');
    });
});

describe('divide', () => {
    it('divide positive numbers', () => {
        expect(divide(12, 3)).toBe(4);
    });
    it('throws when inputs are not numbers', () => {
        expect(() => divide('12', 3)).toThrow('Both arguments must be numbers');
    });
    it('throws when inputs are not numbers', () => {
        expect(() => divide()).toThrow('Both arguments must be numbers');
    });
    it('throws when inputs has NaN', () => {
        expect(() => divide(12, NaN)).toThrow('Arguments cannot be NaN');
    });
    it('throws when dividing by 0', () => {
        expect(() => divide(12, 0)).toThrow('Division by zero is not allowed');
    });
});