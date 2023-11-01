import { expect, test } from '@playwright/test'

test('Decimal', async ({ page }) => {
  await page.goto('/')

  const textarea = page.getByPlaceholder('Decimal Input')
  await expect(textarea).toBeVisible()
  await textarea.fill('42')
  await expect(textarea).toHaveValue('42')
  await page.getByRole('button', { name: 'ー' }).click()
  await expect(textarea).toHaveValue('41')
  await page.getByRole('button', { name: '＋', exact: true }).click()
  await expect(textarea).toHaveValue('42')
})
