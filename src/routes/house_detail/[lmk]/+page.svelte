<script>
  export let data;
  let value="";

  const home = data.data;
  const current = home[0]["current-energy-efficiency"];
  const potential = home[0]["potential-energy-efficiency"];
  const constituency = home[0]["constituency"];
  const address1 = home[0]["address1"];
  const postcode = home[0]["postcode"];
  const lmk = home[0]["lmk-key"];
</script>
<div class="house-detail">
  <h1>House Detail Page</h1>
</div>
{#if data.data}
  <div class="epc_table">
    <section>
      <!-- https://www.w3.org/TR/html401/struct/tables.html for the creation of the table -->
      <table class="rating-table">
        <thead>
          <tr>
            <th>Constituency</th>
            <th>Address</th>
            <th>Postcode</th>
          </tr>
        </thead>
        <tbody>
          <tr class="energy-efficient">
            <td>{constituency}</td>
            <td>{address1} </td>
            <td>{postcode} </td>
          </tr>
        </tbody>
      </table>
    </section>
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
          <tr class="lower-cost">
          <td>very energy efficient - lower running costs</td>
          <td></td>
          <td></td>
        </tr>
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
            <td>not energy efficient - higher running costs</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
    <div id="add_home">
      <section>
       <form method="POST" action="?/create">
        <input type="hidden" name="lmk_key" value="{lmk}">
        <label for="stage">Stage:</label>
            <input list="stage">
            <select name="stage" id="stage">
              <option value="initial_assessment">Initial Assessment</option>
              <option value="upgrades_identified">Upgrades Identified</option>
              <option value="work_started">Work Started</option>
              <option value="completed">Completed</option>
              </select>
            <button type="submit"> Track Home</button>
      </form>
    </section>
    </div>
    <div class="notes" id="notes">
        <section>
          <form method="POST" action="?/create_note">
            <input type="hidden" name="lmk_key" value="{lmk}">
            <textarea
              name="notes"
              rows="5"
              maxlength="120"
              bind:value="{value}"
              placeholder="Add a Note on this House"
            ></textarea>
      
            <div class="buttons">
              <span class="counter">{value.length}/120</span>
              <input type="submit" value="Add Note" />
            </div>
          </form>
        </section>
      </div>
  </div>

{:else}
  House Not found
{/if}

<!-- 00b35e06cc36a5b47cdc43dad37cd91fbef91f303241665fc23a792a9b0726ba -->
