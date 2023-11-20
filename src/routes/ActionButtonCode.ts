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

<ActionButton
  style="border-radius: 9999px; border: 1px solid #555; padding:8px 16px;"
  onClick={actionHandler}
  label="Action Button"${disabled ? '\n  disabled' : ''}
  let:status
>
  ＋
</ActionButton>
`
