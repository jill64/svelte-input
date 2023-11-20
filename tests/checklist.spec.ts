import { expect, test } from '@playwright/test'

test('CheckList', async ({ page }) => {
  await page.goto('/')

  const first = page.getByLabel('First', { exact: true })
  const second = page.getByLabel('Second', { exact: true })
  const third = page.getByLabel('Third', { exact: true })

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
