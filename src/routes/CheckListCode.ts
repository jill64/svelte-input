export const CheckListCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { CheckList } from '@jill64/svelte-input'
</script>


<fieldset>
  <CheckList bind:value ${disabled ? 'disabled ' : ''}>
    {#snippet children(item)}
      {item}
    {/snippet}
  </CheckList>
</fieldset>
`
