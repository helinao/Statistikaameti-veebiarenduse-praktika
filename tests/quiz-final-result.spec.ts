import { test, expect } from '@playwright/test';

test('should show the tabel at the end of quiz', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Tallinn' }).click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Karu' }).click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Kuldnokk' }).click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Moon' }).click();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Tamm' }).click();
  await page.getByRole('button', { name: 'Tulemuste juurde' }).click();

  await expect(page.getByRole('heading', { name: 'Viktoriin on lõppenud!' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Viktoriini tulemused' })).toBeVisible();
  await expect(page.getByRole('table')).toBeVisible();
});