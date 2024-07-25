<script lang="ts" generics="T">
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'

  type K = string | number | symbol
  type V = T extends Record<K, boolean | null> ? T : never

  let {
  value = $bindable({}) as V,
  class: Class = '',
  style = '',
  disabled = undefined,
  required = undefined,
  readonly = undefined,
  attributes = {},
  onchange = undefined,
  label = undefined
}: {
  value: V
  class?: HTMLInputAttributes['class']
  style?: HTMLInputAttributes['style']
  disabled?: HTMLInputAttributes['disabled']
  required?: HTMLInputAttributes['required']
  readonly?: HTMLInputAttributes['readonly']
  attributes?: HTMLInputAttributes
  onchange?: ((value: V) => unknown) | undefined
  label?: Snippet<[key:string]> | undefined
}  = $props()

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')

  const handle = (key: K) => (x: boolean) => {
    value = { ...value, [key]: x }
    onchange?.(value)
  }
</script>

{#each Object.entries(value) as [key,v]}
  <label style:cursor style:display="inline-flex" style:align-items="center">
    <input
      type="checkbox"
      style:cursor
      {...attributes}
      {style}
      {readonly}
      {required}
      {disabled}
      class={Class}
      onchange={(x) => {
        handle(key)(x.currentTarget.checked)
      }}
      checked={v}
      indeterminate={v === null || v === undefined}
    />
    {#if label}
      {@render label(key)}
    {:else}
      <span style:margin="0.25rem">{key}</span>
    {/if}
  </label>
{/each}
