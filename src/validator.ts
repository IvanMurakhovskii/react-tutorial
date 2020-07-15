import { isNumber, isCloseBk, isOpenBk, isScalarOperator, isFunction } from './helper';

export const validate = (line: Array<string>): [boolean, string] => {
    let bkCounter: number = 0;

    if (line === undefined || line === null) {
        return [false, `Empty string!`];
    }

    for (let i = 0; i < line.length; i++) {

        const isBracket = isCloseBk(line[i]) || isOpenBk(line[i]);
        const validNumber = isNumber(line[i]) && !isNumber(line[i - 1]) || isOpenBk(line[i - 1]);
        const prevNumberOrFunction = isNumber(line[i - 1]) || isFunction(line[i - 1]);
        const validOperator = (isScalarOperator(line[i]) || isFunction(line[i])) && prevNumberOrFunction || isCloseBk(line[i - 1]);

        if (validNumber || validOperator) {
            continue;
        }

        if (isOpenBk(line[i])) {
            bkCounter++;
        }

        if (isCloseBk(line[i])) {
            bkCounter--;
        }

        if (isOpenBk(line[i]) && isNumber(line[i - 1])) {
            return [false, `The operator must be before open bracket!`];
        }

        if (bkCounter < 0) {
            return [false, `Wrong sequence of brackets!`];
        }

        if (isBracket) continue;

        if (!isNumber(line[i]) && !isScalarOperator(line[i])) {
            return [false, `Invalid value \"${line[i]}\"!`];
        }


        if (!validNumber && !isScalarOperator(line[i])) {
            return [false, `Two consecutive numbers!`];
        }

        if (!validOperator && (!isNumber(line[i]))) {
            return [false, `Two consecutive operators!`];
        }

        return [false, `Invalid string!`];
    }

    if (bkCounter !== 0) {
        return [false, `Wrong number of brackets!`];
    }

    if (isScalarOperator(line[line.length - 1])) {
        return [false, `Input string must end with number!`];
    }

    return [true, ""];
}

export const rpmValidate = (line: Array<string>): [boolean, string] => {
    let isNumb: boolean = false;
    let isBinOperator: boolean = false;

    for (let i = 0; i < line.length; i++) {
        if (isNumber(line[i])) {
            continue;
        }

        if (isScalarOperator(line[i])) {
            continue;
        }

        return [false, `Invalid value \"${line[i]}\"!`];
    }

    if (!isScalarOperator(line[line.length - 1])) {
        return [false, `Revert Polish notation must end with operator!`];
    }

    return [true, ""];
}   