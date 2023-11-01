<script lang="ts">
  import {
    ActionButton,
    CheckBox,
    Decimal,
    FileInput,
    Radio,
    TextArea,
    ToggleSwitch
  } from '$lib'
  import { Toaster, toast } from '@jill64/svelte-toast'

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
</script>

<Toaster />
<header>
  <h1>svelte-input</h1>
  <a href="https://github.com/jill64/svelte-input">GitHub</a>
</header>
<main>
  <FileInput>
    <div
      style:border-radius="9999px"
      style:padding="8px 16px"
      style:background="#77F"
      style:display="flex"
      style:justify-content="center"
    >
      Custom File Input
    </div>
  </FileInput>
  <ActionButton
    style="border-radius: 9999px; font-size: 16px; border: 1px solid #555; padding:8px 16px; background: transparent; color: inherit"
    onClick={async () => {
      await delay(1500)
      $toast.success('Action Complete')
    }}
    label="Action Button"
  >
    ＋
  </ActionButton>
  <CheckBox value={null}>
    <span style:margin-left="4px"> Check Box </span>
  </CheckBox>
  <ToggleSwitch>
    <span style:margin-left="4px"> Toggle Switch </span>
  </ToggleSwitch>
  <TextArea
    placeholder="Auto Grow Text Area"
    style="background: inherit; color: inherit;"
  />
  <div style:display="flex" style:flex-direction="column" style:gap="0.5rem">
    <Radio list={['First', 'Second', 'Third']} let:item onSelect={console.log}>
      <span style:margin-left="4px">
        {item}
      </span>
    </Radio>
  </div>
  <fieldset style:border="none">
    <Decimal
      placeholder="Decimal Input"
      style="color: inherit; background: inherit; border: solid 1px #888;"
      buttonStyle="color: inherit; background: inherit; border: solid 1px #888;"
    />
  </fieldset>
</main>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #222;
      color: white;
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.5rem;
  }
  main {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
