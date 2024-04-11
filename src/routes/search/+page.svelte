<script>
  import HouseGrid from "$lib/components/HouseGrid.svelte";
  let homes;
  let term = "";
  let filter ="";
  let response



  async function search() {
    if(filter){
      response = await fetch(`/api/search?f=${filter}&q=${term}`);
    }else{
      response = await fetch(`/api/search?f=postcode&q=${term}`);
    }
    const results = await response.json();
    homes = results;
  }


</script>

<main>

  <div class="search-page">
    <h1>EPC Search Page</h1>
    <div class="filters">
        <label for="FilterBy">Filter by:</label>
        <select class="filter-select" bind:value="{filter}">
          <option value="energy-band">Energy Band</option>
          <option value="property-type">Property Type</option>
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

