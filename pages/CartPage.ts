import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('#cartur');
  }

  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place Order' }).click();
  }
}
