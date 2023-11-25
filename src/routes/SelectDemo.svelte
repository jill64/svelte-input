<script lang="ts">
  import { Select, ToggleSwitch } from '$lib'
  import Demo from './Demo.svelte'
  import { SelectCode } from './SelectCode'

  let value = ''
  let grouped = false
  let disabled = false
</script>

<Demo
  title="Select"
  code={SelectCode({ grouped, disabled })}
  bind:disabled
  {value}
>
  <svelte:fragment slot="description">
    Declarative list input with multiple variations quickly creates semantic
    pull-down menus.
  </svelte:fragment>
  <svelte:fragment slot="options">
    <ToggleSwitch bind:value={grouped}>
      <span style:margin-left="0.5rem">Grouped Options</span>
    </ToggleSwitch>
  </svelte:fragment>
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
</Demo>
