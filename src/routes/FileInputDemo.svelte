<script lang="ts">
  import { FileInput } from '$lib'
  import Demo from './Demo.svelte'
  import { FileInputCode } from './FileInputCode'

  let value = $state('')
  let disabled =$state(false)
</script>

{#snippet description()}
  Quickly configure file input with custom styles applied.
{/snippet}

{#snippet label()}
  <div>Custom File Input</div>
{/snippet}

{#snippet slot()}
  <FileInput bind:value {label} {disabled} />
{/snippet}

<Demo
  title="FileInput"
  code={FileInputCode({ disabled })}
  bind:disabled
  {description}
  {slot}
  {value}
/>

<style>
  div {
    display: 'flex';
    background: #66f;
    font-weight: bold;
    justify-content: center;
    border-radius: 9999rem;
    padding: 0.5rem 1rem;
  }
  div:hover {
    background: #55e;
  }
  div:active {
    background: #44d;
  }
</style>
