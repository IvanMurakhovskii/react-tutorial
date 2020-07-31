import { parser } from './parser';

describe("Parser correct case", () => {
    it("1 + 2 * 3", () => {
        expect(parser("1 + 2 * 3")).toEqual(["1", "+", "2", "*", "3"]);
    });

    it("1*2(2+3)", () => {
        expect(parser("1*2(2+3)")).toEqual(["1", "*", "2", "(", "2", "+", "3", ")"]);
    });

    it("1*2!", () => {
        expect(parser("1*2!")).toEqual(["1", "*", "2", "!"]);
    });

    it("2cos(30)", () => {
        expect(parser("2cos(30)")).toEqual(["2", "cos", "(", "30", ")"]);
    });
}); 