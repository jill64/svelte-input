<script lang="ts">
  import { FlipButton, ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { Toaster } from '@jill64/svelte-toast'
  import github from 'svelte-highlight/styles/github'
  import githubDark from 'svelte-highlight/styles/github-dark'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html $theme === 'dark' ? githubDark : github}
</svelte:head>

<Toaster />
<ThemeManager />

<header>
  <hgroup>
    <h1>@jill64/svelte-input</h1>
    <p>➡️ Functional Input Component Set for Svelte</p>
  </hgroup>
  <FlipButton />
  <a href="https://github.com/jill64/svelte-input">
    <GitHubLogo />
  </a>
</header>

<slot />

<style>
  hgroup {
    margin-right: auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    font-family: sans-serif;
    margin: 0 1rem;
  }
  :global(.dark body) {
    background: #161616;
    color: whitesmoke;
  }

  :global(button) {
    border-radius: 9999rem;
    padding: 0.5rem 1rem;
    border: 1px solid #888;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    cursor: pointer;
    color: inherit;
  }
  :global(button:hover) {
    background: rgba(0, 0, 0, 0.1);
  }
  :global(button:active) {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark button:hover) {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark button:active) {
    background: rgba(255, 255, 255, 0.2);
  }
</style>
