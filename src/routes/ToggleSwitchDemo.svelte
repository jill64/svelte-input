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
  <svelte:fragment slot="description">
    Pre-styled
    <code>{'<input type="checkbox">'}</code>
    compatible toggle switch component.
  </svelte:fragment>
  <ToggleSwitch bind:value>
    <span style:margin-left="4px"> Toggle Switch </span>
  </ToggleSwitch>
</Demo>
