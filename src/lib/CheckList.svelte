<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import CheckBox from './CheckBox.svelte'

  type T = $$Generic
  type K = string | number | symbol
  type V = T extends Record<K, boolean | null> ? T : never

  export let value: V = {} as V
  export let Class: HTMLInputAttributes['class'] = ''
  export let style: HTMLInputAttributes['style'] = undefined
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onChange: ((value: V) => unknown) | undefined = undefined

  $: handle = (key: K) => (x: boolean) => {
    value = { ...value, [key]: x }
    onChange?.(value)
  }
</script>

{#each Object.entries(value) as [key, v]}
  <CheckBox
    value={v}
    {...attributes}
    {readonly}
    {required}
    {disabled}
    {style}
    {Class}
    onChange={handle(key)}
    on:change
    on:input
  >
    <slot item={key} />
  </CheckBox>
{/each}
