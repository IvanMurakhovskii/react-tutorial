import { runner } from './runner';


describe("Parser correct case", () => {
    it("run [1 + 2] with base type string equals 3", () => {
        expect(runner("1 + 2", 1)).toBe(3);
    });

    it("run [2 * (2 + 3)] with base type string equals 3", () => {
        expect(runner("2*(2+3)", 1)).toBe(10);
    });

    it("run [2 * 2 + 3] with base type string equals 3", () => {
        expect(runner("2*2+3", 1)).toBe(7);
    });

    it("run [1 2 +] with revert Polish notation string equals 3", () => {
        expect(runner("1 2 +", 2)).toBe(3);
    });
});
