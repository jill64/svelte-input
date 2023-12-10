<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import { Menu } from '@jill64/svelte-menu'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { listen } from 'svelte-mq-store'
  import { slide } from 'svelte/transition'

  export let title: string
  export let code: string
  export let label = 'value'
  export let value: unknown
  export let disabled: boolean

  $: isMobile = listen('(max-width: 640px)')
</script>

<hr class="border mt-4 border-zinc-500 dark:border-zinc-700" />
<section>
  <hgroup class="mr-auto">
    <h2 class="font-bold text-2xl" id={title}>
      {title}
      <a class="invisible text-blue-500 hover:underline" href="#{title}">#</a>
    </h2>
    <p class="text-zinc-500 leading-loose dark:text-zinc-400 my-2">
      <slot name="description" />
    </p>
  </hgroup>
  <slot name="options" />
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
  initialOpened={!$isMobile}
  Class="overflow-auto"
  summaryClass="rounded-md py-1 px-2 push-effect dark:pop-effect"
  noOuterClosing
  let:state
>
  {state === 'CLOSED' || state === 'CLOSING' ? '▷' : '▽'} Code
  <div slot="contents" transition:slide>
    <HighlightSvelte code={code.trim()} />
  </div>
</Menu>
<div>
  <slot {disabled} />
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
