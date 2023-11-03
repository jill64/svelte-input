<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-input

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-input)](https://npmjs.com/package/@jill64/svelte-input) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-input)](https://npmjs.com/package/@jill64/svelte-input) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-input)](https://npmjs.com/package/@jill64/svelte-input) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-input)](https://npmjs.com/package/@jill64/svelte-input) [![ci.yml](https://github.com/jill64/svelte-input/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-input/actions/workflows/ci.yml) [![stackblitz](https://img.shields.io/badge/StackBlitz-@jill64/svelte-input-dodgerblue)](https://stackblitz.com/edit/jill64-svelte-input?file=src%2Froutes%2FDemo.svelte)

Input component set for Svelte

## [Demo](https://stackblitz.com/edit/jill64-svelte-input?file=src%2Froutes%2FDemo.svelte)

## Install

```sh
npm i @jill64/svelte-input
```

<!----- END GHOST DOCS HEADER ----->

## Install

```sh
npm i -D @jill64/svelte-input
```

## [Demo + Example](https://stackblitz.com/edit/jill64-svelte-input?file=src%2Froutes%2FDemo.svelte)

## Components

### FileInput

Quickly configure file input with custom styles applied

```svelte
<script>
  import { FileInput } from '@jill64/svelte-input'

  /** @param {FileList} files */
  const onFileSelect = (files) => {
    // ...
  }
</script>

<FileInput value="" accept="image/*" onSelect={onFileSelect}>
  <!-- Your Styled Components -->
</FileInput>
```

### ActionButton

Button component with visual feedback to wait for `Promise`

```svelte
<script>
  import { ActionButton } from '@jill64/svelte-input'

  const actionHandler = async () => {
    // ...
  }
</script>

<ActionButton onClick={actionHandler} label="Action Button">
  <!-- Icon Component -->
</ActionButton>
```

### CheckBox

Labeled checkboxes to support bindable `indeterminate` value input

```svelte
<script>
  import { CheckBox } from '@jill64/svelte-input'

  /** @param {boolean} value */
  const onValueChange = (value) => {
    // ...
  }
</script>

<CheckBox value={null} onChange={onValueChange}>
  <!-- Label -->
</CheckBox>
```

### ToggleSwitch

Pre-styled `checkbox` compatible toggle switch component

```svelte
<script>
  import { ToggleSwitch } from '@jill64/svelte-input'

  /** @param {boolean} value */
  const onValueChange = (value) => {
    // ...
  }
</script>

<ToggleSwitch value={false} onChange={onValueChange}>
  <!-- Label -->
</ToggleSwitch>
```

### TextArea

Textarea component that automatically expands input fields according to input content

```svelte
<script>
  import { TextArea } from '@jill64/svelte-input'

  /** @param {string} value */
  const onValueChange = (value) => {
    // ...
  }
</script>

<TextArea
  value="Example Text"
  onChange={onValueChange}
  placeholder="Auto Grow Text Area"
  style="background: inherit; color: inherit;"
/>
```

### Radio

Component that applies input bound to a group to a radio button array

```svelte
<script>
  import { CheckBox } from '@jill64/svelte-input'

  /** @param {string} value */
  const onValueChange = (value) => {
    // ...
  }
</script>

<div style:display="flex" style:flex-direction="column" style:gap="0.5rem">
  <Radio list={['First', 'Second', 'Third']} let:item onSelect={onValueChange}>
    <!-- Label -->
  </Radio>
</div>
```

### Decimal

Numeric input with accessible control buttons and logic to handle fractional issues

```svelte
<script>
  import { Decimal } from '@jill64/svelte-input'

  /** @param {number} value */
  const onValueChange = (value) => {
    // ...
  }
</script>

<fieldset style:border="none">
  <Decimal value={0} onChange={onValueChange} placeholder="Decimal Input" />
</fieldset>
```
