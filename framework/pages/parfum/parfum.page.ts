import { Locator, expect } from '@playwright/test';
import { BasePage } from '../../../lib';
import { Options, Categories } from '../../../data-storage';


class ParfumPage extends BasePage {
  private filtersList: Locator = this.page.locator('.facet');
  private optionsList: Locator = this.page.locator('a.facet-option');
  private close: Locator = this.page.locator('button.facet__close-button');
  private productsList: Locator = this.page.locator('[data-testid="product-tile"]');

  async filterParfum(filter: Categories, optIndex: Options) {
    expect(await this.filtersList.count()).toBeGreaterThan(0);
    await this.filtersList.filter({ hasText: filter }).click();
    expect(await this.optionsList.count()).toBeGreaterThan(0);

    const optionToCheck = this.optionsList.nth(optIndex);
    await optionToCheck.click();
    await optionToCheck.isChecked({ timeout: 5000 });
    await this.close.click();

    // TODO: need to think about better assert
    expect(await this.productsList.count()).toBeGreaterThan(0);
  }
}

export { ParfumPage };
