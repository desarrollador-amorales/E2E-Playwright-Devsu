import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async selectProduct(productName: string) {
    await this.page.click(`text=${productName}`);
  }
}
