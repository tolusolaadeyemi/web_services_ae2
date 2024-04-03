<!-- <script>
  import * as Plot from "@observablehq/plot";
  import { onMount } from "svelte";
  
  export let images;

  let div;
  let width;

  onMount(() => {
    width = div.clientWidth;
    const resizeObserver = new ResizeObserver((entries) => {
      width = entries[0].contentBoxSize[0].inlineSize;
    });
    resizeObserver.observe(div);
    return () => resizeObserver.unobserve(div);
  });

  $: {
    if (images?.length > 0) {
      div?.firstChild?.remove();
      div?.append(
        Plot.plot({
          marginBottom: 80,
          height: 100,
          width: width,
          x: { tickRotate: 90, label: null },
          color: { scheme: "PRGn" },
          marks: [
            Plot.cell(
              images,
              Plot.groupX({ fill: "count" }, { x: "objectType" }),
            ),
          ],
        }),
      );
    }
  }
</script>

<div bind:this="{div}" role="img"></div>

<style>
  div {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style> -->