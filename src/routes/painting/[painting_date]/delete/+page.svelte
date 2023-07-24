<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Delete a Painting at Hiroshi Matsumoto site</title>
	<meta name="description" content="Remove a painting from Hiroshi Matsumoto's website effortlessly. Make sure you are signed in.">
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-8">
	<div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
		<p class="font-bold mt-4 mb-8 text-center">Delete</p>

		{#if data.error}
			<p style="color:red;">{data.error}</p>
		{/if}
		<form class="space-y-4" method="POST">
			<p>Do you really want to delete {data.formattedDate}?</p>
			<div class="text-center">
				<button type="submit" class="btn px-4 py-2">Delete</button>
			</div>
		</form>
	</div>
</section>
