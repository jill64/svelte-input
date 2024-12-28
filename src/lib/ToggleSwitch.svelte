<script lang="ts">
    import type { Snippet } from 'svelte'
  import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    height = '2rem',
    padGap = '0.25rem',
    padColor = '',
    offColor = '',
    onColor = '',
    style = '',
    value = $bindable(false),
    Class = '',
    disabled = undefined,
    required = undefined,
    readonly = undefined,
    attributes = {},
    onChange = undefined,
    children
  }: {
    height?: string
    padGap?: string
    padColor?: string
    offColor?: string
    onColor?: string
    style?: string
    value?: boolean
    Class?: HTMLInputAttributes['class']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onChange?: (s: boolean) => unknown
    children?: Snippet
  } = $props()

  let width = $derived(`calc(${height} * 1.6)`)
  let padSize = $derived(`calc(${height} - ${padGap} * 2)`)
  let translateX = $derived(value ? `calc(${width} - ${padGap} * 2 - ${padSize})` : '0px')

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<label style:cursor style:display="inline-flex" style:align-items="center">
  <input
    type="checkbox"
    bind:checked={value}
    onchange={(x) => onChange?.(x.currentTarget.checked)}
    {...attributes}
    {disabled}
    {readonly}
    {required}
    hidden
  />
  <span
    style:cursor
    style:position="relative"
    style:background={value
      ? onColor || (disabled ? 'gray' : 'green')
      : offColor || (disabled ? 'dimgray' : 'gray')}
    style:height
    style:width
    style:flex-shrink="0"
    style:--position-x={translateX}
    style:--pad-color={padColor || (disabled ? 'lightgray' : 'white')}
    style:--pad-gap={padGap}
    style:--pad-size={padSize}
    class={Class}
    {style}
  ></span>
  {@render children?.()}
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
