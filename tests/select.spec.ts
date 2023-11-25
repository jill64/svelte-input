import { expect, test } from '@playwright/test'

test('Select', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  const select = page.getByRole('combobox')
  await expect(select).toBeVisible()
  await select.selectOption('One')
  await expect(page.getByText('value = One')).toBeVisible()
  await page.getByText('Grouped Options').click()
  await select.selectOption('B')
  await expect(page.getByText('value = b', { exact: true })).toBeVisible()
})
