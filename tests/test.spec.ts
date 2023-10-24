import { expect, test } from '@playwright/test'

test('Access', async ({ page }) => {
  await page.goto('/svelte-input')

  await expect(
    page.getByRole('heading', { name: 'svelte-input' })
  ).toBeVisible()
})

test('Action Button', async ({ page }) => {
  await page.goto('/svelte-input')

  const button = page.getByRole('button', { name: 'Action Button' })
  await expect(button).toBeVisible()
  button.click()
  await expect(page.getByText('Action Complete')).toBeVisible()
})

test('Check Box', async ({ page }) => {
  await page.goto('/svelte-input')

  const checkBox = page.getByLabel('Check Box')
  await expect(checkBox).toBeVisible()
  await checkBox.click()
  await expect(checkBox).toBeChecked()
  await checkBox.click()
  await expect(checkBox).not.toBeChecked()
})

test('Toggle Switch', async ({ page }) => {
  await page.goto('/svelte-input')

  const toggleSwitch = page.getByText('Toggle Switch')
  await expect(toggleSwitch).toBeVisible()
  await toggleSwitch.click()
  await expect(toggleSwitch).toBeChecked()
  await toggleSwitch.click()
  await expect(toggleSwitch).not.toBeChecked()
})

test('TextArea', async ({ page }) => {
  await page.goto('/svelte-input')

  const textarea = page.getByPlaceholder('Auto Grow Text Area')
  await expect(textarea).toBeVisible()
  await textarea.fill('Hello World')
  await expect(textarea).toHaveValue('Hello World')
  await textarea.fill('Hello World\nHello World')
  await expect(textarea).toHaveValue('Hello World\nHello World')
})

test('Radio', async ({ page }) => {
  await page.goto('/svelte-input')

  const first = page.getByLabel('First')
  const second = page.getByLabel('Second')
  const third = page.getByLabel('Third')

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
