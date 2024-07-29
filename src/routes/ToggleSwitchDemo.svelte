<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import Demo from './Demo.svelte'
  import { ToggleSwitchCode } from './ToggleSwitchCode'

  let value = false
  let disabled = false
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

  {#snippet children(disabled)}
    <ToggleSwitch bind:value {disabled}>
      <span style:margin-left="4px"> Toggle Switch </span>
    </ToggleSwitch>
  {/snippet}
</Demo>
