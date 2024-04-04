<script>
    import AllHomes from "$lib/components/AllHomes.svelte";
    export let data;
    export let form;
    let homes = data.homes;
  </script>

<AllHomes title="All Homes" form="{form}" />
{#each homes as home}
  <AllHomes home="{home}" />
{/each}
