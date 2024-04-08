
<!-- <script>
  export let plot; // Accept the plot object as a prop

  import { onMount } from 'svelte';

  let plotContainer;

  onMount(() => {
    // Ensure plotContainer is defined and plot is provided
    if (plotContainer && plot) {
      plotContainer.innerHTML = ''; // Clear any existing content in the container

      // Append the plot to the container
      plotContainer.appendChild(plot);
    }
  });
</script>
<div bind:this={plotContainer}></div> -->

<!-- <script>
  // Import the necessary dependencies
  import { onMount } from 'svelte';

  // Define the plot container variables
  let plotContainerPropertyType;
  let plotContainerTenure;

  // Define props to accept the plot objects
  export let plotPropertyType;
  export let plotTenure;

  // Use onMount to execute code after the component mounts to the DOM
  onMount(() => {
    // Ensure plot containers and plots are defined
    if (plotContainerPropertyType && plotPropertyType) {
      // Clear any existing content in the container
      plotContainerPropertyType.innerHTML = '';

      // Append the plot to the container
      plotContainerPropertyType.appendChild(plotPropertyType);
    }
    
    if (plotContainerTenure && plotTenure) {
      // Clear any existing content in the container
      plotContainerTenure.innerHTML = '';

      // Append the plot to the container
      plotContainerTenure.appendChild(plotTenure);
    }
  });
</script>

 Define the plot containers for property type and tenure -->
<!-- <div bind:this={plotContainerPropertyType}></div>
<div bind:this={plotContainerTenure}></div> -->
<script>
  // Import the necessary dependencies
  import { onMount } from 'svelte';

  // Define the plot container variables
  let plotContainerPropertyType;
  let plotContainerTenure;
  let plotContainerConstructionAgeBand; // Add a variable for construction age band

  // Define props to accept the plot objects
  export let plotPropertyType;
  export let plotTenure;
  export let plotConstructionAgeBand; // Add a prop for construction age band

  // Use onMount to execute code after the component mounts to the DOM
  onMount(() => {
    // Ensure plot containers and plots are defined for property type
    if (plotContainerPropertyType && plotPropertyType) {
      // Clear any existing content in the container
      plotContainerPropertyType.innerHTML = '';

      // Append the plot to the container
      plotContainerPropertyType.appendChild(plotPropertyType);
    }
    
    // Ensure plot containers and plots are defined for tenure
    if (plotContainerTenure && plotTenure) {
      // Clear any existing content in the container
      plotContainerTenure.innerHTML = '';

      // Append the plot to the container
      plotContainerTenure.appendChild(plotTenure);
    }

    // Ensure plot containers and plots are defined for construction age band
    if (plotContainerConstructionAgeBand && plotConstructionAgeBand) {
      // Clear any existing content in the container
      plotContainerConstructionAgeBand.innerHTML = '';

      // Append the plot to the container
      plotContainerConstructionAgeBand.appendChild(plotConstructionAgeBand);
    }
  });
</script>

<!-- Define the plot containers for property type, tenure, and construction age band -->
<div bind:this={plotContainerPropertyType}></div>
<div bind:this={plotContainerTenure}></div>
<div bind:this={plotContainerConstructionAgeBand}></div>