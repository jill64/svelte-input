<script lang="ts">
  import { dev } from '$app/environment'
  import { observable } from '@jill64/async-observer'
  import { Moon } from '@jill64/svelte-loading-spinners'
  import type { HTMLButtonAttributes } from 'svelte/elements'

  export let onClick: () => unknown
  export let label = ''
  export let Class: HTMLButtonAttributes['class'] = ''
  export let style: HTMLButtonAttributes['style'] = ''
  export let size = 24
  export let gap = '5px'
  export let color = ''
  export let disabled: HTMLButtonAttributes['disabled'] = undefined
  export let attributes: HTMLButtonAttributes = {}
  export let debug = false

  const { status, observed } = observable()

  $: set = observed(onClick)

  $: pending = $status === 'PENDING' || (debug && dev)
  $: enable = !pending && !disabled

  $: height = `${size}px`
  $: width = `${size}px`

  $: useIcon = $$slots.default
</script>

<button
  style:gap
  {...attributes}
  {style}
  style:cursor={disabled ? 'not-allowed' : pending ? 'wait' : 'pointer'}
  class={Class}
  disabled={!enable}
  on:click={() => {
    if (enable) {
      set()
    }
  }}
  on:click
>
  <span style:height style:width style:font-size="{size}px">
    {#if pending}
      <Moon size={size - 2} color={color || '#AAA'} />
    {:else}
      <slot {status} />
    {/if}
  </span>
  {label}
  {#if !useIcon}
    <span style:height style:width />
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
