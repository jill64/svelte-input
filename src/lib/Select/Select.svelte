<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements'
  import type { GroupedInput } from './types/GroupedInput'
  import type { ListInput } from './types/ListInput'
  import { convert } from './utils/convert'
  import { isGroupedOutput } from './utils/isGroupedOutput'

  export let value = ''
  export let list: GroupedInput | ListInput = []
  export let Class: HTMLSelectAttributes['class'] = ''
  export let style: HTMLSelectAttributes['style'] = undefined
  export let disabled: HTMLSelectAttributes['disabled'] = undefined
  export let required: HTMLSelectAttributes['required'] = undefined
  export let attributes: HTMLSelectAttributes = {}
  export let onChange: ((item: string) => unknown) | undefined = undefined

  $: output = convert(list)
</script>

<select
  {...attributes}
  bind:value
  class={Class || null}
  {style}
  {disabled}
  {required}
  on:change={() => onChange?.(value)}
  on:change
  on:input
  on:focus
  on:blur
>
  {#if isGroupedOutput(output)}
    {#each output as { label, disabled, list }}
      <optgroup {label} {disabled}>
        {#each list as item}
          <option {...item}>{item.label}</option>
        {/each}
      </optgroup>
    {/each}
  {:else}
    {#each output as item}
      <option {...item}>{item.label}</option>
    {/each}
  {/if}
</select>
