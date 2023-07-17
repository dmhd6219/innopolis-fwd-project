<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<body>
	<Header />
	<slot />
	<Footer />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400&family=Karla:wght@200;300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
	body {
		/* font-family: 'IBM Plex Mono', monospace; */
		font-family: 'Karla', sans-serif;
		/* font-family: 'Playfair Display', serif; */
	}
</style>
