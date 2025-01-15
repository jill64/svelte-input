<script lang="ts">
  import type {
    HTMLOptionAttributes,
    HTMLSelectAttributes
  } from 'svelte/elements'
  import type { GroupedInput } from './types/GroupedInput'
  import type { ListInput } from './types/ListInput'
  import { convert } from './utils/convert'
  import { isGroupedOutput } from './utils/isGroupedOutput'

  let {
    value = $bindable(''),
    list = [],
    Class = '',
    style = '',
    optionClass = '',
    optionStyle = '',
    disabled = undefined,
    required = undefined,
    attributes = {},
    onChange = undefined
  }: {
    value?: string
    list?: GroupedInput | ListInput
    Class?: HTMLSelectAttributes['class']
    style?: HTMLSelectAttributes['style']
    optionClass?: HTMLOptionAttributes['class']
    optionStyle?: HTMLOptionAttributes['style']
    disabled?: HTMLSelectAttributes['disabled']
    required?: HTMLSelectAttributes['required']
    attributes?: HTMLSelectAttributes
    onChange?: ((item: string) => unknown) | undefined
  } = $props()

  let output = $derived(convert(list))
  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<select
  {...attributes}
  bind:value
  class={Class || null}
  {style}
  style:cursor
  {disabled}
  {required}
  onchange={() => onChange?.(value)}
>
  {#if isGroupedOutput(output)}
    {#each output as { label, disabled, list }}
      <optgroup {label} {disabled}>
        {#each list as { value, selected, label, disabled }}
          <option
            {value}
            {selected}
            {disabled}
            class={optionClass}
            style={optionStyle}
            style:cursor>{label}</option
          >
        {/each}
      </optgroup>
    {/each}
  {:else}
    {#each output as { value, selected, label, disabled }}
      <option
        {value}
        {selected}
        {disabled}
        class={optionClass}
        style={optionStyle}
        style:cursor>{label}</option
      >
    {/each}
  {/if}
</select>
