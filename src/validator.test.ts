import { validate, rpmValidate } from './validator';

describe("Parser correct case", () => {
    it("validate [1 + 2] equals true", () => {
        expect(validate(["1", "+", "2"])).toEqual([true, ""]);
    });

    it("validate [1 + 2!*sin(45)] equals true", () => {
        expect(validate(["1", "+", "2", "!", "*", "sin", "(", "45", ")"])).toEqual([true, ""]);
    });

    it("validate (1 + 2)*3 equals true", () => {
        expect(validate(["(", "1", "+", "2", ")", "*", "3"])).toEqual([true, ""]);
    });

    it("validate sin(30) equals true", () => {
        expect(validate(["sin", "(", "30", ")"])).toEqual([true, ""]);
    });

    it("validate reverce polish notation [1 2 +] equals true", () => {
        expect(rpmValidate(["1", "2", "+"])).toEqual([true, ""]);
    });

    it("validate reverce polish notation cos(30) equals true", () => {
        expect(rpmValidate(["cos", "30"])).toEqual([true, ""]);
    });

});

describe("Parser incorrect case", () => {
    it("validate [1++2] equals false", () => {
        expect(validate(["1", "+", "+", "2"])).toEqual([false, "Incorrect simbol before operator!"]);
    });

    it("validate )1 + 2)*3 equals true", () => {
        expect(validate([")", "1", "+", "2", ")", "*", "3"])).toEqual([false, "Wrong sequence of brackets!"]);
    });

    it("validate 2cos(30) equals false", () => {
        expect(validate(["2", "cos", "(", "30", ")"])).toEqual([false, "Incorrect simbol before function!"]);
    });

    it("validate 2*2(1 + 2) equals true", () => {
        expect(validate(["2", "*", "2", "(", "1", "+", "2", ")"])).toEqual([false, "Operator must be before open bracket!"]);
    });

    it("validate reverce polish notation [1 + 2] equals false", () => {
        expect(rpmValidate(["1", "+", "2"])).toEqual([false, "Revert Polish notation must end with operator!"]);
    });


});