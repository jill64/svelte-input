<script lang="ts">
  import CheckList from '$lib/CheckList.svelte'
  import { CheckListCode } from './CheckListCode'
  import Demo from './Demo.svelte'

  const initialValue = {
    First: null,
    Second: null,
    Third: null
  }

  let disabled = $state(false)
  let value = $state({ ...initialValue })
</script>

{#snippet description()}
  A checkbox list component that binds inputs structured as <code>object</code>.
{/snippet}
{#snippet options()}
  <button
    onclick={() => {
      value = initialValue
    }}
    {disabled}
  >
    Reset
  </button>
{/snippet}
{#snippet slot()}
  <fieldset>
    <CheckList bind:value {disabled} />
  </fieldset>
{/snippet}
<Demo
  title="CheckList"
  value={JSON.stringify(value, null, 2)}
  code={CheckListCode({ disabled })}
  bind:disabled
  {slot}
  {description}
  {options}
/>

<style>
  fieldset {
    display: flex;
    border: none;
    flex-direction: column;
    gap: 1rem;
  }
</style>
