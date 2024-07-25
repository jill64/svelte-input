export const ActionButtonCode = ({
  disabled
}: {
  disabled: boolean
}) => /*html*/ `
<script>
  import { ActionButton } from '@jill64/svelte-input'

  const actionHandler = async () => {
    await delay(1500)
    $toast.success('Action Complete')
  }
</script>

{#snippet icon()}
  ＋
{/snippet}

<ActionButton
  onClick={actionHandler}
  label="Action Button"${disabled ? '\n  disabled' : ''}
  let:status
  {icon}
/>
`
