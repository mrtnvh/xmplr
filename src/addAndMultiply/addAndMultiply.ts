import { add } from '../add/add.js';
import { multiply } from '../multiply/multiply.js';

export const addAndMultiply = (first: number, second: number) => multiply(add(first, second), second);
