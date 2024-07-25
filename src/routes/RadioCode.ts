export const RadioCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { Radio } from '@jill64/svelte-input'
</script>

{#snippet label(item)}
  {item}
{/snippet}

<fieldset>
  <Radio list={['Alpha', 'Beta', 'Gamma']} bind:value {label} ${
    disabled ? 'disabled ' : ''
  } />
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
