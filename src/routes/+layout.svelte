<script lang="ts">
  import { browser } from '$app/environment'
  import { FlipButton, ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { Toaster } from '@jill64/svelte-toast'
  import github from 'svelte-highlight/styles/github'
  import githubDark from 'svelte-highlight/styles/github-dark'
  import '../app.pcss'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html $theme === 'dark' ? githubDark : github}
  {#if browser}
    <meta data-testid="hydrated" />
  {/if}
</svelte:head>

<Toaster />
<ThemeManager />

<header class="flex justify-between items-center gap-4 my-4">
  <hgroup class="mr-auto">
    <h1 class="text-4xl font-bold my-4">@jill64/svelte-input</h1>
    <p>➡️ Functional Input Component Set for Svelte</p>
  </hgroup>
  <FlipButton />
  <a href="https://github.com/jill64/svelte-input">
    <GitHubLogo />
  </a>
</header>

<slot />
