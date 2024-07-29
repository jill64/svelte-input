<script lang="ts">
  import { CheckBox } from '$lib'
  import { CheckBoxCode } from './CheckBoxCode'
  import Demo from './Demo.svelte'

  let value: boolean | null = $state(null)
  let disabled = $state(false)
</script>

<Demo title="CheckBox" code={CheckBoxCode({ disabled })} bind:disabled {value}>
  {#snippet description()}
    Labeled checkbox to support bindable <code>indeterminate</code> value input.
  {/snippet}
  {#snippet options()}
    <button
      onclick={() => {
        value = null
      }}
      {disabled}
    >
      Reset
    </button>
  {/snippet}
  {#snippet children(disabled)}
    <CheckBox bind:value {disabled}>
      <span style:margin-left="4px"> Check Box </span>
    </CheckBox>
  {/snippet}
</Demo>
