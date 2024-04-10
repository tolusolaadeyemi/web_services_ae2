<script>
  export let title;
  export let house;
  import Compose from "$lib/components/Compose.svelte";
</script>

<div class="house_detail">
  <section>
<div class="house_detail">
  <section>
    <h1>{title}</h1>

    <div class="details">
      <div class="metadata">
        {house.constituency}
        {house.address1}
        {house.postcode}
        {house.currentEnergyRating}
        <!-- <a href="/track_home/{house.lmk_key}">Track Home</a> should only show if home is not already tracked-->
      </div>
    </div>
    <div id="notes">
      <Compose />
    </div>
  </section>
</div>

<style>
  .home {
    margin-top: 2rem;
    font-size: var(--size-5);
    border: 1px solid var(--stone-3);
    padding: var(--size-3);
    border-radius: var(--size-2);
    background-color: white;
    box-shadow: var(--shadow-2);
    max-inline-size: 100%;
    color: var(--stone-10);
  }

  .metadata {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
    color: var(--stone-8);
    width: 100%;
    font-size: var(--size-3);
  }

  a {
    color: var(--indigo-10);
    text-decoration: none;
  }
  
  a:hover {
    text-shadow: 0 0 15px var(--indigo-4);
  }
</style>
