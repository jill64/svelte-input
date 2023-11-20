<script lang="ts">
  export let list: string[]
</script>

<ul>
  {#each list as item}
    <li><a href="#{item}">{item}</a></li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  a {
    color: royalblue;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
