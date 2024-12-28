<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { Action } from 'svelte/action'
  import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    value = $bindable(false),
    Class = '',
    style = '',
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    onChange = undefined,
    children
  }: {
    value?: HTMLInputAttributes['checked']
    Class?: HTMLInputAttributes['class']
    style?: HTMLInputAttributes['style']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onChange?: (s: boolean) => unknown
    children?: Snippet
  } = $props()

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')

  let action = $derived(((node, value) => {
    const update = (v: typeof value) => {
      node.indeterminate = v === null || v === undefined
    }

    update(value)

    return {
      update
    }
  }) satisfies Action<HTMLInputElement, typeof value>)
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
    onchange={(x) => onChange?.(x.currentTarget.checked)}
  />
  {@render children?.()}
</label>

<style>
  input {
    transform: scale(1.25);
    z-index: 0;
  }
</style>
