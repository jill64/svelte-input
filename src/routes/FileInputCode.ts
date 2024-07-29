export const FileInputCode = ({ disabled }: { disabled: boolean }) => /*html*/ `
<script>
  import { FileInput } from '@jill64/svelte-input'
</script>

<FileInput bind:value {label} ${disabled ? 'disabled ' : ''}>
  <div>
    Custom File Input
  </div>
</FileInput>

<style>
  div {
    padding: "8px 16px";
    background: "#77F";
    /* ... */
  }
</style>
`
