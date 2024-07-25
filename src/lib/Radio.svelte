<script lang="ts" generics="T">
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'

  type V = T extends string ? T : never

  let {
    value = $bindable(undefined) as V | undefined,
    list = [] as V[],
    class: Class = '',
    style = '',
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    onchange = undefined,
    label = undefined
  }: {
    value: V | undefined
    list: V[]
    class?: HTMLInputAttributes['class']
    style?: HTMLInputAttributes['style']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onchange?: ((value: string) => unknown) | undefined
    label?: Snippet<[item: V]> | undefined
  } = $props()

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

{#each list as item}
  <label style:cursor style:display="inline-flex" style:align-items="center">
    <input
      type="radio"
      style:cursor
      {...attributes}
      {readonly}
      {required}
      {disabled}
      {style}
      bind:group={value}
      value={item}
      class={Class}
      onchange={() => onchange?.(item)}
    />
    {#if label}
      {@render label(item)}
    {:else}
      <span style:margin="0.25rem">{item}</span>
    {/if}
  </label>
{/each}

<style>
  input {
    transform: scale(1.25);
    z-index: 0;
  }
</style>
