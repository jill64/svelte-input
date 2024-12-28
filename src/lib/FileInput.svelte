<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    value = $bindable(''),
    accept,
    multiple,
    disabled,
    required,
    readonly,
    attributes = {},
    onSelect,
    children
  }: {
    value?: string
    accept?: HTMLInputAttributes['accept']
    multiple?: HTMLInputAttributes['multiple']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onSelect?: (files: FileList) => unknown
    children?: Snippet
  } = $props()

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<label style:cursor style:display="inline-block">
  <input
    type="file"
    {...attributes}
    {accept}
    {multiple}
    {disabled}
    {required}
    {readonly}
    bind:value
    onchange={(x) => {
      const files = x.currentTarget.files
      if (files) {
        onSelect?.(files)
      }
    }}
    hidden
  />
  {@render children?.()}
</label>
