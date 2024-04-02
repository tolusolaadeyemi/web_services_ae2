<script>
    export let title;
    export let button;
    export let form;
  </script>
  
  <section>
    <div class="register">
      <h1>{title}</h1>
  
      {#if form?.error}
        <p class="error">{form.error}</p>
      {/if}
  
      <form method="POST">
        <label
          >Username
          <div>
            <input type="text" name="username" />
          </div>
        </label>
  
        <label
          >Password
          <div>
            <input type="password" name="password" />
          </div>
        </label>
  
        <button type="submit">{button}</button>
      </form>
    </div>
  </section>
  
  <style>
    section {
      display: grid;
      place-items: center;
      height: 100%;
    }
    
    .register {
      width: 100%;
      max-width: 24rem;
      background-color: var(--indigo-0);
      border: 1px solid var(--stone-3);
      padding: var(--size-3);
      border-radius: var(--size-2);
      box-shadow: var(--shadow-3);
    }
    
    h1 {
      font-size: var(--font-size-3);
      margin-bottom: var(--size-4);
      padding-bottom: var(--size-3);
    }
    
    form > * {
      display: block;
      margin-top: var(--size-2);
    }
    
    input {
      background-color: white;
      margin-top: var(--size-2);
      border: 1px solid var(--stone-3);
      width: 100%;
    }
    
    button {
      margin-top: var(--size-4);
      margin-left: auto;
    }
    
    .error {
      color: var(--red-8);
    }
  </style>