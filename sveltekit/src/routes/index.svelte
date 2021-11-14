<script>
	import Hello from '$components/Hello.svelte';
	async function connectWallet() {
		if (window.ethereum) {
			window.web3 = new Web3(ethereum);
			await window.ethereum.enable(); // in our case metamask
			metamaskConnected = window.ethereum.isConnected();
		}
	}
	function onClickConnectWallet() {
		promise = connectWallet();
	}
	$: promise = connectWallet();
	$: metamaskConnected = window.ethereum ? window.ethereum.isConnected() : false;
</script>

<main>
	{#if window.ethereum}
		<div><h1>Browser wallet connected to metamask: {metamaskConnected}</h1></div>
	{/if}
	{#if window.ethereum && !metamaskConnected}
		<button on:click={onClickConnectWallet}>Connect Wallet (web3)</button>
		{:else}
		<Hello/>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>