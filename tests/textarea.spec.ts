import { expect, test } from '@playwright/test'

test('TextArea', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('hydrated')).toBeAttached()

  const textarea = page.getByPlaceholder('Auto Growing Text Area')
  await expect(textarea).toBeVisible()
  await textarea.fill('Hello World')
  await expect(textarea).toHaveValue('Hello World')
  await textarea.fill('Hello World\nHello World')
  await expect(textarea).toHaveValue('Hello World\nHello World')
})
