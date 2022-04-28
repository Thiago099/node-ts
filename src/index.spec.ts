import { operate } from './operate';
describe("operate.ts", () => {
    test("sum", () => {
        expect(operate(1, 2, '+')).toBe(3);
    })
    test("subtract", () => {
        expect(operate(1, 2, '-')).toBe(-1);
    })
    test("multiply", () => {
        expect(operate(1, 2, '*')).toBe(2);
    })
    test("divide", () => {
        expect(operate(1, 2, '/')).toBe(0.5);
    })
    test("invalid mode", () => {
        expect(() => { operate(1, 2, '%'); }).toThrow("invalid mode");
    })
})