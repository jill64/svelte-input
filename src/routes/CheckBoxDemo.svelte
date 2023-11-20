<script lang="ts">
  import { CheckBox } from '$lib'
  import { CheckBoxCode } from './CheckBoxCode'
  import Demo from './Demo.svelte'

  let value: boolean | null = null
  let disabled = false
</script>

<Demo title="CheckBox" code={CheckBoxCode({ disabled })} bind:disabled {value}>
  <svelte:fragment slot="description">
    Labeled checkbox to support bindable <code>indeterminate</code> value input.
  </svelte:fragment>
  <svelte:fragment slot="options">
    <button
      on:click={() => {
        value = null
      }}
      {disabled}
    >
      Reset
    </button>
  </svelte:fragment>
  <CheckBox bind:value {disabled}>
    <span style:margin-left="4px"> Check Box </span>
  </CheckBox>
</Demo>
