<!-- <script>
    export let title;
  </script>

<section>
    <div class="tracked_homes">
      <h1>{title}</h1>
    </div>
</section> -->

<script>
  // Define script logic here
</script>
<main>
  <div class="tracked_homes">
  <h1>Your Tracked Homes</h1>
  </div>

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
          <!-- Iterate over tracked homes data and display each home -->
          <li>
              <span>Home Details Here</span>
              <button>Remove</button>
          </li>
      </ul>
  </div>
</main>

<style>

  .filter-section {
    margin-bottom: 20px;
  }


  .filter-by {
    font-size: 20px; /* Adjust the font size as needed */
    margin-bottom: 10px; /* Adjust spacing between select elements */
  }
</style>