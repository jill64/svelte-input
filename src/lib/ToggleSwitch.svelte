<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'

  export let height = '2rem'
  export let padGap = '0.25rem'
  export let padColor = 'white'
  export let offColor = 'gray'
  export let onColor = 'green'
  export let style = ''
  export let value = false
  export let Class: HTMLInputAttributes['class'] = ''
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onChange: ((s: boolean) => unknown) | undefined = undefined

  $: width = `calc(${height} * 1.6)`
  $: padSize = `calc(${height} - ${padGap} * 2)`
  $: translateX = value ? `calc(${width} - ${padGap} * 2 - ${padSize})` : '0px'
</script>

<label
  style:cursor="pointer"
  style:display="inline-flex"
  style:align-items="center"
>
  <input
    type="checkbox"
    bind:checked={value}
    on:change={(x) => onChange?.(x.currentTarget.checked)}
    on:change
    on:input
    on:click
    {...attributes}
    {disabled}
    {readonly}
    {required}
    hidden
  />
  <span
    style:cursor="pointer"
    style:position="relative"
    style:background={value ? onColor : offColor}
    style:height
    style:width
    style:--position-x={translateX}
    style:--pad-color={padColor}
    style:--pad-gap={padGap}
    style:--pad-size={padSize}
    class={Class}
    {style}
  />
  <slot />
</label>

<style>
  span {
    border-radius: 9999px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }
  span::before {
    content: '';
    position: absolute;
    translate: var(--position-x) 0px;
    height: var(--pad-size);
    width: var(--pad-size);
    top: var(--pad-gap);
    left: var(--pad-gap);
    background-color: var(--pad-color);
    border-radius: 9999px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }
</style>
