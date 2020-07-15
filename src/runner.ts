import { parser } from './parser';
import { calculate, rpnChain } from './reverse-polish-notation';
import { validate, rpmValidate } from './validator';
import { calculateType } from './calculate-type'

export const runner = (line: string, inputType: number): number | string => {
    const stack = parser(line);

    const valid = inputType == calculateType.BASE ? validate(stack) : rpmValidate(stack);

    if (!valid[0]) {
        return valid[1];
    }

    if (inputType === calculateType.REVERT_POLISH_NOTATION) {
        return calculate(stack);
    }

    const rpn = rpnChain(stack);

    return calculate(rpn);
}