import { expect, test } from '@playwright/test'

test('Action Button', async ({ page }) => {
  await page.goto('/svelte-input')

  const button = page.getByRole('button', { name: 'Action Button' })
  await expect(button).toBeVisible()
  button.click()
  await expect(page.getByText('Action Complete')).toBeVisible()
})
