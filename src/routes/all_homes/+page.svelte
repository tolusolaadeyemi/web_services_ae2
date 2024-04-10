<script>
  import AllHomes from "$lib/components/AllHomes.svelte";
  export let data;

  // console.log(data);
  import Plot from "$lib/components/Plot.svelte"; // import the plot component that was created for visualisations
  import { onMount } from "svelte"; // import on Mount method ffrom svelte
  import * as PlotLibrary from "@observablehq/plot"; // Since the Plot component iis called plot, chose PlotLibrary as name under which observable is imported

  let plotPropertyType;
  let plotTenure;
  let plotConstructionAgeBand;
  let fetchedData;

  // Load data on mount
  onMount(async () => {
    fetchedData = data.data;
    console.log(fetchedData);

    const propertyTypeColumn = fetchedData.map((row) => row["property-type"]); // get the correct data with map function for each of the plots
    const tenureColumn = fetchedData.map((row) => row["tenure"]);
    const constructionAgeBandColumn = fetchedData.map(
      (row) => row["construction-age-band"],
    );
    // debugging statement
    console.log({
      propertyTypeColumn,
      tenureColumn,
      constructionAgeBandColumn,
    });
    // get the counts of of ocurrences of the different property types in the data and convert into an array
    const propertyTypeCounts = {};
    propertyTypeColumn.forEach((propertyType) => {
      propertyTypeCounts[propertyType] =
        (propertyTypeCounts[propertyType] || 0) + 1;
    });
    const plotPropertyTypeData = Object.keys(propertyTypeCounts).map(
      (propertyType) => ({
        "property-type": propertyType,
        count: propertyTypeCounts[propertyType],
      }),
    );

    // Repeat the process for the tenure plot
    const tenureCounts = {};
    tenureColumn.forEach((tenure) => {
      // Include only specific tenures
      if (
        tenure === "Owner-occupied" ||
        tenure === "Rented (social)" ||
        tenure === "Rented (private)"
      ) {
        tenureCounts[tenure] = (tenureCounts[tenure] || 0) + 1;
      }
    });

    const plotTenureData = Object.keys(tenureCounts).map((tenure) => ({
      tenure: tenure,
      count: tenureCounts[tenure],
    }));

    // Repeat the process for the age band plot
    const constructionAgeBandCounts = {};
    constructionAgeBandColumn.forEach((constructionAgeBand) => {
      if (
        constructionAgeBand === "England and Wales: before 1900" ||
        constructionAgeBand === "England and Wales: 1900-1929" ||
        constructionAgeBand === "England and Wales: 1930-1949" ||
        constructionAgeBand === "England and Wales: 1950-1966" ||
        constructionAgeBand === "England and Wales: 1967-1975" ||
        constructionAgeBand === "England and Wales: 1976-1982" ||
        constructionAgeBand === "England and Wales: 1983-1990" ||
        constructionAgeBand === "England and Wales: 1991-1995" ||
        constructionAgeBand === "England and Wales: 1996-2002" ||
        constructionAgeBand === "England and Wales: 2003-2006" ||
        constructionAgeBand === "England and Wales: 2007-2011" ||
        constructionAgeBand === "2012" ||
        constructionAgeBand === "2013" ||
        constructionAgeBand === "2014" ||
        constructionAgeBand === "2015" ||
        constructionAgeBand === "2016" ||
        constructionAgeBand === "2017" ||
        constructionAgeBand === "2018" ||
        constructionAgeBand === "2019" ||
        constructionAgeBand === "2020" ||
        constructionAgeBand === "2021" ||
        constructionAgeBand === "2022" ||
        constructionAgeBand === "2023" ||
        constructionAgeBand === "2024"
      ) {
        constructionAgeBandCounts[constructionAgeBand] =
          (constructionAgeBandCounts[constructionAgeBand] || 0) + 1;
      }
    });

    const plotConstructionAgeBandData = Object.keys(
      constructionAgeBandCounts,
    ).map((constructionAgeBand) => ({
      "construction-age-band": constructionAgeBand,
      count: constructionAgeBandCounts[constructionAgeBand],
    }));

    // Create a bar plot for the property type
    plotPropertyType = PlotLibrary.plot({
      marks: [
        PlotLibrary.axisX({
          label: "",
        }),
        PlotLibrary.barY(plotPropertyTypeData, {
          x: "property-type",
          y: "count",
          fill: "rgba(250, 77, 146, 0.816)",
          tip: true,
        }),
      ],
      width: 400,
      height: 200,
    });
    // To display the plot bigger, independent of css, set the width
    plotPropertyType.style.width = "800px";
    plotPropertyType.style.height = "600px";

    // create the bar plot for the tenure data
    plotTenure = PlotLibrary.plot({
      marks: [
        PlotLibrary.axisX({
          label: "",
        }),
        PlotLibrary.barY(plotTenureData, {
          x: "tenure",
          y: "count",
          fill: "#88d6b8",
          tip: true,
        }),
      ],
      width: 400,
      height: 200,
    });
    plotTenure.style.width = "800px"; // Set the desired width
    plotTenure.style.height = "600px";

    // Create the bar plot for the Age Bands
    const years = plotConstructionAgeBandData.map((item) => {
      return item["construction-age-band"].split(":").pop().trim();
    });
    plotConstructionAgeBand = PlotLibrary.plot({
      marks: [
        PlotLibrary.axisX({
          label: "Construction Age Bands", // Set an empty string as the label for the x-axis
          tickFormat: () => "", // Hide the x-axis tick values
        }),
        PlotLibrary.barY(plotConstructionAgeBandData, {
          x: years,
          y: "count",
          fill: "#c8890cbf",
          tip: true,
        }),
      ],
      width: 400,
      height: 200,
    });
    plotConstructionAgeBand.style.width = "800px";
    plotConstructionAgeBand.style.height = "600px";
  });
</script>

<!-- display the component all homes that was imported -->
<AllHomes />

{#if fetchedData}
  <!-- If the data was successfully fetched, the plots should be displayed from the Plot component and the creation on this page -->
  <div class="plot-container">
    <h2>Property Type</h2>
    <Plot plotPropertyType="{plotPropertyType}" />
  </div>
  <div class="plot-container">
    <h2>Tenure</h2>
    <Plot plotTenure="{plotTenure}" />
  </div>
  <div class="plot-container">
    <h2>Construction Age Bands</h2>
    <Plot
      plotConstructionAgeBand="{plotConstructionAgeBand}"
      width="{1000}"
      height="{1000}"
    />
  </div>
{:else}
  <p>Loading...</p>
{/if}
