<script lang="ts">
  import type { Action } from 'svelte/action'
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

  let height = `calc((${fontSize} * ${
    (value.match(/\n/g)?.length ?? 0) + 1
  } * ${lineHeight}) + (${borderWidth} * 2) + ${paddingTop} + ${paddingBottom})`

  $: action = ((node) => {
    const update = () => {
      const { borderWidth } = getComputedStyle(node)
      const state = scrollY
      node.style.height = '0px'
      height = `calc(${node.scrollHeight}px + (${borderWidth} * 2))`
      document.documentElement.scrollTop = state
    }

    update()

    return {
      update
    }
  }) as Action<HTMLTextAreaElement, unknown>

  let innerWidth = 0
</script>

<svelte:window bind:innerWidth />
<textarea
  {...attributes}
  class={Class}
  {placeholder}
  {disabled}
  {required}
  {readonly}
  {style}
  bind:value
  use:action={{ value, innerWidth }}
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
