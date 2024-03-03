import assert from 'assert/strict';
import { it, describe } from 'node:test';
import { multiply } from './multiply.js';

describe('multiply', () => {
	it('Should multiply two numbers together', () => {
		const result = multiply(3, 2);
		assert.equal(result, 6);
	});
});
