import { expect, test } from '@playwright/test'

test('Action Button', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  await expect(
    page.getByRole('heading', { name: 'svelte-input' })
  ).toBeVisible()

  await expect(
    page.getByRole('button', { name: 'Action Button' })
  ).toBeVisible()

  await page.getByRole('button', { name: 'Action Button' }).click()

  await expect(page.getByText('Action Complete')).toBeVisible()
})
