<script>
    import AllHomes from "$lib/components/AllHomes.svelte";
    // export let form;

  // Import the Plot component
  import Plot from '$lib/components/Plot.svelte';
  import { onMount } from 'svelte';
  import * as PlotLibrary from '@observablehq/plot';

  // Define the plot and data variables
  let plotPropertyType;
  let plotTenure;
  let plotConstructionAgeBand; // Add a variable for construction age band
  let fetchedData;

  // Fetch data from the API
  async function fetchData() {
    const token = "bmMzMjM2cGd0QHN0dWRlbnRzLm51bG9uZG9uLmFjLnVrOmM2ODU0NThhM2EyZGY2ZDI4YzRlNmQwN2FjY2U0NDRkNDViZGU1Mjk="; // Replace with your actual token
    const response = await fetch('https://epc.opendatacommunities.org/api/v1/domestic/search?&size=100', {
      headers: {
        'Authorization': `Basic ${token}`,
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data["rows"];
  }

  // Load data on mount
  onMount(async () => {
    fetchedData = await fetchData();
    console.log(fetchedData);

    const propertyTypeColumn = fetchedData.map(row => row["property-type"]);
    const tenureColumn = fetchedData.map(row => row["tenure"]);
    const constructionAgeBandColumn = fetchedData.map(row => row["construction-age-band"]); // Fetch construction age band data

    // Preprocess the data to get counts of each property type
    const propertyTypeCounts = {};
    propertyTypeColumn.forEach(propertyType => {
      propertyTypeCounts[propertyType] = (propertyTypeCounts[propertyType] || 0) + 1;
    });

    // Convert the counts object into an array of objects for Plotly
    const plotPropertyTypeData = Object.keys(propertyTypeCounts).map(propertyType => ({
      'property-type': propertyType,
      'count': propertyTypeCounts[propertyType]
    }));

    // Preprocess the data to get counts of each tenure
    const tenureCounts = {};
    tenureColumn.forEach(tenure => {
      // Include only specific tenures
      if (tenure === "Owner-occupied" || tenure === "Rented (social)" || tenure === "Rented (private)") {
        tenureCounts[tenure] = (tenureCounts[tenure] || 0) + 1;
      }
    });

    // Convert the counts object into an array of objects for Plotly
    const plotTenureData = Object.keys(tenureCounts).map(tenure => ({
      'tenure': tenure,
      'count': tenureCounts[tenure]
    }));

    // Preprocess the data to get counts of each construction age band
    const constructionAgeBandCounts = {};
    constructionAgeBandColumn.forEach(constructionAgeBand => {
      if (constructionAgeBand === "1900" || constructionAgeBand === "1901" || constructionAgeBand === "1902" || constructionAgeBand === "1903" || constructionAgeBand === "1904" || constructionAgeBand === "1905" || constructionAgeBand === "1906" || constructionAgeBand === "1907" || constructionAgeBand === "1908" || constructionAgeBand === "1909" || constructionAgeBand === "1910" || constructionAgeBand === "1911" || constructionAgeBand === "1912" || constructionAgeBand === "1913" || constructionAgeBand === "1914" || constructionAgeBand === "1915" || constructionAgeBand === "1916" || constructionAgeBand === "1917" || constructionAgeBand === "1918" || constructionAgeBand === "1919" || constructionAgeBand === "1920" || constructionAgeBand === "1921" || constructionAgeBand === "1922" || constructionAgeBand === "1923" || constructionAgeBand === "1924" || constructionAgeBand === "1925" || constructionAgeBand === "1926" || constructionAgeBand === "1927" || constructionAgeBand === "1928" || constructionAgeBand === "1929" || constructionAgeBand === "1930" || constructionAgeBand === "1931" || constructionAgeBand === "1932" || constructionAgeBand === "1933" || constructionAgeBand === "1934" || constructionAgeBand === "1935" || constructionAgeBand === "1936" || constructionAgeBand === "1937" || constructionAgeBand === "1938" || constructionAgeBand === "1939" || constructionAgeBand === "1940" || constructionAgeBand === "1941" || constructionAgeBand === "1942" || constructionAgeBand === "1943" || constructionAgeBand === "1944" || constructionAgeBand === "1945" || constructionAgeBand === "1946" || constructionAgeBand === "1947" || constructionAgeBand === "1948" || constructionAgeBand === "1949" || constructionAgeBand === "1950" || constructionAgeBand === "1951" || constructionAgeBand === "1952" || constructionAgeBand === "1953" || constructionAgeBand === "1954" || constructionAgeBand === "1955" || constructionAgeBand === "1956" || constructionAgeBand === "1957" || constructionAgeBand === "1958" || constructionAgeBand === "1959" || constructionAgeBand === "1960" || constructionAgeBand === "1961" || constructionAgeBand === "1962" || constructionAgeBand === "1963" || constructionAgeBand === "1964" || constructionAgeBand === "1965" || constructionAgeBand === "1966" || constructionAgeBand === "1967" || constructionAgeBand === "1968" || constructionAgeBand === "1969" || constructionAgeBand === "1970" || constructionAgeBand === "1971" || constructionAgeBand === "1972" || constructionAgeBand === "1973" || constructionAgeBand === "1974" || constructionAgeBand === "1975" || constructionAgeBand === "1976" || constructionAgeBand === "1977" || constructionAgeBand === "1978" || constructionAgeBand === "1979" || constructionAgeBand === "1980" || constructionAgeBand === "1981" || constructionAgeBand === "1982" || constructionAgeBand === "1983" || constructionAgeBand === "1984" || constructionAgeBand === "1985" || constructionAgeBand === "1986" || constructionAgeBand === "1987" || constructionAgeBand === "1988" || constructionAgeBand === "1989" || constructionAgeBand === "1990" || constructionAgeBand === "1991" || constructionAgeBand === "1992" || constructionAgeBand === "1993" || constructionAgeBand === "1994" || constructionAgeBand === "1995" || constructionAgeBand === "1996" || constructionAgeBand === "1997" || constructionAgeBand === "1998" || constructionAgeBand === "1999" || constructionAgeBand === "2000" || constructionAgeBand === "2001" || constructionAgeBand === "2002" || constructionAgeBand === "2003" || constructionAgeBand === "2004" || constructionAgeBand === "2005" || constructionAgeBand === "2006" || constructionAgeBand === "2007" || constructionAgeBand === "2008" || constructionAgeBand === "2009" || constructionAgeBand === "2010" || constructionAgeBand === "2011" || constructionAgeBand === "2012" || constructionAgeBand === "2013" || constructionAgeBand === "2014" || constructionAgeBand === "2015" || constructionAgeBand === "2016" || constructionAgeBand === "2017" || constructionAgeBand === "2018" || constructionAgeBand === "2019" || constructionAgeBand === "2020" || constructionAgeBand === "2021" || constructionAgeBand === "2022" || constructionAgeBand === "2023" || constructionAgeBand === "2024") {
        constructionAgeBandCounts[constructionAgeBand] = (constructionAgeBandCounts[constructionAgeBand] || 0) + 1;
      }
    });


    // Convert the counts object into an array of objects for Plotly
    const plotConstructionAgeBandData = Object.keys(constructionAgeBandCounts).map(constructionAgeBand => ({
      'construction-age-band': constructionAgeBand,
      'count': constructionAgeBandCounts[constructionAgeBand]
    }));

    // Create the plot for property type
    plotPropertyType = PlotLibrary.plot({
      marks: [
        PlotLibrary.barY(plotPropertyTypeData, {
          x: "property-type",
          y: "count",
          fill: "steelblue"
        })
      ],
      width: 400,
      height: 200
    });

    // Create the plot for tenure
    plotTenure = PlotLibrary.plot({
      marks: [
        PlotLibrary.barY(plotTenureData, {
          x: "tenure",
          y: "count",
          fill: "steelblue"
        })
      ],
      width: 400,
      height: 200
    });

    // Create the plot for construction age band
    plotConstructionAgeBand = PlotLibrary.plot({
      marks: [
        PlotLibrary.barY(plotConstructionAgeBandData, {
          x: "construction-age-band",
          y: "count",
          fill: "steelblue"
        })
      ],
      width: 400,
      height: 200
    });
  });

  </script>

<AllHomes/>

{#if fetchedData}
   <!-- Display the Plot components and pass the plot objects -->
   <div class="plot-container">
    <h2>Property Type</h2>
    <Plot {plotPropertyType} />
  </div>
  <div class="plot-container">
    <h2>Tenure</h2>
    <Plot {plotTenure} />
  </div>
  <div class="plot-container">
    <h2>Construction Age Bands</h2>
    <Plot {plotConstructionAgeBand} />
  </div>
{:else}
  <p>Loading...</p>
{/if}
