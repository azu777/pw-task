import { test } from '../../framework/fixtures';
import { Categories, Options } from '../../data-storage';
import { Tabs } from '../../framework/pages/main/components';

test('Filters', async ({ mainPage, parfumPage, page }) => {
  await mainPage.goTo('/');
  await page.waitForTimeout(5000);
  await mainPage.headerTabs.open(Tabs.Parfum);
  await parfumPage.filterParfumByCategory(Categories.Highlights, Options.Sale);
});       

// for (const dataset of Object.entries(parfumFiltersData)) {
//   test(`Should filter parfum by ${dataset[0]
//     .split(/(?=[A-Z])/)
//     .join(' ')}`, async ({ mainPage, parfumPage }) => {
//     await mainPage.launch();
//     await mainPage.headerTabs.openTab(Tabs.Parfum);

//     for (const { filter, option } of dataset[1]) {
//       await parfumPage.filterParfum(filter, option);
//     }
//   });
// }
