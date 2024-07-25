<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import Demo from './Demo.svelte'
  import { ToggleSwitchCode } from './ToggleSwitchCode'

  let value = false
  let disabled = false
</script>

{#snippet description()}
  Pre-styled
  <code>{'<input type="checkbox">'}</code>
  compatible toggle switch component.
{/snippet}

{#snippet label()}
  <span style:margin-left="4px"> Toggle Switch </span>
{/snippet}

{#snippet slot()}
  <ToggleSwitch bind:value {label} {disabled} />
{/snippet}

<Demo
  title="ToggleSwitch"
  code={ToggleSwitchCode({ disabled })}
  {value}
  bind:disabled
  {slot}
  {description}
/>
