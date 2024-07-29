export const RadioCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { Radio } from '@jill64/svelte-input'
</script>

<fieldset>
  <Radio list={['Alpha', 'Beta', 'Gamma']} bind:value {label} ${
    disabled ? 'disabled ' : ''
  }>
    {#snippet children(item)}
      <span style:margin="0.5rem">{item}</span>
    {/snippet}
  </Radio>
</fieldset>

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* ... */
  }
</style>
`
