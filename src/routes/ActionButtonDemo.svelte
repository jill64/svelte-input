<script lang="ts">
  import { ActionButton } from '$lib'
  import { toast } from '@jill64/npm-demo-layout'
  import { observable } from '@jill64/svelte-observer'
  import { ActionButtonCode } from './ActionButtonCode'
  import Demo from './Demo.svelte'

  const delay = (ms: number) =>
    // eslint-disable-next-line no-undef
    new Promise((resolve) => setTimeout(resolve, ms))

  let disabled = $state(false)

  let { status, observed } = $derived(observable())

  let onClick = $derived(
    observed(async () => {
      await delay(1500)
      toast.success('Action Complete')
    })
  )
</script>

<Demo
  title="ActionButton"
  code={ActionButtonCode({ disabled })}
  label="$status"
  value={status}
  bind:disabled
>
  {#snippet description()}
    Button component with visual feedback to wait for <code>Promise</code>.
  {/snippet}
  <ActionButton {disabled} {onClick} label="Action Button" Class="px-4 py-2">
    ＋
  </ActionButton>
</Demo>
