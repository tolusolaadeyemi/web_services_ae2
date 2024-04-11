<script>
  // import "$lib/app.css";
  import "$lib/custom.css";
  export let data;
  console.log("coming from layout", data);
</script>

<main>
 <title>EPC Search Tool</title>
  <nav>
    <a class="title" href="/">Homepage</a>
    {#if data.user}
      <form method="POST" action="?/logout">
        <button type="submit">{data.user} - log out</button>
      </form>
      <span>
        <a href="/search">Search EPC</a>
        <a href="/all_homes">All Homes</a>
        <a href="/tracked">Tracked Homes</a>
      </span>
    {:else}
      <span>
        <a href="/login">Login</a> or <a href="/register">register</a> for an account
      </span>
    {/if}
  </nav>
  <article>
    <slot />
  </article>
</main>
