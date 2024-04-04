<script>
    export let title;
  </script>

<section>
    <div class="all_homes">
      <h1>{title}</h1>
    </div>
</section>


<style>
  .all_homes {
    margin-top: 2rem;
    font-size: var(--font-size-3);
    border: 1px solid var(--stone-3);
    padding: var(--size-3);
    border-radius: var(--size-2);
    background-color: white;
    box-shadow: var(--shadow-2);
    max-inline-size: 100%;
  }
 
  /* .metadata {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
    color: var(--stone-8);
    width: 100%;
    font-size: var(--font-size-1);
    margin-top: var(--size-3);
    padding-top: var(--size-2);
    border-top: 1px solid var(--stone-2);
  } */
 </style>