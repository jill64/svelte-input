import { expect, test } from '@playwright/test'

test('TextArea', async ({ page }) => {
  await page.goto('/')

  const textarea = page.getByPlaceholder('Auto Grow Text Area')
  await expect(textarea).toBeVisible()
  await textarea.fill('Hello World')
  await expect(textarea).toHaveValue('Hello World')
  await textarea.fill('Hello World\nHello World')
  await expect(textarea).toHaveValue('Hello World\nHello World')
})
