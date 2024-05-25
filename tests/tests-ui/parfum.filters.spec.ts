import { test } from '../../framework/fixtures/page.fixtures';
import { parfumFiltersData } from '../../data-storage';
import { Tabs } from '../../framework/pages/main/components';

test('Filters', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-testid="typeAhead-input"]').fill('ABCD');
  await page.locator('[data-testid="header-component-item--wishlist"]').click();
  await page.locator('input[placeholder="E-Mail-Adresse*"]').isVisible();
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
