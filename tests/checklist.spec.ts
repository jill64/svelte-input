import { expect, test } from '@playwright/test'

test('CheckList', async ({ page }) => {
  await page.goto('/')

  const first = page.getByRole('checkbox', { name: 'First', exact: true })
  const second = page.getByRole('checkbox', { name: 'Second', exact: true })
  const third = page.getByRole('checkbox', { name: 'Third', exact: true })

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

  await expect(first).toBeChecked()
  await expect(second).toBeChecked()
  await expect(third).not.toBeChecked()

  await third.click()

  await expect(first).toBeChecked()
  await expect(second).toBeChecked()
  await expect(third).toBeChecked()
})
