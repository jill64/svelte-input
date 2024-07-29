<script lang="ts">
  import { ActionButton } from '$lib'
  import { observable } from '@jill64/async-observer'
  import { toast } from '@jill64/npm-demo-layout'
  import { ActionButtonCode } from './ActionButtonCode'
  import Demo from './Demo.svelte'

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  let disabled = $state(false)

  let observer = observable()

  let onclick = observer.observed(async () => {
    await delay(1500)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    $toast.success('Action Complete')
  })
</script>

<Demo
  title="ActionButton"
  code={ActionButtonCode({ disabled })}
  label="status"
  value={observer.status}
  bind:disabled
>
  {#snippet description()}
    Button component with visual feedback to wait for <code>Promise</code>.
  {/snippet}
  {#snippet children(disabled)}
    <ActionButton {disabled} {onclick} label="Action Button" class="px-4 py-2">
      ＋
    </ActionButton>
  {/snippet}
</Demo>
