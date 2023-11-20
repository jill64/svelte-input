<script lang="ts">
  import ActionButtonDemo from './ActionButtonDemo.svelte'
  import CheckBoxDemo from './CheckBoxDemo.svelte'
  import CheckListDemo from './CheckListDemo.svelte'
  import DecimalDemo from './DecimalDemo.svelte'
  import FileInputDemo from './FileInputDemo.svelte'
  import Index from './Index.svelte'
  import RadioDemo from './RadioDemo.svelte'
  import TextAreaDemo from './TextAreaDemo.svelte'
  import ToggleSwitchDemo from './ToggleSwitchDemo.svelte'

  const list = [
    'ActionButton',
    'CheckBox',
    'CheckList',
    'Decimal',
    'FileInput',
    'Radio',
    'TextArea',
    'ToggleSwitch'
  ]
</script>

<nav>
  <h2>Index</h2>
  <Index {list} />
</nav>
<main>
  <ActionButtonDemo />
  <CheckBoxDemo />
  <CheckListDemo />
  <DecimalDemo />
  <FileInputDemo />
  <RadioDemo />
  <TextAreaDemo />
  <ToggleSwitchDemo />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    column-gap: 1rem;
    padding: 1rem 0;
  }
  @media (max-width: 640px) {
    main {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
