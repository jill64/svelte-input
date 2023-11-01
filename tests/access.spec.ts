import { expect, test } from '@playwright/test'

test('Access', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'svelte-input' })
  ).toBeVisible()
})
