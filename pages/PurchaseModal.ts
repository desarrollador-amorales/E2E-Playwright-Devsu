import { Page } from '@playwright/test';

export class PurchaseModal {
  constructor(private page: Page) {}

  async completeForm(data: any) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#country', data.country);
    await this.page.fill('#city', data.city);
    await this.page.fill('#card', data.creditCard);
    await this.page.fill('#month', data.month);
    await this.page.fill('#year', data.year);
  }

  async confirmPurchase() {
    await this.page.click('text=Purchase');
    await this.page.click('text=OK');
  }
}
