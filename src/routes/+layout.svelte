<script>
    import "$lib/app.css";
    export let data;
    console.log('coming from layout', data);
  </script>
  
  <main>
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
          <a href="/plot">Plots</a>
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
  
  <style>
    main {
      padding: var(--size-4);
      min-height: 80vh;
    }
    
    button {
      color: rgb(0, 0, 0);
      padding: 2px;
    }

    button:hover {
      color: rgb(36, 100, 239);
      padding: 2px;
    }
    .title {
      color: white;
      font-weight: bold;
      font-size: var(--font-size-4);
    }
    .title:hover {
      color: rgb(36, 100, 239);
    }

    nav a {
      color: white;
    }

    nav a:hover{
      color: rgb(36, 100, 239);
    }


    nav {
      background-color: black;
      color: white;
      font-size: var(--font-size-3);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>
