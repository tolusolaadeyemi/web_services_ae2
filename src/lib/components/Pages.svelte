<script>
  import pagination from "./pagination.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();


  export let pages;
  export let page;


  function changePage(pg) {
     dispatch('change', { page: pg });
  }
</script>

<nav aria-label="pagination">
  {#if pages > 1}
    <div class="pages">
      {#each pagination(page, pages) as pg}
        {#if pg == "..."}
          <span>...</span>
        {:else}
          <button
            class:primary-button="{pg === page}"
            aria-current="{pg === page}"
            on:click="{changePage(pg)}">{pg}</button
          >
        {/if}
      {/each}
    </div>
    <div>
      {#if page <= pages && page > 1}
        <button on:click="{changePage(page - 1)}">Previous</button>
      {/if}
      {#if page < pages}
        <button on:click="{changePage(page + 1)}">Next</button>
      {/if}
    </div>
  {/if}
</nav>

<style>
  nav {
    margin-top: var(--size-8);
    display: flex;
  }

  .pages {
    flex: 1;
    flex-shrink: 1;
  }

  .pages > * {
    margin-inline: 5px;
  }
</style>