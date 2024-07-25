<script lang="ts">
  import type { HTMLSelectAttributes } from 'svelte/elements'
  import type { GroupedInput } from './types/GroupedInput'
  import type { ListInput } from './types/ListInput'
  import { convert } from './utils/convert'
  import { isGroupedOutput } from './utils/isGroupedOutput'

  let {
    value = $bindable(''),
    list = [],
    disabled = undefined,
    class: Class = '',
    style = undefined,
    required = undefined,
    attributes = {},
    onchange = undefined
  }: {
    value: string
    disabled?: HTMLSelectAttributes['disabled']
    class?: HTMLSelectAttributes['class']
    style?: HTMLSelectAttributes['style']
    required?: HTMLSelectAttributes['required']
    list: GroupedInput | ListInput
    attributes?: HTMLSelectAttributes
    onchange?: ((value: string) => unknown) | undefined
  } = $props()

  let output = $derived(convert(list))
  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<select
  {...attributes}
  onchange={() => onchange?.(value)}
  class={Class}
  bind:value
  {style}
  style:cursor
  {disabled}
  {required}
>
  {#if isGroupedOutput(output)}
    {#each output as { label, disabled, list }}
      <optgroup {label} {disabled}>
        {#each list as { value, selected, label, disabled }}
          <option {value} {selected} {disabled} style:cursor>{label}</option>
        {/each}
      </optgroup>
    {/each}
  {:else}
    {#each output as { value, selected, label, disabled }}
      <option {value} {selected} {disabled} style:cursor>{label}</option>
    {/each}
  {/if}
</select>
