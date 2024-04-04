<script>
    import Tracked from "$lib/components/Tracked.svelte";
    export let data;
    // export let form;
    let userhomes = data.userhomes;
  </script>

<Tracked title="Tracked Homes" />
{#each userhomes as userhome}
  <Tracked home="{userhome}" />
{/each}