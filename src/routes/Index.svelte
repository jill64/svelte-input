<script lang="ts">
  export let list: string[]
</script>

<ul>
  {#each list as item, index (index)}
    <li class="list-disc list-inside py-1">
      <a class="text-blue-500 hover:underline" href="#{item}">{item}</a>
    </li>
  {/each}
</ul>
