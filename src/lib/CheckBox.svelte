<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { HTMLInputAttributes } from 'svelte/elements'

  export let value: HTMLInputAttributes['checked'] = false
  export let Class: HTMLInputAttributes['class'] = ''
  export let style: HTMLInputAttributes['style'] = ''
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onChange: ((s: boolean) => unknown) | undefined = undefined

  $: cursor = disabled ? 'not-allowed' : 'pointer'

  $: action = ((node, value) => {
    const update = (v: typeof value) => {
      node.indeterminate = v === null || v === undefined
    }

    update(value)

    return {
      update
    }
  }) satisfies Action<HTMLInputElement, typeof value>
</script>

<label style:cursor style:display="inline-flex" style:align-items="center">
  <input
    use:action={value}
    type="checkbox"
    style:cursor
    {...attributes}
    {readonly}
    {required}
    {disabled}
    {style}
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
