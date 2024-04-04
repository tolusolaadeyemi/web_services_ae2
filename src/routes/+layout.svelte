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
          <a href="/house_detail">House Detail Page</a>
          <a href="/tracked">Tracked Homes</a>
        </span>
        {:else}
        <span>
          <a href="/login">Login</a> or <a href="/register">register</a> for an account
        </span>
      {/if}
    </nav>
    <article>
      <div class="basics">
        <section>
          <header>
            <h1>Find an energy certificate</h1>
          </header>
          <p>You can use this service to find an existing:</p>
          <ul>
            <li>energy performance certificate (EPC)</li>
          </ul>

          <p>You can search for a certificate by postcode, street name and town, or certificate number.</p>

          <p>To start using this service, please register or login</p>
        </section>
      </div>
      <slot />
    </article>
  </main>
  
  <style>
    main {
      padding: var(--size-4);
      min-height: 80vh;
      display: grid;
      grid-template-rows: 50px 1fr;
    }
    .title {
      font-weight: bold;
      font-size: var(--font-size-4);
    }
    .title:hover {
      text-shadow: none;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  </style>
