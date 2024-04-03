<script>
    import AllHomes from "$lib/components/AllHomes.svelte";
    //import HouseDetail "$lib/components/HouseDetail.svelte";
    export let data;
    let homes = data.homes;
  </script>


{#if data.user}
    <AllHomes />
  {/if}
<!-- 
  {#each homes as homes}
  <HouseDetail toot="{toot}" />
 {/each}  -->

