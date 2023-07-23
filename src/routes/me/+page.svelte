<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Account at Hiroshi Matsumoto site</title>
</svelte:head>

<section class="flex flex-col items-center justify-center h-screen mx-8">
	<div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
		{#if data.error}
			<p style="color:red;">{data.error}</p>
		{/if}

		<p class="font-bold mt-4 mb-8 text-center">Create</p>

		<div class="space-y-4">
			<p>Do you want to <a href="/painting/create">create a painting?</a></p>
		</div>

		<br />

		<p class="font-bold mt-4 mb-8 text-center">Logout</p>

		<form class="space-y-4" method="POST">
			<p>Do you really want to log out?</p>
			<div class="text-center">
				<button type="submit" class="btn px-4 py-2">Log out</button>
			</div>
		</form>
	</div>
</section>
