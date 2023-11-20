export const TextAreaCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { TextArea } from '@jill64/svelte-input'
</script>

<TextArea
  bind:value
  placeholder="Auto Growing Text Area"
  padding="0.5rem"
  style="width: 90%; max-height: 300px; border-radius: 0.5rem;"${
    disabled ? '\n  disabled' : ''
  }
/>
`
