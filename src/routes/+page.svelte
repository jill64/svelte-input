<script lang="ts">
  import ActionButton from '$lib/ActionButton.svelte'
  import TextArea from '$lib/TextArea.svelte'
  import { FileInput } from '$lib/index.js'
  import { toast } from '@jill64/svelte-toast'

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
</script>

<h1>svelte-input</h1>
<FileInput>
  <div
    style:border-radius="9999px"
    style:padding="8px 16px"
    style:background="#AAF"
  >
    Custom File Input
  </div>
</FileInput>
<TextArea
  placeholder="Auto Grow Text Area"
  style="background: inherit; color: inherit;"
/>
<ActionButton
  style="border-radius: 9999px; font-size: 16px; border: 1px solid #555; padding:8px 16px; background: transparent; color: inherit"
  onClick={async () => {
    await delay(3000)
    $toast.success('Action Complete')
  }}
  label="Action Button"
>
  ＋
</ActionButton>

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
</style>
