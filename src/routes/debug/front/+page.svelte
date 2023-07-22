<script lang="ts">
    export let data;
    async function debug(){
        console.log(await (await fetch(`${data.baseUrl}/items/2023-07-01/exists`)).json())
    }
</script>

<section class="flex flex-col items-center justify-center h-screen mx-8">
    <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-300">
        <p class="font-bold mt-4 mb-8 text-center">Debug</p>

        <div class="space-y-4">
            <p>Do you really want to debug?</p>
            <div class="text-center">
                <button class="btn px-4 py-2" on:click={() => debug()}>Debug</button>
            </div>
        </div>
    </div>
</section>
