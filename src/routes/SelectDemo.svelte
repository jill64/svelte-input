<script lang="ts">
  import { Select, ToggleSwitch } from '$lib'
  import Demo from './Demo.svelte'
  import { SelectCode } from './SelectCode'

  let value = $state('')
  let grouped = $state(false)
  let disabled = $state(false)
</script>

 {#snippet description()}
    Declarative list input with multiple variations quickly creates semantic
    pull-down menus.
 {/snippet}

{#snippet label()}
  <span style:margin-left="0.5rem">Grouped Options</span>
{/snippet}

{#snippet options()}
  <ToggleSwitch bind:value={grouped} {label} />
{/snippet}

{#snippet slot()}
  <Select
    list={grouped
      ? {
          Num: { list: ['One', 'Two', 'Three'] },
          Char: { list: { A: 'a', B: 'b', C: 'c' } }
        }
      : { One: 'One', Two: 'Two', Three: 'Three', A: 'a', B: 'b', C: 'c' }}
    bind:value
    {disabled}
    style="background: inherit; padding: 0.5rem; font-size: large; color: inherit; border: none;"
  />
{/snippet}

<Demo
  title="Select"
  code={SelectCode({ grouped, disabled })}
  bind:disabled
  {value}
  {description}
  {options}
  {slot}
/>
