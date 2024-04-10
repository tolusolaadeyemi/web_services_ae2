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

      <div class="tracked-homes-list">
        <ul>
          <!-- display a list of the homes that are tracked by the specific user -->
          <li>
            <span>Home Details Here</span>
            <button>Remove</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</main>

<!-- <style>

  .filter-section {
    margin-bottom: 20px;
  }


  .filter-by {
    font-size: 20px; /* Adjust the font size as needed */
    margin-bottom: 10px; /* Adjust spacing between select elements */
  }
</style> -->
