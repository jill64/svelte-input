<script lang="ts">
  import { ToggleSwitch } from '$lib'
  import { theme } from '@jill64/svelte-dark-theme'
  import { HighlightAuto } from 'svelte-highlight'

  export let title: string
  export let code: string
  export let label = 'value'
  export let value: unknown
  export let disabled: boolean
</script>

<hr style:border-color={$theme === 'dark' ? '#444' : '#CCC'} />
<section>
  <hgroup>
    <h2 id={title}>
      {title}
      <a href="#{title}">#</a>
    </h2>
    <p class={$theme}><slot name="description" /></p>
  </hgroup>
  <slot name="options" />
  <ToggleSwitch bind:value={disabled}>
    <span style:margin-left="0.5rem">Disable</span>
  </ToggleSwitch>
</section>
<output>
  {label} = {value}
</output>
<div style:overflow="auto">
  <HighlightAuto code={code.trim()} />
</div>
<div>
  <slot {disabled} />
</div>

<style>
  hgroup {
    margin-right: auto;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  p {
    color: gray;
    line-height: 1.5rem;
  }
  :global(code) {
    border-radius: 0.5rem;
  }
  h2 {
    display: flex;
    gap: 0.5rem;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: royalblue;
    visibility: hidden;
  }
  h2:hover a {
    visibility: visible;
  }
  output {
    font-size: x-large;
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap;
    max-height: 300px;
    overflow: auto;
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
  }
  p.dark :global(code) {
    background: rgba(255, 255, 255, 0.1);
    color: peru;
  }
</style>
