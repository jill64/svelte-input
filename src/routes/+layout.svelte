<script lang="ts">
  import { Layout } from '@jill64/npm-demo-layout'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
  import '../app.pcss'

  let { children } = $props()
</script>

<Layout {packageJson} {README}>
  {@render children()}
</Layout>
