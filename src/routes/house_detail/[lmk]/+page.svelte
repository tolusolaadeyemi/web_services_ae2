<script>
  import HouseDetail from "$lib/components/HouseDetail.svelte";
  export let data;

  // console.log(data)

  const home = data.data;
  // console.log(home)
  const current = home[0]["current-energy-efficiency"];
  const potential = home[0]["potential-energy-efficiency"];

  console.log(current, potential);
</script>

{#if data.data}
  <!-- {data.data} -->
  <div class="epc_table">
    <section>
      <!-- https://www.w3.org/TR/html401/struct/tables.html for the creation of the table -->
      <table class="rating-table">
        <thead>
          <tr>
            <th>Energy Rating</th>
            <th>Current</th>
            <th>Potential</th>
          </tr>
        </thead>
        <tbody>
          <tr class="energy-efficient">
            <td>(92+) A</td>
            <td>{current >= 92 ? current : ""}</td>
            <td>{potential >= 92 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(81-91) B</td>
            <td>{current >= 81 && current <= 91 ? current : ""}</td>
            <td>{potential >= 81 && potential <= 91 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(69-80) C</td>
            <td>{current >= 69 && current <= 80 ? current : ""}</td>
            <td>{potential >= 69 && potential <= 80 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(55-68) D</td>
            <td>{current >= 55 && current <= 68 ? current : ""}</td>
            <td>{potential >= 55 && potential <= 68 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(39-54) E</td>
            <td>{current >= 39 && current <= 54 ? current : ""}</td>
            <td>{potential >= 39 && potential <= 54 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(21-38) F</td>
            <td>{current >= 21 && current <= 38 ? current : ""}</td>
            <td>{potential >= 21 && potential <= 38 ? potential : ""}</td>
          </tr>
          <tr class="energy-efficient">
            <td>(1-20) G</td>
            <td>{current >= 1 && current <= 20 ? current : ""}</td>
            <!-- https://www.shecodes.io/athena/10188-how-to-check-if-a-variable-is-within-a-range-in-javascript#:~:text=You%20can%20use%20a%20conditional,is%20within%20the%20desired%20range.&text=In%20this%20example%2C%20the%20%26%26,the%20first%20block%20will%20execute. * / -->
            <td>{potential >= 1 && potential <= 20 ? potential : ""}</td>
          </tr>
          <tr class="higher-cost">
            <td>Not energy efficient - Higher running costs</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>

  <HouseDetail title="House Detail Page" />
{:else}
  House Not found
{/if}

<!-- 00b35e06cc36a5b47cdc43dad37cd91fbef91f303241665fc23a792a9b0726ba -->
