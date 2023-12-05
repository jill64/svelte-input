<script lang="ts">
  import { ActionButton } from '$lib'
  import { observable } from '@jill64/async-observer'
  import { toast } from '@jill64/svelte-suite'
  import { ActionButtonCode } from './ActionButtonCode'
  import Demo from './Demo.svelte'

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  let disabled = false

  const { status, observed } = observable()

  $: onClick = observed(async () => {
    await delay(1500)
    $toast.success('Action Complete')
  })
</script>

<Demo
  title="ActionButton"
  code={ActionButtonCode({ disabled })}
  label="$status"
  value={$status}
  bind:disabled
>
  <svelte:fragment slot="description">
    Button component with visual feedback to wait for <code>Promise</code>.
  </svelte:fragment>
  <ActionButton {disabled} {onClick} label="Action Button" Class="px-4 py-2">
    ＋
  </ActionButton>
</Demo>
