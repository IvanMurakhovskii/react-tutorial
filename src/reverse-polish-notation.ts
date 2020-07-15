import { mathOperators, mathOperatorsPriorities, funcOperators } from './math';
import { NumberOrStringType } from './types';

import { isNumber, isScalarOperator, isCloseBk, isOpenBk, isFunction } from './helper';

export const calculate = (rpnChain: NumberOrStringType): number => {

    const result: Array<number> = [];

    rpnChain.forEach((item) => {

        if (isNumber(item.toString())) {
            result.push(Number(item));
        }

        if (isScalarOperator(item.toString())) {
            const b = result.pop();
            const a = result.pop();
            const res = mathOperators[item.toString()](a, b);
            result.push(res);
        }

        if (isFunction(item.toString())) {
            const res = funcOperators[item.toString()](result.pop());
            result.push(res);
        }

    });

    return result.pop();
}

export const rpnChain = (stack: Array<string>): NumberOrStringType => {
    const outputArr: NumberOrStringType = [];
    const operationsArr: NumberOrStringType = [];

    for (let i = 0; i < stack.length; i++) {

        if (isNumber(stack[i])) {
            outputArr.push(Number(stack[i]));
        }

        if (isScalarOperator(stack[i]) || isFunction(stack[i])) {

            if (operationsArr.length == 0) {
                operationsArr.push(stack[i]);
            } else {
                const operation = operationsArr.pop();
                const operationPrior = mathOperatorsPriorities[operation];
                const currentOperationPrior = mathOperatorsPriorities[stack[i]];

                if (currentOperationPrior < operationPrior) {
                    outputArr.push(operation);
                    operationsArr.push(stack[i]);
                } else {
                    operationsArr.push(operation);
                    operationsArr.push(stack[i]);
                }
            }
        }

        if (isFunction)

            if (isOpenBk(stack[i])) {
                operationsArr.push(stack[i]);
            }

        if (isCloseBk(stack[i])) {
            let currentOperator = operationsArr.pop();

            while (!isOpenBk(currentOperator.toString())) {
                outputArr.push(currentOperator);
                currentOperator = operationsArr.pop();
            }
        }
    }

    while (operationsArr.length > 0) {
        outputArr.push(operationsArr.pop());
    }

    return outputArr;
}
