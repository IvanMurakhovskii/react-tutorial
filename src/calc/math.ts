export type binType = (a: number, b: number) => number;
export type funcType = (a: number) => number;

export const add: binType = (a, b) => a + b;
export const sub: binType = (a, b) => a - b;
export const mul: binType = (a, b) => a * b;
export const div: binType = (a, b) => a / b;
export const pow: binType = (a, b) => a ** b;

export const factorial: funcType = (a) => {
    if (a == 0) return 1;
    return a * factorial(a - 1);
}

export const sin: funcType = (a) => Number.parseFloat(Math.sin(a * Math.PI / 180).toFixed(2));
export const cos: funcType = (a) => Number.parseFloat(Math.cos(a * Math.PI / 180).toFixed(2));
export const tan: funcType = (a) => Number.parseFloat(Math.tan(a * Math.PI / 180).toFixed(2));




export const scalarOperators: Array<string> = ["+", "-", "*", "/", "^"];
export const funcList: Array<string> = ["!", "sin", "cos", "tan"];

export const funcTrigon: Array<string> = ["sin", "cos", "tan"];


export const mathOperators: { [key: string]: binType } = {
    "*": mul,
    "/": div,
    "+": add,
    "-": sub,
    "^": pow,
};

export const funcOperators: { [key: string]: funcType } = {
    "!": factorial,
    "sin": sin,
    "cos": cos,
    "tan": tan
}

export const mathOperatorsPriorities: { [key: string]: number } = {
    "!": 3,
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
};
