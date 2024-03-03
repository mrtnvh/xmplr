module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.test.json'],
	},
	extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
	ignorePatterns: ['docs/**/*.js', 'dist', '__fixture__'],
	rules: { 'import/prefer-default-export': 'off' },
	overrides: [
		{
			files: 'tests/(unit|integration)/**',
			rules: {
				'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.{test,spec}.ts'] }],
			},
		},
	],
};
