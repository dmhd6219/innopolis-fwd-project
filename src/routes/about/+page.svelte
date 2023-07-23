<script>
	import StudioPhoto1 from '$lib/images/studio1.jpeg';
	import PainterPhoto from '$lib/images/painter.jpeg';
	import EtsyShop from '$lib/images/EtsyShop.png';
</script>

<svelte:head>
	<title>About Hiroshi Matsumoto</title>
</svelte:head>


<section>
	<div class="flex flex-col items-center mb-8 mt-16">
		<img src={StudioPhoto1} alt="Studio, 2018" class="p-4" />
		<h2 class="text-xs font-semibold mb-8">Studio, 2018.</h2>
	</div>
	<div class="grid md:grid-cols-2 gap-4 bg-base-200 p-20">
		<div class="md:col-span-1">
			<div class="flex justify-center items-center h-full">
				<img
					class="max-w-full max-h-full mb-4"
					src={PainterPhoto}
					alt="Hiroshi Matsumoto - Abstract Oil Painter"
				/>
			</div>
		</div>
		<div class="md:col-span-1 pt-2">
			<h1 class="text-m font-bold mb-4">Hiroshi Matsumoto</h1>
			<h2 class="text-s font-semibold mb-2">Abstract Oil Painter</h2>
			<p class="text-xs mb-8">
				Born (1953) in Kobe city, Japan. I studied drawing and painting at the Art Institute of
				Osaka Municipal Museum of Art and have exhibited in many solo shows and group exhibitions.
			</p>
			<h2 class="text-s font-semibold mb-2">Artist Statement</h2>
			<p class="text-xs mb-8">
				I love oil paint, its texture, viscosity, slow-drying time, and smell. I paint abstract. I
				never know what it is going to be until it's complete. When I start to paint, I always put
				some colors on the canvas without thinking. My choice of colors is often accidental or
				intuitive. I try to catch the chance meeting of color with composition. Sometimes I get
				lost, and then other times I find myself walking along a path that brings me back to where I
				belong. Abstract is for me a concrete way to share an inner sense, place, and time with you
				directly and deeply.
			</p>
		</div>
	</div>
	<div class="flex flex-col mb-4 mt-14">
		<h2 class="text-l font-semibold ml-10 mb-2 mr-10">My Shop</h2>
		<p class="text-s ml-10 mr-10">
			To purchase original oil paintings online, please visit my <strong
				><a
					href="https://www.etsy.com/shop/hiroshimatsumoto"
					target="_blank">Etsy shop</a
				></strong
			>.
		</p>
		<div class="p-10">
			<img src={EtsyShop} alt="Hiroshi Matsumoto Etsy Shop" class="" />
		</div>
	</div>
</section>
