import { validate, rpmValidate } from './validator';

describe("Parser correct case", () => {
    it("validate [1 + 2] equals true", () => {
        expect(validate(["1", "+", "2"])).toEqual([true, ""]);
    });

    it("validate reverce polish notation [1 2 +] equals true", () => {
        expect(rpmValidate(["1", "2", "+"])).toEqual([true, ""]);
    });
});

describe("Parser incorrect case", () => {
    it("validate [1++2] equals false", () => {
        expect(validate(["1", "+", "+", "2"])).toEqual([false, "Two consecutive operators!"]);
    });

    it("validate reverce polish notation [1 + 2] equals false", () => {
        expect(rpmValidate(["1", "+", "2"])).toEqual([false, "Revert Polish notation must end with operator!"]);
    });
});