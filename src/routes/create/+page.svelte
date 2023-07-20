<script lang="ts">
	interface Painting {
		date: Date;
		photoFile: File | null;
		title : string | null,
		desc : string | null
	}

	let painting: Painting = {
		date: new Date(),
		photoFile: null,
		title : null,
		desc : null
	};

	function addPicture() {
		// TODO: Handle form submission here
		console.log('Form submitted');
	}
</script>

<section class="flex flex-col items-center justify-center h-screen mx-8">
	<div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
		<p class="font-bold mt-4 mb-8 text-center">Adding new picture</p>

		<form on:submit={addPicture} class="space-y-4">
			<div>
				<label class="block text-sm font-medium">
					Title:
					<input
							type="text"
							bind:value={painting.title}
							class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
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
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Photo File:
					<input
						type="file"
						bind:value={painting.photoFile}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Description:
					<input
							type="text"
							bind:value={painting.desc}
							class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
					/>
				</label>
			</div>

			<div class="text-center">
				<button type="submit" class="btn px-4 py-2">Submit</button>
			</div>
		</form>
	</div>
</section>
