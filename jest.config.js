const sharedConfig = {
	preset: 'ts-jest/presets/default-esm',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.test.json',
			},
		],
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
};

export default {
	projects: [
		{
			displayName: 'unit',
			roots: ['src', 'tests/unit'],
			// collectCoverage: true,
			// collectCoverageFrom: ['src/**/*.ts', '!dist/', '!tests/', '!src/**/*.{spec,test}.ts', '!src/**/index.ts'],
			...sharedConfig,
		},
		{
			displayName: 'integration',
			roots: ['src', 'tests/integration'],
			...sharedConfig,
		},
	],
};
