<script lang="ts">
  import { Radio } from '$lib'
  import Demo from './Demo.svelte'
  import { RadioCode } from './RadioCode'

  let value = 'Alpha'
  let disabled = false
</script>

<Demo title="Radio" code={RadioCode({ disabled })} bind:disabled {value}>
  <svelte:fragment slot="description">
    Component that applies input bound to a group to a radio button array.
  </svelte:fragment>
  <fieldset>
    <Radio list={['Alpha', 'Beta', 'Gamma']} let:item bind:value {disabled}>
      <span style:margin-left="4px">
        {item}
      </span>
    </Radio>
  </fieldset>
</Demo>

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: none;
  }
</style>
