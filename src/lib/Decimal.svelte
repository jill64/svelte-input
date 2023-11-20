<script lang="ts">
  import BigNumber from 'bignumber.js'
  import type { HTMLInputAttributes } from 'svelte/elements'

  export let step = 1
  export let max: number | undefined = undefined
  export let min: number | undefined = undefined
  export let value = min ?? 0
  export let Class: HTMLInputAttributes['class'] = undefined
  export let style: HTMLInputAttributes['style'] = undefined
  export let buttonClass: HTMLInputAttributes['class'] = undefined
  export let buttonStyle: HTMLInputAttributes['style'] = undefined
  export let placeholder: HTMLInputAttributes['placeholder'] = undefined
  export let disabled: HTMLInputAttributes['disabled'] = undefined
  export let required: HTMLInputAttributes['required'] = undefined
  export let readonly: HTMLInputAttributes['readonly'] = undefined
  export let attributes: HTMLInputAttributes = {}
  export let onChange: ((value: number) => unknown) | undefined = undefined

  $: stepN = BigNumber(step)

  $: clamp = (n: BigNumber) => {
    if (max !== undefined && n.gt(max)) return max
    if (min !== undefined && n.lt(min)) return min
    return n.toNumber()
  }

  const validation = (n: number) => (isNaN(n) || !isFinite(n) ? min ?? 0 : n)

  $: if (min !== undefined && value < min) {
    value = min
  }

  $: if (max !== undefined && value > max) {
    value = max
  }

  $: set = (
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
</script>

<button
  title="decrease"
  class={buttonClass}
  style={buttonStyle}
  on:click={() => set(stepN.negated().plus(value))}
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
  on:change={(x) => set(BigNumber(x.currentTarget.valueAsNumber))}
  on:input={(x) =>
    set(BigNumber(x.currentTarget.valueAsNumber), {
      skipHandler: true
    })}
  on:input
  on:focus
  on:blur
  on:selectionchange
  on:select
  on:copy
  on:cut
  on:paste
/>
<button
  class={buttonClass}
  style={buttonStyle}
  title="increase"
  on:click={() => set(stepN.plus(value))}
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
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
</style>
