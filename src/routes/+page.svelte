<script>
    import Toot from "$lib/components/Toot.svelte";
    import Compose from "$lib/components/Compose.svelte";
    export let data;
    let toots = data.toots;
  </script>
  
  {#if data.user}
    <Compose />
  {/if}
  
  {#each toots as toot}
    <Toot toot="{toot}" />
  {/each}
  