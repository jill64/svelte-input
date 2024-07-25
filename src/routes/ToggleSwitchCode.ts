export const ToggleSwitchCode = ({
  disabled
}: {
  disabled: boolean
}) => /*html*/ `
<script>
  import { ToggleSwitch } from '@jill64/svelte-input'
</script>

{#snippet label()}
  Toggle Switch
{/snippet}

<ToggleSwitch bind:value ${disabled ? 'disabled ' : ''} {label} />
`
