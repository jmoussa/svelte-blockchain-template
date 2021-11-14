<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../tailwind-output.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="flex flex-col justify-center items-center p-10 mt-10">
	<i>Footer</i>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
