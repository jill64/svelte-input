export const CheckListCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { CheckList } from '@jill64/svelte-input'
</script>

<fieldset>
  <CheckList bind:value ${disabled ? 'disabled ' : ''}let:item>
    {item}
  </CheckList>
</fieldset>
`
