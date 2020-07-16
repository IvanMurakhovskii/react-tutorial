import { scalarOperators, funcList, funcTrigon } from './math';

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isOpenBk = (v: string): boolean => v === "(";

export const isCloseBk = (v: string): boolean => v === ")";

export const isScalarOperator = (v: string): boolean => scalarOperators.includes(v);

export const isFunction = (v: string): boolean => funcList.includes(v);

export const isFactorial = (v: string): boolean => v === "!";

export const isThrigonFunction = (v: string): boolean => funcTrigon.includes(v);






