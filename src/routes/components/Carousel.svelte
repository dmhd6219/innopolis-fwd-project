<script>
	import StudioPhoto1 from '$lib/studio1.jpeg';
	import StudioPhoto2 from '$lib/studio2.jpeg';
	import StudioPhoto3 from '$lib/studio3.jpeg';
</script>

<div class="carousel w-full">
	<div id="slide1" class="carousel-item relative w-full">
		<img src={StudioPhoto1} alt="Art studio" class="w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide4" class="btn btn-circle">❮</a>
			<a href="#slide2" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide2" class="carousel-item relative w-full">
		<img src={StudioPhoto2} alt="Art studio" class="w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" class="btn btn-circle">❮</a>
			<a href="#slide3" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="slide3" class="carousel-item relative w-full">
		<img src={StudioPhoto3} alt="Art studio" class="w-full" />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" class="btn btn-circle">❮</a>
			<a href="#slide1" class="btn btn-circle">❯</a>
		</div>
	</div>
</div>

<style>
	.carousel {
		max-height: auto;
		max-width: 40v; /* Adjust the max-height value as needed */
		overflow: hidden;
	}
</style>
