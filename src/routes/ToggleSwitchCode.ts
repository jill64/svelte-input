export const ToggleSwitchCode = ({
  disabled
}: {
  disabled: boolean
}) => /*html*/ `
<script>
  import { ToggleSwitch } from '@jill64/svelte-input'
</script>

<ToggleSwitch bind:value ${disabled ? 'disabled ' : ''}>
  Toggle Switch
</ToggleSwitch>
`
