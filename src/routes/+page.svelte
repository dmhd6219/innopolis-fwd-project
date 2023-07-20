<script>
	import { format } from 'date-fns';
	import imgTest from '$lib/9_by_9_paintings/2023-7-14.jpeg';

	const today = new Date();
	const formattedDate = format(today, 'yyyy-MM-dd');
	// const imageUrl = `$lib/9_by_9_paintings/${formattedDate}.jpg`;
</script>

<section class="flex flex-col items-center justify-center w-4/5 max-w-xl mx-auto mt-16 mb-16">
	<img class="w-full mb-4" src={imgTest} alt="Today's painting" />
	<div class="text-xl font-bold mb-4 text-center">Original Abstract Oil Paintings by Hiroshi Matsumoto</div>
	<button class="btn"><a href="./paintings">Explore</a></button>
</section>
