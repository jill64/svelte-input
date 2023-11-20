export const DecimalCode = ({
  disabled,
  max,
  min
}: {
  disabled: boolean
  min: number
  max: number
}) => /*html*/ `
<script>
  import { Decimal } from '@jill64/svelte-input'
</script>

<fieldset>
  <Decimal bind:value min="${min}" max="${max}"${disabled ? ' disabled' : ''} />
</fieldset>
`
