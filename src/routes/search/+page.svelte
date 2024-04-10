<script>
  import HouseGrid from "$lib/components/HouseGrid.svelte";
  let homes;
  let term = "";



  async function search() {
    const response = await fetch(`/api/search?q=${term}`);
    const results = await response.json();
    homes = results;
  }


</script>

<main>

  <div class="search-page">
    <h1>EPC Search Page</h1>
    <div class="filters">
        <label for="FilterBy">Filter by:</label>
        <select class="filter-select">
          <option value="">Energy Band</option>
        </select>
        <select class="filter-select">
          <option value="">Property Type</option>
        </select>
    </div>
  </div>

  <div class="search">
    <label for="search">Search for a property:</label>
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

