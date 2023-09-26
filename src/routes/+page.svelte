<script lang="ts">
  import {
    ActionButton,
    CheckBox,
    FileInput,
    TextArea,
    ToggleSwitch
  } from '$lib/index.js'
  import { toast } from '@jill64/svelte-toast'

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
</script>

<h1>svelte-input</h1>
<main>
  <FileInput>
    <div
      style:border-radius="9999px"
      style:padding="8px 16px"
      style:background="#77F"
    >
      Custom File Input
    </div>
  </FileInput>
  <ActionButton
    style="border-radius: 9999px; font-size: 16px; border: 1px solid #555; padding:8px 16px; background: transparent; color: inherit"
    onClick={async () => {
      await delay(1500)
      $toast.success('Action Complete')
    }}
    label="Action Button"
  >
    ＋
  </ActionButton>
  <CheckBox value={null}>
    <span
      style:user-select="none"
      style:-moz-user-select="none"
      style:-webkit-user-select="none"
      style:margin-left="4px"
    >
      Check Box
    </span>
  </CheckBox>
  <ToggleSwitch>
    <span style:margin-left="4px"> Toggle Switch </span>
  </ToggleSwitch>
  <TextArea
    placeholder="Auto Grow Text Area"
    style="background: inherit; color: inherit;"
  />
</main>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #222;
      color: white;
    }
  }
  main {
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
