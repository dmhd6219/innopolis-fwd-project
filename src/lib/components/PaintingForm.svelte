<script lang="ts">
	interface Painting {
		date: Date;
		photoFile: File | null;
		collection: string;
		materials: string;
		size: string;
		isPrivate: boolean;
	}

	let painting: Painting = {
		date: new Date(),
		photoFile: null,
		collection: '',
		materials: '',
		size: '',
		isPrivate: false
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
					Collection:
					<input
						type="text"
						bind:value={painting.collection}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Materials:
					<input
						type="text"
						bind:value={painting.materials}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
					/>
				</label>
			</div>

			<div>
				<label class="block text-sm font-medium">
					Size:
					<input
						type="text"
						bind:value={painting.size}
						class="form-input mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
						required
					/>
				</label>
			</div>

			<div class="">
				<label class="block text-sm font-medium flex">
					Private:
					<input
						type="checkbox"
						bind:checked={painting.isPrivate}
						class="checkbox h-5 w-5 ml-2 border border-gray-300"
					/>
				</label>
			</div>
            
			<div class="text-center">
				<button type="submit" class="btn px-4 py-2">Submit</button>
			</div>

            
		</form>
	</div>
</section>
