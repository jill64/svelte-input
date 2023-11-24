export const SelectCode = ({
  grouped,
  disabled
}: {
  grouped: boolean
  disabled: boolean
}) => /*html*/ `
<script>
  import { Select } from '@jill64/svelte-input'
</script>

<Select
  list={${
    grouped
      ? `{
    Num: { list: ['One', 'Two', 'Three'] },
    Char: { list: ['A', 'B', 'C'] }
  }`
      : `['One', 'Two', 'Three', 'A', 'B', 'C']`
  }}
  bind:value${disabled ? '\n  disabled' : ''}
  style="background: inherit; padding: 0.5rem; font-size: large; color: inherit; border: 1px solid #888;"
/>
`
