import { validate, rpmValidate } from './validator';

describe("Parser correct case", () => {
    it("validate [1 + 2] equals true", () => {
        expect(validate(["1", "+", "2"])).toEqual([true, ""]);
    });

    it("validate (1 + 2)*3 equals true", () => {
        expect(validate(["(", "1", "+", "2", ")", "*", "3"])).toEqual([true, ""]);
    });

    it("validate reverce polish notation [1 2 +] equals true", () => {
        expect(rpmValidate(["1", "2", "+"])).toEqual([true, ""]);
    });

});

describe("Parser incorrect case", () => {
    it("validate [1++2] equals false", () => {
        expect(validate(["1", "+", "+", "2"])).toEqual([false, "Two consecutive operators!"]);
    });

    it("validate )1 + 2)*3 equals true", () => {
        expect(validate([")", "1", "+", "2", ")", "*", "3"])).toEqual([false, "Wrong sequence of brackets!"]);
    });

    it("validate 2*2(1 + 2) equals true", () => {
        expect(validate(["2", "*", "2", "(", "1", "+", "2", ")"])).toEqual([false, "The operator must be before open bracket!"]);
    });

    it("validate reverce polish notation [1 + 2] equals false", () => {
        expect(rpmValidate(["1", "+", "2"])).toEqual([false, "Revert Polish notation must end with operator!"]);
    });
});