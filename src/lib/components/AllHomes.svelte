<main>
  <!-- Create a div for the all homes -->
  <div class="all_homes">
    <section>
      <h1>All Homes</h1>

      <!-- create a div for the filters -->
      <div class="filters">
        <!-- There is a label and a value for the filter -->
        <label for="FilterBy">Filter by:</label>
        <select class="filter-select">
          <!-- The value for this filter is state -->
          <option value="">State</option>
        </select>
        <select class="filter-select">
          <!--  the value for this filter is the Construction Age Band -->
          <option value="">Band</option>
        </select>
        <select class="filter-select">
          <!--  the Potential Improvement -->
          <option value="">Potential Improvement</option>
        </select>
        <select class="filter-select">
          <!-- And the filter on the users that are tracking the homes -->
          <option value="">User Tracking</option>
        </select>
      </div>

      <div class="sorting">
        <!--  We can also sort by either the date the home was added or the last update -->
        <label for="sortBy">Sort by:</label>
        <select id="sortBy" class="sort-select">
          <option value="dateAdded">Date Added</option>
          <option value="lastUpdate">Last Update</option>
        </select>
      </div>

      <ul>
        <!-- Created a list, where the House should be displayed -->
        <li>house 1</li>
        <li>house 2</li>
      </ul>
    </section>
  </div>
</main>
