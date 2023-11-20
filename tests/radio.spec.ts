import { expect, test } from '@playwright/test'

test('Radio', async ({ page }) => {
  await page.goto('/')

  const alpha = page.getByRole('radio', { name: 'Alpha', exact: true })
  const beta = page.getByRole('radio', { name: 'Beta', exact: true })
  const gamma = page.getByRole('radio', { name: 'Gamma', exact: true })

  await expect(alpha).toBeVisible()
  await expect(beta).toBeVisible()
  await expect(gamma).toBeVisible()

  await expect(alpha).toBeChecked()
  await expect(beta).not.toBeChecked()
  await expect(gamma).not.toBeChecked()

  await alpha.click()

  await expect(alpha).toBeChecked()
  await expect(beta).not.toBeChecked()
  await expect(gamma).not.toBeChecked()

  await beta.click()

  await expect(alpha).not.toBeChecked()
  await expect(beta).toBeChecked()
  await expect(gamma).not.toBeChecked()

  await gamma.click()

  await expect(alpha).not.toBeChecked()
  await expect(beta).not.toBeChecked()
  await expect(gamma).toBeChecked()
})
