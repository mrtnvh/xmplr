import { PlaywrightTestConfig } from '@playwright/test';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const getDirname = () => dirname(fileURLToPath(import.meta.url));

export const port = 3001;
export const fixtureFolder = resolve(getDirname(), '__fixture__');
export const getUrl = (path = '/') => `http://localhost:${port}${path}`;

const config: PlaywrightTestConfig = {
	globalSetup: './__config__/globalSetup.ts',
	webServer: {
		command: `ws -z -d ${fixtureFolder} -p ${port}`,
		port,
		reuseExistingServer: !process.env.CI,
	},
};

export default config;
