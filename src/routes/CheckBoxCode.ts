export const CheckBoxCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { CheckBox } from '@jill64/svelte-input'
</script>

<CheckBox bind:value ${disabled ? 'disabled ' : ''}>
  Check Box
</CheckBox>
`
