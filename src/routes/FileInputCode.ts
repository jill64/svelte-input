export const FileInputCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { FileInput } from '@jill64/svelte-input'
</script>

{#snippet label()}
  <div>
    Custom File Input
  </div>
{/snippet}

<FileInput bind:value {label} ${disabled ? 'disabled ' : ''} />

<style>
  div {
    padding: "8px 16px";
    background: "#77F";
    /* ... */
  }
</style>
`
