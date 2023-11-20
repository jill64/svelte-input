<script lang="ts">
  import { TextArea } from '$lib'
  import Demo from './Demo.svelte'
  import { TextAreaCode } from './TextAreaCode'

  let value = ''
  let disabled = false
</script>

<Demo title="TextArea" code={TextAreaCode({ disabled })} bind:disabled {value}>
  <svelte:fragment slot="description">
    <code>{'<textarea>'}</code> component that automatically expands input fields
    according to input content.
  </svelte:fragment>
  <TextArea
    bind:value
    {disabled}
    placeholder="Auto Growing Text Area"
    style="background: inherit; color: inherit; width: 90%; max-height: 300px; border-radius: 0.5rem; border: 1px solid #888;"
    padding="0.5rem"
  />
</Demo>
