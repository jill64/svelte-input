<script lang="ts">
  import { Layout } from '@jill64/npm-demo-layout'
  import packageJson from '../../package.json'
  import '../app.pcss'
</script>

<Layout {packageJson}>
  <slot />
</Layout>
