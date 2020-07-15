import { parser } from './parser';

describe("Parser correct case", () => {
    it("1 + 2 * 3", () => {
        expect(parser("1 + 2 * 3")).toEqual(["1", "+", "2", "*", "3"]);
    });
}); 