<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'

  export let value: HTMLInputAttributes['checked'] = false
  export let Class: HTMLInputAttributes['class'] = ''
  export let style: HTMLInputAttributes['style'] = undefined
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onChange: ((s: boolean) => unknown) | undefined = undefined

  let dom: HTMLInputElement | null

  $: if (dom) {
    dom.indeterminate = value === null || value === undefined
  }

  $: cursor = disabled ? 'not-allowed' : 'pointer'
</script>

<label style:cursor style:display="inline-flex" style:align-items="center">
  <input
    type="checkbox"
    style:cursor
    {...attributes}
    {readonly}
    {required}
    {disabled}
    {style}
    bind:this={dom}
    bind:checked={value}
    class={Class}
    on:change={(x) => onChange?.(x.currentTarget.checked)}
    on:change
    on:input
  />
  <slot />
</label>

<style>
  input {
    transform: scale(1.25);
    z-index: 0;
  }
</style>
