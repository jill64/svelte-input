<script lang="ts" generics="T">
  import type { Snippet } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'
  import CheckBox from './CheckBox.svelte'

  type K = string | number | symbol
  type V = T extends Record<K, boolean | null> ? T : never

  let {
    value = $bindable({} as V),
    Class = '',
    style = '',
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    onChange = undefined,
    children
  }: {
    value?: V
    Class?: HTMLInputAttributes['class']
    style?: HTMLInputAttributes['style']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onChange?: ((value: V) => unknown) | undefined
    children?: Snippet<[K]>
  } = $props()

  let handle = $derived((key: K) => (x: boolean) => {
    value = { ...value, [key]: x }
    onChange?.(value)
  })
</script>

{#each Object.entries(value) as [key, v] (key)}
  <CheckBox
    value={v}
    {...attributes}
    {readonly}
    {required}
    {disabled}
    {style}
    {Class}
    onChange={handle(key)}
  >
    {#if children}
      {@render children(key)}
    {:else}
      <span style:margin="0.25rem">{key}</span>
    {/if}
  </CheckBox>
{/each}
