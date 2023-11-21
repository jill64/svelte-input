<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'

  export let value = ''
  export let accept: HTMLInputAttributes['accept'] = undefined
  export let multiple: HTMLInputAttributes['multiple'] = undefined
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onSelect: ((files: FileList) => unknown) | undefined = undefined

  $: cursor = disabled ? 'not-allowed' : 'pointer'
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
    on:change
    on:input
    on:change={(x) => {
      const files = x.currentTarget.files
      if (files) {
        onSelect?.(files)
      }
    }}
    hidden
  />
  <slot />
</label>
