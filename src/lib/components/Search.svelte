<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let placeholder;
  let term = "";

  function search() {
    if (term) {
      dispatch("search", {
        term: term,
      });
    }
    console.log(term)
  }

  function key(e) {
    if (e.keyCode === 13) search();
  }
</script>
<div class="filters">
  <label for="Filtering">Filter by:</label>
    <select class="filter-select">
        <option value="">Energy Band</option>
    </select>
    <select class="filter-select">
        <option value="">Property Type</option>
    </select>
</div>
<div class="search">
  <input
    type="text"
    placeholder="{placeholder}"
    on:keydown="{key}"
    bind:value="{term}"
  />
  <button on:click="{search}" class="primary-button">Search</button>
</div>

<style>
  .search {
    display: flex;
    gap: var(--size-fluid-2);
  }

  input {
    flex: 1;
  }
</style>