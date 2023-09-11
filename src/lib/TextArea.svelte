<script lang="ts">
  import { onMount } from 'svelte'
  import type { HTMLTextareaAttributes } from 'svelte/elements'

  export let value = ''
  export let Class: HTMLTextareaAttributes['class'] = ''
  export let style: HTMLTextareaAttributes['style'] = ''
  export let fontSize = '1rem'
  export let lineHeight = 1.5
  export let padding = '4px'
  export let paddingX = padding
  export let paddingY = padding
  export let paddingLeft = paddingX
  export let paddingRight = paddingX
  export let paddingTop = paddingY
  export let paddingBottom = paddingY
  export let borderWidth = '1px'
  export let placeholder: HTMLTextareaAttributes['placeholder'] = undefined
  export let disabled: HTMLTextareaAttributes['disabled'] = undefined
  export let required: HTMLTextareaAttributes['required'] = undefined
  export let readonly: HTMLTextareaAttributes['readonly'] = undefined
  export let attributes: HTMLTextareaAttributes = {}
  export let onChange: ((s: string) => unknown) | undefined = undefined

  let textarea: HTMLTextAreaElement | null
  let height = `calc((${fontSize} * ${
    (value.match(/\n/g)?.length ?? 0) + 1
  } * ${lineHeight}) + (${borderWidth} * 2) + ${paddingTop} + ${paddingBottom})`

  const resize = () => {
    if (textarea) {
      const { borderWidth } = getComputedStyle(textarea)
      const state = scrollY
      textarea.style.height = '0px'
      height = `calc(${textarea.scrollHeight}px + (${borderWidth} * 2))`
      document.documentElement.scrollTop = state
    }
  }

  $: {
    value
    resize()
  }

  onMount(resize)
</script>

<svelte:window on:resize={resize} />
<textarea
  {...attributes}
  class={Class}
  {placeholder}
  {disabled}
  {required}
  {readonly}
  {style}
  bind:value
  bind:this={textarea}
  on:change={(x) => onChange?.(x.currentTarget.value)}
  on:change
  on:input
  on:focus
  on:blur
  on:selectionchange
  on:select
  on:input
  on:copy
  on:cut
  on:paste
  style:height
  style:resize="none"
  style:font-size={fontSize}
  style:line-height={lineHeight}
  style:padding-top={paddingTop}
  style:padding-bottom={paddingBottom}
  style:padding-left={paddingLeft}
  style:padding-right={paddingRight}
  style:border-width={borderWidth}
/>
