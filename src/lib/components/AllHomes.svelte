<!-- <script>
    export let title;
  </script>

<section>
    <div class="all_homes">
      <h1>{title}</h1>
    </div>
</section> -->

<script>
  // Import necessary modules
</script>

<main>
  <div class="all_homes">
  <h1>All Homes</h1>
  </div>

  <div class="filters">
    <label for="FilterBy">Filter by:</label>
      <select class="filter-select">
          <option value="">State</option>
      </select>
      <select class="filter-select">
          <option value="">Band</option>
      </select>
      <select class="filter-select">
          <option value="">Potential Improvement</option>
      </select>
      <select class="filter-select">
          <option value="">User Tracking</option>
      </select>
  </div>
  
  <div class="sorting">
    <label for="sortBy">Sort by:</label>
    <select id="sortBy" class="sort-select">
        <option value="dateAdded">Date Added</option>
        <option value="lastUpdate">Last Update</option>
    </select>
</div>
  

  <ul>
      <li>house 1</li>
      <li>house 2</li>
        
          <!-- <a href="/all_homes/{home.id}"> -->
              <!-- <h2>{home.name}</h2> -->
              <!-- <p>State: {home.state}</p>
              <p>Band: {home.band}</p>
              <p>Potential Improvement: {home.potentialImprovement}</p>
              <p>Tracking Users: {home.trackingUsers}</p> -->
              <!-- Add more details as needed -->
          <!-- </a> -->
      <!-- </li> -->
  <!-- </ul> -->
</main>

<style>
  
.filters {
    margin-bottom: 20px;
  }

  .filter-select,
  .sort-select {
    font-size: 20px; /* Adjust the font size as needed */
    margin-bottom: 10px; /* Adjust spacing between select elements */
  }
</style>
