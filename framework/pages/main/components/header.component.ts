import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../../../lib';


enum Tabs {
  Videos = 'VIDEOS',
  Marken = 'MARKEN',
  Parfum = 'PARFUM',
}

class HeaderComponent extends BasePage {
  private root: Locator;
  private search: Locator;
  private account: Locator;
  private wishList: Locator;
  private miniCart: Locator;
  private menuTabs: Locator;

  constructor(page: Page) {
    super(page);

    this.root = page.locator('[data-testid="header-component"]');
    this.search = this.root.locator('[data-testid="typeAhead-input"]');
    this.account = this.root.locator('[data-testid="header-component-item--account"]');
    this.wishList = this.root.locator('[data-testid="header-component-item--wishlist"]');
    this.miniCart = this.root.locator('[data-testid="header-component-item--mini-cart"]');
    this.menuTabs = this.root.locator('[data-testid="header-component-item--navigation"] li');
  }

  async open(tab: Tabs) {
    await this.menuTabs.filter({ hasText : tab }).click();
    await this.page.reload();
  }
}

export { HeaderComponent, Tabs };
