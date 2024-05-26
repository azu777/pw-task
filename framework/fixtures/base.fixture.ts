import { test as base } from '@playwright/test';
import * as path from 'path';


export const test = base.extend({
  storageState: async ({}, use) => {
    const fileName = path.resolve('storage.state.json');

    await use(fileName);
  },
});
