<script>
	import StudioPhoto1 from '$lib/studio1.jpeg';
	import PainterPhoto from '$lib/painter.jpeg';
	import EtsyShop from '$lib/EtsyShop.png';
</script>

<main>
	<div class="flex flex-col justify-center mb-20 mt-10 ml-60 mr-60">
		<img src={StudioPhoto1} alt="collection" class="" />
		<h2 class="flex text-xs font-semibold mb-8 justify-end pt-5">Studio, 2018.</h2>
	</div>
	<div class="grid grid-cols-2 gap-4 bg-base-200 p-20">
		<div class="pl-20"><img src={PainterPhoto} alt="painter" /></div>
		<div>
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

	<div class="p-20 pb-0 text-bold">
		<h2 class="text-l font-semibold mb-2">My Shop</h2>
		<p class="text-s mb-8">
			To purchase original oil paintings online please visit my <strong><a href="https://www.etsy.com/shop/hiroshimatsumoto" target="_blank">Etsy shop.</a></strong>
		</p>
	</div>
	<div class="p-20 pt-4"><img src={EtsyShop} alt="etsy shop" class="" /></div>
</main>
