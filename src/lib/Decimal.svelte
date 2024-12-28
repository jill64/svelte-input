<script lang="ts">
  import BigNumber from 'bignumber.js'
  import type { HTMLInputAttributes } from 'svelte/elements'

  let {
    step = 1,
    max,
    min,
    value = min ?? 0,
    Class = '',
    style = '',
    buttonClass,
    buttonStyle = '',
    placeholder,
    disabled,
    required,
    readonly,
    attributes = {},
    onChange
  }: {
    step?: number
    max?: number
    min?: number
    value?: number
    Class?: HTMLInputAttributes['class']
    style?: HTMLInputAttributes['style']
    buttonClass?: HTMLInputAttributes['class']
    buttonStyle?: HTMLInputAttributes['style']
    placeholder?: HTMLInputAttributes['placeholder']
    disabled?: HTMLInputAttributes['disabled']
    required?: HTMLInputAttributes['required']
    readonly?: HTMLInputAttributes['readonly']
    attributes?: HTMLInputAttributes
    onChange?: (value: number) => unknown
  } = $props()

  let stepN = $derived(BigNumber(step))

  let clamp = $derived((n: BigNumber) => {
    if (max !== undefined && n.gt(max)) return max
    if (min !== undefined && n.lt(min)) return min
    return n.toNumber()
  })

  let validation = $derived((n: number) =>
    isNaN(n) || !isFinite(n) ? (min ?? 0) : n
  )

  $effect(() => {
    if (min !== undefined && value < min) {
      value = min
    }
  })

  $effect(() => {
    if (max !== undefined && value > max) {
      value = max
    }
  })

  let set = $derived(
    (
      n: BigNumber,
      options?: {
        skipHandler?: boolean
      }
    ) => {
      const clamped = clamp(n)
      value = validation(clamped)
      if (!options?.skipHandler) {
        onChange?.(value)
      }
    }
  )

  let cursor = $derived(disabled ? 'not-allowed' : 'pointer')
</script>

<button
  title="decrease"
  class={buttonClass}
  style={buttonStyle}
  style:cursor
  onclick={() => set(stepN.negated().plus(value))}
  {disabled}
>
  ー
</button>
<input
  {value}
  type="number"
  class={Class}
  {style}
  {...attributes}
  {disabled}
  {placeholder}
  {required}
  {readonly}
  {step}
  onchange={(x) => set(BigNumber(x.currentTarget.valueAsNumber))}
  oninput={(x) =>
    set(BigNumber(x.currentTarget.valueAsNumber), {
      skipHandler: true
    })}
/>
<button
  class={buttonClass}
  style={buttonStyle}
  style:cursor
  title="increase"
  onclick={() => set(stepN.plus(value))}
  {disabled}
>
  ＋
</button>

<style>
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
</style>
