<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'

  type T = $$Generic
  type V = T extends string ? T : never

  export let value: V | undefined = undefined
  export let list: V[] = []
  export let Class: HTMLInputAttributes['class'] = ''
  export let style: HTMLInputAttributes['style'] = undefined
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onSelect: ((value: string) => unknown) | undefined = undefined
</script>

{#each list as item}
  <label
    style:cursor={disabled ? 'not-allowed' : 'pointer'}
    style:display="inline-flex"
    style:align-items="center"
  >
    <input
      type="radio"
      style:cursor={disabled ? 'not-allowed' : 'pointer'}
      {...attributes}
      {readonly}
      {required}
      {disabled}
      {style}
      bind:group={value}
      value={item}
      class={Class}
      on:change={() => onSelect?.(item)}
      on:change
      on:input
    />
    <slot {item} />
  </label>
{/each}

<style>
  input {
    transform: scale(1.25);
    z-index: 0;
  }
</style>
