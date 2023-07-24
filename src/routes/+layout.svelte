<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<body>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</body>
