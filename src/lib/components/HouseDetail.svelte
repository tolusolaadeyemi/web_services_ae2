<script>
  export let title;
  export let data;
  export let house_detail;
</script>

<section>
  <div class="house_detail">
    <h1>{title}</h1>
  </div>
  <div class="details">
    <div class="metadata">
      {data.user}
      <a href="/house_detail/{house_detail.rowid}">Detail Page</a>
    </div>
  </div>
</section>