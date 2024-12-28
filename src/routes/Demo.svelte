<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { Menu } from '@jill64/svelte-menu'
  import type { Snippet } from 'svelte'
  import { listen } from 'svelte-mq-store'
  import { slide } from 'svelte/transition'

  let {
    title = '',
    code = '',
    label = 'value',
    value,
    disabled = $bindable(),
    description,
    options,
    children
  }: {
    title?: string
    code?: string
    label?: string
    value: unknown
    disabled: boolean
    description: Snippet
    options?: Snippet
    children: Snippet<[boolean]>
  } = $props()

  let isMobile = $derived(listen('(max-width: 640px)'))
</script>

<hr class="border mt-4 border-zinc-500 dark:border-zinc-700" />
<section>
  <hgroup class="mr-auto">
    <h2 class="font-bold text-2xl" id={title}>
      {title}
      <a class="invisible text-blue-500 hover:underline" href="#{title}">#</a>
    </h2>
    <p class="text-zinc-500 leading-loose dark:text-zinc-400 my-2">
      {@render description()}
    </p>
  </hgroup>
  {@render options?.()}
  <ToggleSwitch bind:value={disabled}>
    <span style:margin-left="0.5rem">Disable</span>
  </ToggleSwitch>
</section>
<output
  class="overflow-auto bg-zinc-400 dark:bg-gray-900 p-2 rounded max-h-80 whitespace-pre-wrap font-mono text-xl"
>
  {label} = {value}
</output>
<Menu
  initialOpened={!isMobile.v}
  Class="overflow-auto"
  summaryClass="rounded-md py-1 px-2 push-effect dark:pop-effect"
  noOuterClosing
>
  {#snippet button(state)}
    {state === 'CLOSED' || state === 'CLOSING' ? '▷' : '▽'} Code
  {/snippet}
  {#snippet contents()}
    <div transition:slide>
      <HighlightSvelte code={code.trim()} />
    </div>
  {/snippet}
</Menu>
<div>
  {@render children(disabled)}
</div>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  h2:hover a {
    visibility: visible;
  }
  hr {
    width: 100%;
    grid-column: 1 / span 2;
    border-style: solid;
    border-top: 1px;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 640px) {
    hr {
      grid-column: 1 / 1;
    }
  }
  p :global(code) {
    background: rgba(0, 0, 0, 0.25);
    color: chocolate;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  :global(.dark p code) {
    background: rgba(255, 255, 255, 0.1);
    color: peru;
  }
</style>
