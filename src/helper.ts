import { scalarOperators } from './math';

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const isScalarOperator = (v: string): boolean => scalarOperators.includes(v);