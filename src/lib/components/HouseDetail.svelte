<script>
  export let title;
  import Compose from "$lib/components/Compose.svelte";
</script>

<div class="house_detail">
  <section>
    <h1>{title}</h1>

    <div class="details">
      <div class="metadata">
        <!-- {data.user} -->
        <!-- <a href="/house_detail/{house_detail.epcid}">Detail Page</a> -->
      </div>
    </div>
    <div id="notes">
      <Compose />
    </div>
  </section>
</div>
