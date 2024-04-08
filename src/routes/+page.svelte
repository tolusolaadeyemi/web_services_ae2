<script>
    import AllHomes from "$lib/components/AllHomes.svelte";
    //import HouseDetail "$lib/components/HouseDetail.svelte";
    import Homepage from "$lib/components/Homepage.svelte";


    export let data;
    let homes = data.homes;
  </script>


{#if data.user}
    <AllHomes />
    {:else}
    <Homepage />
  {/if}
<!-- 
  {#each homes as homes}
  <HouseDetail toot="{toot}" />
 {/each}  -->

