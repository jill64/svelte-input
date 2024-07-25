<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    value = $bindable(''),
    accept = undefined,
    multiple = undefined,
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    onchange = undefined,
    label = undefined
  }: {
    value: string
    accept?: HTMLInputAttributes['accept']
    multiple?: HTMLInputAttributes['multiple']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onchange?: ((files: FileList) => unknown) | undefined
    label?: Snippet | undefined
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
        onchange?.(files)
      }
    }}
    hidden
  />
  {@render label?.()}
</label>
