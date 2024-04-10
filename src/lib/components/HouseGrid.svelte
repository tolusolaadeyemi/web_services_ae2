<script>
 import { beforeUpdate, createEventDispatcher } from 'svelte';
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
            <button class="redirect_detail"><a href="/house_detail/{home.lmk}">House Detail</a></button>
        </li>
    {/each}
</ul>

