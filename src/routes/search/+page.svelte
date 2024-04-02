<script>
    import Search from "$lib/components/Search.svelte";
    import ImageGrid from "$lib/components/ImageGrid.svelte";
    import ObjectType from "$lib/components/ObjectType.svelte";
    import Pages from "$lib/components/Pages.svelte";
    import ImageModal from "$lib/components/ImageModal.svelte";
    
    let images;
    let page = 1;
    let pages;
    let term = "";
    let showModal = false;
    let modal_image = {};
  
  
  
    function openModal(event) {
      showModal = true;
      modal_image = event.detail;
    }
  
    function handleSearch(event) {
      if (term !== event.detail.term) page = 1;
      term = event.detail.term;
      images = getSearchResults(term);
    }
  
    function changePage(event) {
      page = event.detail.page;
      images = getSearchResults(term);
    }
  
    async function getSearchResults(term) {
      // Search the V&A API
      const query =
        'https://api.vam.ac.uk/v2/objects/search?q="' +
        term +
        '"&images_exist=1&page_size=15&page=' +
        page;
  
      const results = await fetch(query).then((res) => res.json());
  
      // Set pages from results
      page = results?.info?.page;
      pages = results?.info?.pages;
  
      // Fetch objects records for each search result item
      const items = results.records.map(
        (r) => "https://api.vam.ac.uk/v2/museumobject/" + r?.systemNumber,
      );
  
      const promises = items.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((body) => body)
          .catch((err) => console.warn(err)),
      );
  
      const records = await Promise.all(promises);
  
      // Map returned object records
      const _images = records.map((r) => {
        const img_source = r?.meta?.images?._iiif_image;
        if (img_source) {
          return {
            src: img_source,
            alt: r?._primaryTitle,
            description: r?.record?.briefDescription,
            accessionYear: r?.record?.accessionYear,
            objectType: r?.record?.objectType,
          };
        }
      });
  
      return _images;
    }
  </script>
  
  <main>
    <Search placeholder="Find images" on:search="{handleSearch}" />
  
    {#if images}
      {#await images}
        <div class="loading">
          <span class="loader"></span>
        </div>
      {:then img}
        <ObjectType images="{img}" />
        <ImageGrid images="{img}" on:modal="{openModal}" />
        <Pages page="{page}" pages="{pages}" on:change="{changePage}" />
        <ImageModal bind:showModal="{showModal}" image="{modal_image}" />
      {:catch error}
        <p style="color: red">{error.message}</p>
      {/await}
    {/if}
  </main>
  
  <style>
    main {
      margin: var(--size-fluid-4);
    }
  
    .loading {
      height: 200px;
      display: grid;
      place-items: center;
    }
  
    .loader {
      width: 48px;
      height: 48px;
      border: 5px solid var(--teal-2);
      border-bottom-color: var(--teal-6);
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
  
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  