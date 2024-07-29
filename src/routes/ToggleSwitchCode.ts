export const ToggleSwitchCode = ({
  disabled
}: {
  disabled: boolean
}) => /*html*/ `
<script>
  import { ToggleSwitch } from '@jill64/svelte-input'
</script>

<ToggleSwitch bind:value ${disabled ? 'disabled ' : ''} >
  <span style:margin-left="4px"> Toggle Switch </span>
</ToggleSwitch>
`
