<script lang="ts">
  import { Decimal } from '$lib'
  import { DecimalCode } from './DecimalCode'
  import Demo from './Demo.svelte'

  let disabled = false
  let value = 0
  let min = 0
  let max = 10

  const style =
    'color: inherit; background: inherit; border: solid 1px #888; border-radius: 0.25rem; padding: 0.25rem;'
</script>

<Demo
  title="Decimal"
  code={DecimalCode({ disabled, min, max })}
  bind:disabled
  {value}
>
  <svelte:fragment slot="description">
    Integer input with control buttons.
  </svelte:fragment>
  <svelte:fragment slot="options">
    <fieldset>
      <legend> Min </legend>
      <Decimal buttonClass="p-2" bind:value={min} {max} {style} {disabled} />
    </fieldset>
    <fieldset>
      <legend> Max </legend>
      <Decimal buttonClass="p-2" bind:value={max} {min} {style} {disabled} />
    </fieldset>
  </svelte:fragment>
  <fieldset>
    <Decimal
      bind:value
      buttonClass="p-2 rounded-full border border-zinc-500 push-effect dark:pop-effect"
      placeholder="Decimal Input"
      {style}
      {disabled}
      {min}
      {max}
    />
  </fieldset>
</Demo>

<style>
  fieldset {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  legend {
    margin-bottom: 0.5rem;
  }
</style>
