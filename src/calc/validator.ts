import { isNumber, isCloseBk, isOpenBk, isScalarOperator, isFunction, isFactorial, isThrigonFunction } from './helper';

export const validate = (line: Array<string>): [boolean, string] => {
    let bkCounter: number = 0;

    for (let i = 0; i < line.length; i++) {

        const isBracket = isCloseBk(line[i]) || isOpenBk(line[i]);
        const prevNumberOrFactorial = isNumber(line[i - 1]) || isFactorial(line[i - 1]);

        const validNumber = isNumber(line[i]) && (!isNumber(line[i - 1]) || !isOpenBk(line[i - 1]));
        const validOperator = isScalarOperator(line[i]) && (prevNumberOrFactorial || isCloseBk(line[i - 1]));
        const validTrigonFunc = isThrigonFunction(line[i]) && isScalarOperator(line[i - 1]) || line[i - 1] == undefined;
        const validFactorial = isFactorial(line[i]) && isNumber(line[i - 1]);

        if (isOpenBk(line[i])) {
            bkCounter++;
        }

        if (isCloseBk(line[i])) {
            bkCounter--;
        }

        if (bkCounter < 0) {
            return [false, 'Wrong sequence of brackets!'];
        }

        if (isOpenBk(line[i]) && isNumber(line[i - 1])) {
            return [false, 'Operator must be before open bracket!'];
        }

        if (validNumber || validOperator || validTrigonFunc || validFactorial || isBracket) {
            continue;
        }

        if (!validNumber && isNumber(line[i])) {
            return [false, "Incorrect simbol before number!"];
        }

        if (!validOperator && isScalarOperator(line[i])) {
            return [false, "Incorrect simbol before operator!"];
        }

        if (!validTrigonFunc && isThrigonFunction(line[i])) {
            return [false, "Incorrect simbol before function!"];
        }

        if (!validFactorial && isFactorial(line[i])) {
            return [false, "Number must be before factorial!"];
        }

        return [false, `Invalid value \"${line[i]}\"!`];
    }

    if (bkCounter !== 0) {
        return [false, `Wrong number of brackets!`];
    }

    const lastValue = line[line.length - 1];

    const validLastItem = isNumber(lastValue) || isFactorial(lastValue) || isCloseBk(lastValue);

    if (!validLastItem) {
        return [false, 'Input string must end with number or factorial!'];
    }

    return [true, ""];
}

export const rpmValidate = (line: Array<string>): [boolean, string] => {
    let isNumb: boolean = false;
    let isBinOperator: boolean = false;


    for (let i = 0; i < line.length; i++) {
        if (isNumber(line[i]) || isScalarOperator(line[i]) || isFunction(line[i])) {
            continue;
        }

        return [false, `Invalid value \"${line[i]}\"!`];
    }

    if (isNumber(line[line.length - 1])) {
        return [false, `Revert Polish notation must end with operator!`];
    }

    return [true, ""];
}   