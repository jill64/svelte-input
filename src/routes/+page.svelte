<script lang="ts">
  import TextArea from '$lib/TextArea.svelte'
  import { FileInput } from '$lib/index.js'
</script>

<h1>svelte-input</h1>
<FileInput>
  <div
    style:border-radius="9999px"
    style:padding="8px 16px"
    style:background="#AAF"
  >
    Custom File Input
  </div>
</FileInput>
<TextArea placeholder="Auto Grow Text Area" />
