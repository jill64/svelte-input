<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import Demo from './Demo.svelte'
  import { ToggleSwitchCode } from './ToggleSwitchCode'

  let value = $state(false)
  let disabled = $state(false)
</script>

<Demo
  title="ToggleSwitch"
  code={ToggleSwitchCode({ disabled })}
  {value}
  bind:disabled
>
  {#snippet description()}
    Pre-styled
    <code>{'<input type="checkbox">'}</code>
    compatible toggle switch component.
  {/snippet}
  <ToggleSwitch bind:value {disabled}>
    <span style:margin-left="4px"> Toggle Switch </span>
  </ToggleSwitch>
</Demo>
