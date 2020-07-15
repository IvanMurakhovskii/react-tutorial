import { isNumber, isScalarOperator } from './helper';

export const validate = (line: Array<string>): [boolean, string] => {

    let isNumb: boolean = false;
    let isBinOperator: boolean = false;

    if (line === undefined || line === null) {
        return [false, `Empty string!`];
    }

    for (let i = 0; i < line.length; i++) {

        const validNumber = isNumber(line[i]) && !isNumber(line[i - 1]);
        const validOperator = isScalarOperator(line[i]) && isNumber(line[i - 1]);

        if (validNumber || validOperator) {
            continue;
        }

        if (!isNumber(line[i]) && !isScalarOperator(line[i])) {
            return [false, `Invalid value \"${line[i]}\"!`];
        }


        if (!validNumber && !isScalarOperator(line[i])) {
            return [false, `Two consecutive numbers!`];
        }

        if (!validOperator && !isNumber(line[i])) {
            return [false, `Two consecutive operators!`];
        }

        return [false, `Invalid string!`];
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