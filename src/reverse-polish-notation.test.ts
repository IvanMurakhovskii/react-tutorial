import { calculate, rpnChain } from './reverse-polish-notation';

describe("Parser correct case", () => {
    it("1 + 2 * 3", () => {
        expect(calculate([1, 2, 3, '*', "+"])).toBe(7);
    });

    it("2 * (2 + 3)", () => {
        expect(calculate([2, 2, 3, '+', "*"])).toBe(10);
    });

    it("1 * 2 + 3", () => {
        expect(calculate([1, 2, "*", 3, "+"])).toBe(5);
    });

    it("1 + 2 * 3", () => {
        expect(rpnChain(["1", "+", "2", "*", "3"])).toEqual([1, 2, 3, "*", "+"]);
    });

    it("1 * 2 + 3", () => {
        expect(rpnChain(["1", "*", "2", "+", "3"])).toEqual([1, 2, "*", 3, "+"]);
    });

    it("2!*3", () => {
        expect(rpnChain(["2", "!", "*", "3"])).toEqual([2, "!", 3, "*"]);
    });
}); 