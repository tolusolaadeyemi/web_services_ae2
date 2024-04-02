<script>
    export let title;
    // export let button;
    export let form;
  </script>

<section>
    <div class="all_homes">
      <h1>{title}</h1>
    {#if form?.error}
      <p class="error">{form.error}</p>
    {/if}
    </div>
</section>
