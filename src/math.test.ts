import { add, mul, sub, div } from './math';

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
});
