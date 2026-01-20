import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { PurchaseModal } from '../pages/PurchaseModal';
import purchaseData from '../data/purchaseData.json';

test('Flujo de compra E2E - Demoblaze', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const modal = new PurchaseModal(page);

  await page.goto('/');

  for (const productName of purchaseData.products) {
    await home.selectProduct(productName);
    await product.addToCart();
    await product.goHome();
  }

  await cart.openCart();
  await cart.placeOrder();
  await modal.completeForm(purchaseData.purchase);
  await modal.confirmPurchase();
});
