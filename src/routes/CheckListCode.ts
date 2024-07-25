export const CheckListCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { CheckList } from '@jill64/svelte-input'
</script>

{#snippet label()}
  {item}
{/snippet}

<fieldset>
  <CheckList bind:value ${disabled ? 'disabled ' : ''} {label} />
</fieldset>
`
