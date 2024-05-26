import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../../../lib';
import { Options, Categories } from '../../../data-storage';

class ParfumPage extends BasePage {
  private root: Locator;
  private filtersList: Locator;
  private optionsList: Locator;
  private close: Locator;
  private productsList: Locator;

  constructor(page: Page) {
    super(page);
    this.root = page.locator('header~div[data-testid="grid"]');
    this.filtersList = this.root.locator('.facet-list .facet');
    this.optionsList = this.root.locator('a.facet-option');
    this.close = this.root.locator('button.facet__close-button');
    this.productsList = this.root.locator('[data-testid="product-tile"]');
  }

  async filterParfumByCategory(filter: Categories, option: Options) {
    expect(await this.filtersList.count()).toBeGreaterThan(0);
    await this.filtersList.filter({ hasText: filter }).click();
    expect(await this.optionsList.count()).toBeGreaterThan(0);

    const optionToCheck = this.optionsList.filter({
      hasText: option.toString(),
    });
    await optionToCheck.click();
    await optionToCheck.isChecked({ timeout: 5000 });
    await this.close.click();
    expect(await this.productsList.count()).toBeGreaterThan(0);
  }
}

export { ParfumPage };
