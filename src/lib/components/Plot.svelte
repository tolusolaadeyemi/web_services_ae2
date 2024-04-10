<script>
  import { onMount } from "svelte";

  let plotContainerPropertyType;
  let plotContainerTenure;
  let plotContainerConstructionAgeBand;

  export let plotPropertyType;
  export let plotTenure;
  export let plotConstructionAgeBand;

  // onMount is used to execute the code after the component mounts on the DOM
  onMount(() => {
    if (plotContainerPropertyType && plotPropertyType) {
      plotContainerPropertyType.innerHTML = "";
      // add the plot to the html to display it
      plotContainerPropertyType.appendChild(plotPropertyType);
    }

    // repeat for the other plots
    if (plotContainerTenure && plotTenure) {
      plotContainerTenure.innerHTML = "";

      plotContainerTenure.appendChild(plotTenure);
    }

    if (plotContainerConstructionAgeBand && plotConstructionAgeBand) {
      plotContainerConstructionAgeBand.innerHTML = "";

      plotContainerConstructionAgeBand.appendChild(plotConstructionAgeBand);
    }
  });
</script>

<div bind:this="{plotContainerPropertyType}" class="plot-container"></div>
<div bind:this="{plotContainerTenure}" class="plot-container"></div>
<div bind:this="{plotContainerConstructionAgeBand}" class="plot-container"></div>
