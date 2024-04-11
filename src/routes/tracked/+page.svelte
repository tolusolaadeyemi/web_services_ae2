
<script>
  export let data;
</script>

<main>
  <div class="tracked_homes">
    <section>
      <h1>Your Tracked Homes</h1>
      <!-- as for the all homes page, create some filters -->
      <div class="filter-section">
        <label for="Filtering">Filter Tracked Homes by:</label>
        <select class="filter-by">
          <option value="all">All</option>
        </select>
        <select class="filter-by">
          <option value="">State</option>
        </select>
        <select class="filter-by">
          <option value="">Band</option>
        </select>
        <select class="filter-by">
          <option value="">Potential Improvement</option>
        </select>
      </div>
        <div class="tracked-homes">
          <section>
            <div class="tracked-homes-list">
              <ul>
                {#each data.data as home}
                <li>
                  <div>
                    <p>Address: {home[0].address1}, {home[0].posttown}, {home[0].postcode}</p>
                    <p>EPC Rating: {home[0]["current-energy-rating"]}</p>
                  </div>
                  <button>Remove</button>
                </li>
                {/each}
              </ul>
            </div>
          </section>
        </div>
    </section>
  </div>
</main>
