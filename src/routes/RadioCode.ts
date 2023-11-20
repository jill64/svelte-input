export const RadioCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { Radio } from '@jill64/svelte-input'
</script>

<fieldset>
  <Radio list={['Alpha', 'Beta', 'Gamma']} bind:value let:item ${
    disabled ? 'disabled ' : ''
  }>
    {item}
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
