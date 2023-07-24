<script lang="ts">
	interface Painting {
		date: Date;
		photoFile: File | null;
		title: string | null;
		desc: string | null;
	}

	let painting: Painting = {
		date: new Date(),
		photoFile: null,
		title: null,
		desc: null
	};

	export let data;
</script>

<svelte:head>
	<title>Create a Painting at Hiroshi Matsumoto site</title>
	<meta
		name="description"
		content="Add new painting in Hiroshi Matsumoto's website effortlessly. Make sure you are signed in."
	/>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-8">
	<div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
		<p class="font-bold mt-4 mb-8 text-center">Adding new picture</p>

		{#if data.error}
			<p style="color:red;">{data.error}</p>
		{/if}
		<form method="post" class="space-y-4" enctype="multipart/form-data">
			<div>
				<label class="block text-sm font-medium">
					Title:
					<input
						type="text"
						bind:value={painting.title}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						name="title"
						required
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Date:
					<input
						type="date"
						bind:value={painting.date}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
						name="date"
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Photo File:
					<input
						type="file"
						accept="image/png, image/jpeg"
						bind:value={painting.photoFile}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
						name="file"
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Description:
					<textarea
						bind:value={painting.desc}
						class="form-textarea mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						rows="2"
						required
						name="desc"
					/>
				</label>
			</div>

			<div class="text-center">
				<button type="submit" class="btn px-4 py-2">Submit</button>
			</div>
		</form>
	</div>
</section>
