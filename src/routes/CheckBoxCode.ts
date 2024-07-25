export const CheckBoxCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { CheckBox } from '@jill64/svelte-input'
</script>

{#snippet label()}
  Check Box
{/snippet}

<CheckBox bind:value {label} ${disabled ? 'disabled ' : ''}/>
`
