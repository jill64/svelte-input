<script lang="ts">
  import CheckList from '$lib/CheckList.svelte'
  import { CheckListCode } from './CheckListCode'
  import Demo from './Demo.svelte'

  const initialValue = {
    First: null,
    Second: null,
    Third: null
  }

  let disabled = false
  let value = { ...initialValue }
</script>

<Demo
  title="CheckList"
  value={JSON.stringify(value, null, 2)}
  code={CheckListCode({ disabled })}
  bind:disabled
>
  <svelte:fragment slot="description">
    A checkbox list component that binds inputs structured as
    <code>object</code>.
  </svelte:fragment>
  <svelte:fragment slot="options">
    <button
      on:click={() => {
        value = initialValue
      }}
      {disabled}
    >
      Reset
    </button>
  </svelte:fragment>
  <fieldset>
    <CheckList bind:value {disabled} />
  </fieldset>
</Demo>

<style>
  fieldset {
    display: flex;
    border: none;
    flex-direction: column;
    gap: 1rem;
  }
</style>
