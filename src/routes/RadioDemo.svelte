<script lang="ts">
  import { Radio } from '$lib'
  import Demo from './Demo.svelte'
  import { RadioCode } from './RadioCode'

  let value = $state('Alpha')
  let disabled = $state(false)
</script>

{#snippet description()}
  Component that applies input bound to a group to a radio button array.
{/snippet}

{#snippet slot()}
  <fieldset>
    <Radio list={['Alpha', 'Beta', 'Gamma']} bind:value {disabled} />
  </fieldset>
{/snippet}

<Demo title="Radio" {description} {slot} code={RadioCode({ disabled })} bind:disabled {value} />

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: none;
  }
</style>
