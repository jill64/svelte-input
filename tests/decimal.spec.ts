import { expect, test } from '@playwright/test'

test('Decimal', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  const decimal = page.getByPlaceholder('Decimal Input')
  await expect(decimal).toBeVisible()
  await decimal.fill('42')
  await expect(decimal).toHaveValue('10')
  await decimal.fill('7')
  await expect(decimal).toHaveValue('7')
  await page.getByRole('button', { name: 'ー', exact: true }).nth(2).click()
  await expect(decimal).toHaveValue('6')
  await page.getByRole('button', { name: '＋', exact: true }).nth(2).click()
  await expect(decimal).toHaveValue('7')
})
