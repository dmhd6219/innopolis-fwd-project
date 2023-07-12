<script>
	let exhibitions = [
		{
			title: "Opening exhibition 'Soma Fujito and Hiroshi Matsumoto'",
			date: '7/16/2022 - 9/4/2022',
			location: 'Fine Port Gallery, Kagawa, Japan',
			contact: '0879-62-2121',
			website: 'https://www.instagram.com/fineportgallery/'
		}
		// Добавьте остальные выставки здесь
	];
	import StudioPhoto1 from '$lib/studio1.jpeg';
</script>

<main class="py-8 px-4">
	<h1 class="text-4xl font-bold mb-4">Hiroshi Matsumoto</h1>
	<h2 class="text-2xl font-semibold mb-2">Abstract Oil Painter</h2>
	<p class="text-lg mb-8">
		Born (1953) in Kobe city, Japan. I studied drawing and painting at the Art Institute of Osaka
		Municipal Museum of Art and have exhibited in many solo shows and group exhibitions.
	</p>

	<h2 class="text-2xl font-semibold mb-2">Artist Statement</h2>
	<p class="text-lg mb-8">
		I love oil paint, its texture, viscosity, slow-drying time, and smell. I paint abstract. I never
		know what it is going to be until it's complete. When I start to paint, I always put some colors
		on the canvas without thinking. My choice of colors is often accidental or intuitive. I try to
		catch the chance meeting of color with composition. Sometimes I get lost, and then other times I
		find myself walking along a path that brings me back to where I belong. Abstract is for me a
		concrete way to share an inner sense, place, and time with you directly and deeply.
	</p>

	<h2 class="text-2xl font-semibold mb-2">Selected Exhibition</h2>
	<ul class="list-disc list-inside mb-8">
		{#each exhibitions as exhibition}
			<li>
				<a href={exhibition.website} class="underline">
					{exhibition.title}
				</a>
				<br />
				{exhibition.date}
				<br />
				{exhibition.location}
				<br />
				{exhibition.contact}
			</li>
		{/each}
	</ul>

	<h2 class="text-2xl font-semibold mb-2">My Shop</h2>
	<p class="text-lg mb-8">To purchase original oil paintings online please visit my Etsy shop.</p>

	<h2 class="text-2xl font-semibold mb-2">Thoughts for my solo show in Roma 2014</h2>
	<p class="text-lg mb-8">
		...Il tempo fugge nonché sfugge a qualsiasi definizione--- (Margherita Hack)
		<br />
		La questione di cosa sia il fluire del tempo viene sottolineata dai filosofi dalla seconda metà del
		XIX, ma si è accentuata con la fisica moderna. Questa descrive formule che dicono del cambiamento
		delle cose in funzione della variabile “tempo”. Il vero problema è chiedersi cosa sia il presente
		- possiamo affermare che le uniche cose che esistono ora e qui sono quelle del presente: il passato
		non esiste, neanche il futuro. La fisica moderna rende ancora più intrigante la questione, la teoria
		della relatività di Einstein ha mostrato che la nozione di presente è addirittura mal definita: chiedersi
		se una cosa avviene proprio ora, ha significato solo per cose vicine nello spazio; il presente, come
		l’insieme degli eventi che accadono in questo momento nell'universo è solo una limitatezza delle
		nostre percezioni. In altre parole il presente, come lo concepiamo di solito, non esiste. Osservare
		il tempo, non giudicarlo ma assorbirlo intimamente fino a non dare più importanza al suo scorrere.
		Hiroshi Matsumoto non tenta una descrizione né una trascrizione del tempo, non vuole elaborare teorie
		scientifiche o filosofiche; con forza porta il fruitore a una semplice operazione: osservare senza
		pregiudizi, senza formare teorie, assorbire il suo corso senza prendere appunti; lasciarsi andare
		ed ascoltare il suo suono pulsante, accettare il suo scorrere e gioire di questo.
		<br />
		<br />
		Massimo Nicotra
	</p>

	<h2 class="text-2xl font-semibold mb-2">Thoughts for 9x9 painting series</h2>
	<p class="text-lg mb-8">
		Matsumoto's 9 x 9 paintings
		<br />
		The Matsumoto's 9 X 9 paintings are very intriguing and challenging: commentators have pointed to
		"..amazing use of color and texture draw us into a world of wondrous pigment and emotional expressions."
		But, in my opinion, such comments (while capturing real facts) on the whole miss the point. What
		distinguishes those little paintings from other, bigger ones, is the fact that they speak about such
		an elusive element as TIME.
		<br />
		<br />
		Time, in Matsumoto's "9x9"s, emerges in the sequence, not in any single painting: I mean, does the
		"June 4, 2009" speak about the weather of that particular day (and observed where?) or the inner
		attitude of the painter or anything else? I think it does not...according to Wittgenstein, there's
		no such thing as the flowing of time, it can only be measured by some other physical process, like
		the movement of the hands of a watch. Matsumoto' 9x9 paintings perform such a function, behave like
		different positions of the hands of a clock, the "June 4, 2009" says that there has already been
		the "June 3, 2009" and that "June 5, 2009" will follow...But, unlike watches, the 9x9 paintings keep
		memory of time, they accumulate, they grow in number, in a sense they make time visible, like a flower
		or a plant does, but they give a LINEAR representation to time, a painting a day, while physical
		phenomena usually have a nonlinear dynamics (one year in the life of a two years old little boy is
		not the same as one year in the life of a sixty years old man). So, in a way, life cannot be wholly
		captured by the 9x9 paintings, once more life is more complicated...a title for the whole sequence
		could be "The Physical Impossibility of Time representation In the Mind of Someone Living", to paraphrase
		the Damien Hirst's title for his very famous (and a bit expensive) shark.
		<br />
		<br />
		Francesco Filippi, Professor of Economics, University of Pisa, Italy August 2009
	</p>

	<h2 class="text-2xl font-semibold mb-2">Review of my work</h2>
	<p class="text-lg mb-8">
		C.J. Shane
		<br />
		April 2015
		<br />
		<a href="https://plus.google.com/+CJShane/posts/5ZdzzZA1Lj8" class="underline"
			>Read the review</a
		>
	</p>

	<h2 class="text-2xl font-semibold mb-2">Collections of Francesco Filippi</h2>
	<p class="text-lg mb-8">
		Laurel Sheridan
		<br />
		February 2015
		<br />
		<a href="https://www.pinterest.com/pin/330451691383437823/" class="underline"
			>View the collection</a
		>
	</p>
</main>
