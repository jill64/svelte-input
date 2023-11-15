import { expect, test } from '@playwright/test'

test('Check Box', async ({ page }) => {
  await page.goto('/')

  const checkBox = page.getByLabel('Check Box', { exact: true })
  await expect(checkBox).toBeVisible()
  await checkBox.click()
  await expect(checkBox).toBeChecked()
  await checkBox.click()
  await expect(checkBox).not.toBeChecked()
})
