export type binType = (a: number, b: number) => number;

export const add: binType = (a, b) => a + b;
export const sub: binType = (a, b) => a - b;
export const mul: binType = (a, b) => a * b;
export const div: binType = (a, b) => a / b;

export const scalarOperators: Array<string> = ["+", "-", "*", "/"];

export const mathOperators: { [key: string]: binType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": sub,
};

export const mathOperatorsPriorities: { [key: string]: number } = {
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
};
