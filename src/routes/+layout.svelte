<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400&family=Karla:wght@200;300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
	.container {
		/* font-family: 'IBM Plex Mono', monospace; */
		font-family: 'Karla', sans-serif;
		/* font-family: 'Playfair Display', serif; */
	}

	/* не знаю как подключить шрифт если убрать body */
</style>
