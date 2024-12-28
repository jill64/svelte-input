<script lang="ts">
  import { FileInput } from '$lib'
  import Demo from './Demo.svelte'
  import { FileInputCode } from './FileInputCode'

  let value = $state('')
  let disabled = $state(false)
</script>

<Demo
  title="FileInput"
  code={FileInputCode({ disabled })}
  bind:disabled
  {value}
>
  {#snippet description()}
    Quickly configure file input with custom styles applied.
  {/snippet}
  <FileInput bind:value {disabled}>
    <div>Custom File Input</div>
  </FileInput>
</Demo>

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
