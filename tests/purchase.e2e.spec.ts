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

  // Navegar a la página principal configurada en baseURL
  await page.goto('/');

  // Agregar productos al carrito 
  for (const productName of purchaseData.products) {
    await home.selectProduct(productName);
    await product.addToCart();
    await product.goHome();
  }
// Realizar el proceso de compra
  await cart.openCart();
  await cart.placeOrder();
  await modal.completeForm(purchaseData.purchase);
  await modal.confirmPurchase();
});
