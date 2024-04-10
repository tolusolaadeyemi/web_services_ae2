<script>
  import HouseGrid from "$lib/components/HouseGrid.svelte";
  import HouseDetail from "$lib/components/HouseDetail.svelte";
  let homes;
  let term = "";



  async function search() {
    const response = await fetch(`/api/search?q=${term}`);
    const results = await response.json();
    homes = results;
  }


</script>

<main>

  <div class="search">
    <input type="text" bind:value="{term}"/>
     <button on:click="{search}" class="primary-button">Search</button>
  </div>


{#if homes}
{#await homes}
  <div class="loading">
    <span class="loader"></span>
  </div>
{:then home}
  <HouseGrid homes="{home}" />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
{/if}
</main>

<style>
  main {
    margin: var(--size-fluid-4);
  }

  .loading {
    height: 200px;
    display: grid;
    place-items: center;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--teal-2);
    border-bottom-color: var(--teal-6);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
