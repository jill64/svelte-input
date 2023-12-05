<script lang="ts">
  import { browser } from '$app/environment'
  import {
    FlipButton,
    ThemeManager,
    Toaster,
    theme
  } from '@jill64/svelte-suite'
  import { HighlightSwitcher } from 'svelte-highlight-switcher'
  import '../app.pcss'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<HighlightSwitcher name={$theme === 'dark' ? 'githubDark' : 'github'} />
<svelte:head>
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
