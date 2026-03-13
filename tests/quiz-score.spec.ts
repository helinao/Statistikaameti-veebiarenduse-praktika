import { test, expect } from '@playwright/test';

test('should update the score', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Tallinn' }).click();
  await expect(page.getByText('Õige vastus!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Järgmine küsimus' })).toBeVisible();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Lõvi' }).click();
  await expect(page.getByText('Õige vastus!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Järgmine küsimus' })).toBeVisible();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();
  
  await page.getByRole('button', { name: 'Leevike' }).click();
  await expect(page.getByText('Vale vastus.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Järgmine küsimus' })).toBeVisible();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Rukkilill' }).click();
  await expect(page.getByText('Õige vastus!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Järgmine küsimus' })).toBeVisible();
  await page.getByRole('button', { name: 'Järgmine küsimus' }).click();

  await page.getByRole('button', { name: 'Tamm' }).click();
  await expect(page.getByText('Õige vastus!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tulemuste juurde' })).toBeVisible();
  await page.getByRole('button', { name: 'Tulemuste juurde' }).click();

  await expect(page.getByText('Kogusid viktoriinis 4 punkti võimalikust 5 punktist.')).toBeVisible();
});