import { test } from '../../framework/fixtures';
import { parfumFiltersData } from '../../data-storage';
import { Tabs } from '../../framework/pages/main/components';


for (const data of Object.entries(parfumFiltersData)) {
  test(`Should filter by '${data[0].split(/(?=[A-Z])/).join(' ')}' params`, async ({ mainPage, parfumPage }) => {
    await mainPage.goTo('/');
    await mainPage.headerTabs.open(Tabs.Parfum);

    for (const { filter, option } of data[1]) {
      await parfumPage.filterByCategory(filter, option);
    }
  });
}
