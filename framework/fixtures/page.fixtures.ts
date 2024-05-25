import { MainPage, ParfumPage } from '../pages';
import { test as base } from './base.fixture';


type Pages = {
  mainPage: MainPage;
  parfumPage: ParfumPage;
};

export const test = base.extend<Pages>({
  homePage: ({ page }, use) => {
    const mainPage = new MainPage(page);
    use(mainPage);
  },
  roulettePage: ({ page }, use) => {
    const parfumPage = new ParfumPage(page);
    use(parfumPage);
  },
});
