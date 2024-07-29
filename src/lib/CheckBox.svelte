<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    value = $bindable(false),
    class: Class = '',
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    children = undefined,
    onchange = undefined
  }: {
    value: HTMLInputAttributes['checked']
    class?: HTMLInputAttributes['class']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    children?: Snippet | undefined
    onchange?: ((value: boolean) => unknown) | undefined
  } = $props()

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<label style:cursor style:display="inline-flex" style:align-items="center">
  <input
    type="checkbox"
    style:cursor
    {...attributes}
    {readonly}
    {required}
    {disabled}
    class={Class}
    onchange={(x) => {
      onchange?.(x.currentTarget.checked)
    }}
    indeterminate={value === null || value === undefined}
    bind:checked={value}
  />
  {@render children?.()}
</label>

<style>
  input {
    transform: scale(1.25);
    z-index: 0;
  }
</style>
