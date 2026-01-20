import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click('text=Add to cart');
    await this.page.on('dialog', dialog => dialog.accept());
  }

  async goHome() {
    await this.page.click('text=Home');
  }
}
