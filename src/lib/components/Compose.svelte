<script>
    let value = "";
  </script>
  
  <div class="post">
    <form method="POST" action="?/create">
      <textarea
        name="text"
        rows="5"
        maxlength="120"
        bind:value="{value}"
        placeholder="Compose your toot"
      ></textarea>
  
      <div class="buttons">
        <span class="counter">{value.length}/120</span>
        <input type="submit" value="Post Toot" />
      </div>
    </form>
  </div>
  
  <style>
    .post {
      padding: var(--size-3);
      background-color: var(--indigo-0);
      border-radius: var(--size-2);
      border: 1px solid var(--indigo-1);
      box-shadow: var(--shadow-1);
      margin-block: var(--size-3);
    }
  
    .buttons {
      margin-top: var(--size-3);
      display: flex;
      justify-content: space-between;
    }
  
    .counter {
      font-size: 0.85rem;
      color: var(--stone-8);
    }
  
    textarea {
      width: 100%;
      box-shadow: var(--inner-shadow-1);
      background-color: white;
      margin-top: var(--size-2);
    }
  </style>