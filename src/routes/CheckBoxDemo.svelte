<script lang="ts">
  import { CheckBox } from '$lib'
  import { CheckBoxCode } from './CheckBoxCode'
  import Demo from './Demo.svelte'

  let value: boolean | null = $state(null)
  let disabled = $state(false)
</script>

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
{#snippet label()}
  <span style:margin-left="4px"> Check Box </span>
{/snippet}
{#snippet slot()}
  <CheckBox bind:value {label} {disabled} />
{/snippet}
<Demo 
  title="CheckBox" 
  {description} 
  {slot} 
  {options} 
  code={CheckBoxCode({ disabled })} 
  bind:disabled 
  {value} 
/>
