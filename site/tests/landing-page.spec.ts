import { expect, test } from '@playwright/test';

test('landing page exposes the Hunt story and anchors', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('h1')).toHaveText('Choose the quarry. Begin the hunt.');
  await expect(page.locator('#tour')).toBeVisible();
  await expect(page.locator('#features')).toBeVisible();
  await expect(page.locator('[data-stage]')).toHaveCount(5);
  await page.getByRole('link', { name: 'Explore the Hunt' }).click();
  await expect(page).toHaveURL(/#tour$/);
});

test('tour changes device and cycles through stages', async ({ page }) => {
  await page.goto('./');
  const tour = page.locator('[data-tour]');
  await tour.getByRole('button', { name: 'iPad' }).click();
  await expect(tour.getByRole('button', { name: 'iPad' })).toHaveAttribute('aria-pressed', 'true');
  await tour.getByRole('button', { name: 'Next stage' }).click();
  await expect(tour.locator('[data-tour-status]')).toContainText('Stage 2 of 5');
  await page.keyboard.press('ArrowLeft');
  await expect(tour.locator('[data-tour-status]')).toContainText('Stage 1 of 5');
  await tour.getByRole('button', { name: 'Previous stage' }).click();
  await expect(tour.locator('[data-tour-status]')).toContainText('Stage 5 of 5');
});

test('phone layout has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('./');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
});
