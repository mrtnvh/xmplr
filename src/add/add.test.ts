import assert from 'assert/strict';
import { it, describe } from 'node:test';
import { add } from './add.js';

describe('add', () => {
	it('Should add two numbers together', () => {
		const result = add(1, 2);
		assert.equal(result, 3);
	});
});
