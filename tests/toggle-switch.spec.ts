import { expect, test } from '@playwright/test'

test('Toggle Switch', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  const toggleSwitch = page.getByText('Toggle Switch', { exact: true })
  await expect(toggleSwitch).toBeVisible()
  await toggleSwitch.click()
  await expect(toggleSwitch).toBeChecked()
  await toggleSwitch.click()
  await expect(toggleSwitch).not.toBeChecked()
})
