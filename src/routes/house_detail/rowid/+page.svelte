<!-- from toot[rowid] -->
<script>
    import HouseDetail from "$lib/components/HouseDetail.svelte";
    import Compose from "$lib/components/Compose.svelte";
    export let data;
  </script>
<a href="/">&#8592; Go Back</a>
<HouseDetail title="House Detail Page" home="{data}" />

{#if data.user}
  <Compose />
{/if}


