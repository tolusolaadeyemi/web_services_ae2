<script>
 import { beforeUpdate, createEventDispatcher } from 'svelte';
 import HouseDetail from './HouseDetail.svelte';
 export let homes;

 beforeUpdate(() => {
     if(homes?.length > 0) {
         window.scrollTo({ top: 0, behavior: "smooth" });
     }
 });

</script>

<ul>
    {#each homes as home}
        <li>
            <p>{home.address1}</p>
            <p>{home.postcode}</p>
            <small>{home.constituency}</small>
        </li>
    {/each}
</ul>

<style>
 ul {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     gap: var(--size-4);
     list-style: none;
     padding: 0;
     margin-top: var(--size-8);
 }

 li {
     padding: 0;
     margin-bottom: var(--size-4);
 }

 button {
     /* width: 100%;
     height: 200px; */
     background-size: cover !important;
     background-position: center !important;
     box-shadow: var(--shadow-3);
 }

 button:hover {
    box-shadow: var(--shadow-5);
 }

 small {
     padding-inline: var(--size-2);
     border-width: var(--border-size-1);
     border-radius: var(--radius-round);
     border-style: solid;
     border-color: var(--green-8);
     color: var(--green-9);
 }

 p {
     font-size: var(--font-size-0);
     margin-top: var(--size-6);
     margin-bottom: var(--size-1);
     color: var(--teal-12);
 }
</style>