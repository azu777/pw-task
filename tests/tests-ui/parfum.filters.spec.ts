import { test } from '../../framework/fixtures';
import { parfumFiltersData } from '../../data-storage';
import { Tabs } from '../../framework/pages/main/components';

test('Filters', async ({ mainPage, parfumPage }) => {
  await mainPage.goTo('/');
  await mainPage.headerTabs.open(Tabs.Parfum);
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
