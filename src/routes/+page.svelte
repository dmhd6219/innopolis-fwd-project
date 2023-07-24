<script>
	export let data;
</script>

<svelte:head>
	<title>Hiroshi Matsumoto</title>
	<meta
		name="description"
		content="Explore the vibrant world of art at Hiroshi Matsumoto's website. Browse through a vast collection of exquisite paintings and be captivated by their beauty and creativity."
	/>
</svelte:head>

<section class="flex flex-col items-center justify-center w-4/5 max-w-xl mx-auto mt-16 mb-16">
	<a href="/painting/{data.formattedDate}"
		><img class="w-full mb-4" src={data.url} alt="One of the paintings" /></a
	>
	<div class="text-xl font-bold mb-4 text-center">
		Original Abstract Oil Paintings by Hiroshi Matsumoto
	</div>
	<button class="btn"><a href="./paintings">Explore</a></button>
</section>
