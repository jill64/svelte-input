<script lang="ts">
  import ActionButtonDemo from './ActionButtonDemo.svelte'
  import CheckBoxDemo from './CheckBoxDemo.svelte'
  import CheckListDemo from './CheckListDemo.svelte'
  import DecimalDemo from './DecimalDemo.svelte'
  import FileInputDemo from './FileInputDemo.svelte'
  import Index from './Index.svelte'
  import RadioDemo from './RadioDemo.svelte'
  import SelectDemo from './SelectDemo.svelte'
  import ToggleSwitchDemo from './ToggleSwitchDemo.svelte'

  const list = [
    'ActionButton',
    'CheckBox',
    'CheckList',
    'Decimal',
    'FileInput',
    'Radio',
    'ToggleSwitch',
    'Select'
  ]
</script>

<nav>
  <h2 class="text-2xl font-bold my-2">Index</h2>
  <Index {list} />
</nav>
<main class="grid cols-auto-2">
  <ActionButtonDemo />
  <CheckBoxDemo />
  <CheckListDemo />
  <DecimalDemo />
  <FileInputDemo />
  <RadioDemo />
  <ToggleSwitchDemo />
  <SelectDemo />
</main>

<style>
  main {
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
