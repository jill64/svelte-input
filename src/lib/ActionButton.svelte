<script lang="ts">
  import { DEV } from 'esm-env'
  import { observable, type PromiseStatus } from '@jill64/async-observer'
  import type { Snippet } from 'svelte'
  import { Moon } from 'svelte-loading-spinners'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  let {
    onclick = () => {},
    label = '',
    class: Class = '',
    style = '',
    size = 24,
    gap = '5px',
    color = '',
    disabled = undefined,
    attributes = {},
    debug = false,
    icon = undefined
  }: {
    onclick?: () => unknown
    label?: string
    class?: HTMLButtonAttributes['class']
    style?: HTMLButtonAttributes['style']
    size?: number
    gap?: string
    color?: string
    disabled?: HTMLButtonAttributes['disabled']
    attributes?: HTMLButtonAttributes
    debug?: boolean
    icon?: Snippet<[status?: PromiseStatus]> | undefined
  } = $props()

  let observer = observable()

  let set = observer.observed(onclick)

  let pending = $derived(observer.status === 'PENDING' || (debug && DEV))
  let enable = $derived(!pending && !disabled)

  let height = $derived(`${size}px`)
  let width = $derived(`${size}px`)
</script>

<button
  style:gap
  {...attributes}
  {style}
  style:cursor={disabled ? 'not-allowed' : pending ? 'wait' : 'pointer'}
  class={Class}
  disabled={!enable}
  onclick={() => {
    if (enable) {
      set()
    }
  }}
>
  <span style:height style:width style:font-size="{size}px">
    {#if pending}
      <Moon size={size - 2} color={color || '#AAA'} />
    {:else}
      {@render icon?.(observer.status)}
    {/if}
  </span>
  {label}
  {#if !icon}
    <span style:height style:width></span>
  {/if}
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
