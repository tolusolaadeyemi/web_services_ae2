<script>
    import Login from "$lib/components/Login.svelte";
    import { page } from "$app/stores"
    export let form;
    let message = "";

	$: message = $page.url.searchParams.get("message") ?? ""
</script>

{#if message}
	<p class="alert">{message}</p>
{/if}

  <Login title="Login" button="Login" form="{form}" />
  
  
<style>
  .alert {
	background-color: #de6e66;
	color: white;
	padding: 20px;
	margin-bottom: 8px;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 6px;
}
</style>
  
  
  
  