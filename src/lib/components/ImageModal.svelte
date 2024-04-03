<script>
  export let showModal;
  export let image;
  let dialog;
  let src;

  $: if (dialog && showModal) {
    dialog.showModal();
    src =
      image.src +
      "full/!" +
      (innerWidth - 100) +
      "," +
      (innerHeight - 250) +
      "/0/default.jpg";
  }

  $: innerWidth = 0;
  $: innerHeight = 0;
</script>

<svelte:window
  bind:innerWidth="{innerWidth}"
  bind:innerHeight="{innerHeight}"
/>

<dialog
  bind:this="{dialog}"
  on:close="{() => (showModal = false)}"
  on:click|self="{() => dialog.close()}"
>
  <img src="{src}" />
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<style>
  img {
    width: 100%;
    border-radius: var(--radius-3);
    margin-bottom: var(--size-3);
  }

  form {
    display: flex;
    justify-content: end;
  }
</style>