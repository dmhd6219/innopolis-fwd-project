<script>
	import '../app.postcss';
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
</script>

<body>
	<Header />
	<slot />
	<Footer />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400&family=Playfair+Display:wght@400;600;700&display=swap');
	body {
		font-family: 'IBM Plex Mono', monospace;
	}
</style>
