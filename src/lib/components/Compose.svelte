<script>
  let value = "";
</script>

<div class="post">
  <section>
    <form method="POST" action="?/create">
      <textarea
        name="text"
        rows="5"
        maxlength="120"
        bind:value="{value}"
        placeholder="Add a Note"
      ></textarea>

      <div class="buttons">
        <span class="counter">{value.length}/120</span>
        <input type="submit" value="Add Note" />
      </div>
    </form>
  </section>
</div>
<!--   The style is in the custom.css page -->
