import { mathOperators, mathOperatorsPriorities } from './math';
import { NumberOrStringType } from './types';

import { isNumber, isScalarOperator } from './helper';

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

    });

    return result.pop();
}

export const rpnChain = (stack: Array<string>): NumberOrStringType => {

    const outputArr: NumberOrStringType = [];
    const operationsArr: NumberOrStringType = [];

    const bracketsCounter = 0;

    for (let i = 0; i < stack.length; i++) {

        if (isNumber(stack[i])) {
            outputArr.push(Number(stack[i]));
        }

        else if (isScalarOperator(stack[i])) {

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
    }

    while (operationsArr.length > 0) {
        outputArr.push(operationsArr.pop());
    }

    return outputArr;
}
