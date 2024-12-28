<script lang="ts">
  import { dev } from '$app/environment'
  import { observable, type PromiseStatus } from '@jill64/svelte-observer'
    import type { Snippet } from 'svelte'
  import { Moon } from 'svelte-loading-spinners'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  let {
    onClick,
    label = '',
    Class = '',
    style = '',
    size = 24,
    gap = '5px',
    color = '',
    disabled = undefined,
    attributes = {},
    debug = false,
    children = undefined
  } : {
    onClick: () => unknown
    label?: string
    Class?: HTMLButtonAttributes['class']
    style?: HTMLButtonAttributes['style']
    size?: number
    gap?: string
    color?: string
    disabled?: HTMLButtonAttributes['disabled']
    attributes?: HTMLButtonAttributes
    debug?: boolean
    children?: Snippet<[PromiseStatus]>
  } = $props()

  let { status, observed } = $derived(observable())

  let set = $derived(observed(onClick))

  let pending = $derived(status === 'PENDING' || (debug && dev))
  let enable = $derived(!pending && !disabled)

  let height = $derived(`${size}px`)
  let width = $derived(`${size}px`)

  let useIcon = $derived(children)
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
      {@render children?.(status)}
    {/if}
  </span>
  {label}
  {#if !useIcon}
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
