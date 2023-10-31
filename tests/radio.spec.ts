import { expect, test } from '@playwright/test'

test('Radio', async ({ page }) => {
  await page.goto('/svelte-input')

  const first = page.getByLabel('First')
  const second = page.getByLabel('Second')
  const third = page.getByLabel('Third')

  await expect(first).toBeVisible()
  await expect(second).toBeVisible()
  await expect(third).toBeVisible()

  await expect(first).not.toBeChecked()
  await expect(second).not.toBeChecked()
  await expect(third).not.toBeChecked()

  await first.click()

  await expect(first).toBeChecked()
  await expect(second).not.toBeChecked()
  await expect(third).not.toBeChecked()

  await second.click()

  await expect(first).not.toBeChecked()
  await expect(second).toBeChecked()
  await expect(third).not.toBeChecked()

  await third.click()

  await expect(first).not.toBeChecked()
  await expect(second).not.toBeChecked()
  await expect(third).toBeChecked()
})
