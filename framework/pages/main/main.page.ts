import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../../lib';
import { HeaderComponent } from './components';


class MainPage extends BasePage {
  private root: Locator;
  public readonly headerTabs: HeaderComponent;
  protected acceptAll: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('div#app');
    this.headerTabs = new HeaderComponent(page);
  }
}

export { MainPage };
