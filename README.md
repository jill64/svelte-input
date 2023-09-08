# svelte-input

Input component set for Svelte

## Install

```sh
npm i -D @jill64/svelte-input
```

## Example

```svelte
<script>
  import { FileInput, TextArea } from '@jill64/svelte-input'

  const fileHandler = (files /* File[] */) => {
    // ...
  }

  const onTextChange = (text /* string */) => {
    // ...
  }
</script>

<FileInput
  value="Default Value (bindable)"
  accept="image/*"
  onSelect={fileHandler}
>
  <div style="Your custom style">Custom Button</div>
</FileInput>
<TextArea
  value="Default Value (bindable)"
  placeholder="Auto Grow Text Area"
  onChange={onTextChange}
/>
```
