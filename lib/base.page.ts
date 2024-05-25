import { Page } from '@playwright/test';

class BasePage {
  constructor(protected page: Page) {
  }

  async goTo(path: string) {
    await this.page.goto(path);
    await this.page.waitForURL(/[path]/);
  }
}

export { BasePage };
