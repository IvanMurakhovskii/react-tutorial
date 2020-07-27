import { add, mul, sub, div, factorial, pow, sin, cos, tan } from './math';

describe("Parser correct case", () => {
    it("add 1 + 2 equals 3", () => {
        expect(add(1, 2)).toBe(3);
    });

    it("multiply 3 * 2 to equals 6", () => {
        expect(mul(3, 2)).toBe(6);
    });

    it("divide 6 / 2 to equals 3", () => {
        expect(div(6, 2)).toBe(3);
    });

    it("subtract 2 - 1 to equals 1", () => {
        expect(sub(2, 1)).toBe(1);
    });

    it("factorual 5 equals 120", () => {
        expect(factorial(5)).toBe(120);
    });

    it("factorual 2 pow 3 equals 8", () => {
        expect(pow(2, 3)).toBe(8);
    });

    it("sin(30) equals 0.5", () => {
        expect(sin(30)).toBe(0.5);
    });

    it("cos(12) equals 0.84", () => {
        expect(cos(12)).toBe(0.98);
    });

    it("tan(30) equals 0.84", () => {
        expect(tan(30)).toBe(0.58);
    });
});
