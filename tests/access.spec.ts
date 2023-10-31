import { expect, test } from '@playwright/test'

test('Access', async ({ page }) => {
  await page.goto('/svelte-input')

  await expect(
    page.getByRole('heading', { name: 'svelte-input' })
  ).toBeVisible()
})
