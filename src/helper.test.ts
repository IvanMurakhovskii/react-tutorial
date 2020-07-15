import { isNumber, isScalarOperator } from './helper';

describe("Parser correct case", () => {
    it(" \"1\" is number equals true", () => {
        expect(isNumber('1')).toBe(true);
    });

    it(" \"+\" is scalar operator equals true", () => {
        expect(isScalarOperator('+')).toBe(true);
    });
});

describe("Parser incorrect case", () => {
    it(" \"=\" is not a number", () => {
        expect(isNumber('=')).toBe(false);
    });

    it(" \"=\" is not a scalar operator", () => {
        expect(isScalarOperator('=')).toBe(false);
    });
});