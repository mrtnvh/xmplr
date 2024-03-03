import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import tap from 'tap';

describe('add and multiply', () => {
	it('Should call add and multiply functions', async () => {
		// Arrange
		const addMocked = mock.fn();
		const multiplyMocked = mock.fn();

		const { addAndMultiply } = await tap.mockImport<typeof import('./addAndMultiply.js')>('./addAndMultiply.js', {
			'../add/add.js': {
				add: addMocked,
			},
			'../multiply/multiply.js': {
				multiply: multiplyMocked,
			},
		});

		// Act
		addAndMultiply(1, 2);

		// Assert
		assert.deepEqual(addMocked.mock.calls[0].arguments, [1, 2]);
		assert.deepEqual(multiplyMocked.mock.calls[0].arguments, [undefined, 2]);
	});
});
