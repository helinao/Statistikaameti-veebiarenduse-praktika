import { test, expect } from '@playwright/test';

test('should answer the question wrong', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Tartu' }).click();

  await expect(page.getByText('Vale vastus.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Järgmine küsimus' })).toBeVisible();
});