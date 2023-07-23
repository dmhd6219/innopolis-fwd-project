<script>
    import {format} from 'date-fns';

    export let data;
</script>

<svelte:head>
    <title>Painting at Hiroshi Matsumoto site</title>
</svelte:head>

<section class="flex flex-col md:flex-row">
    <div class="md:w-1/2 bg-base-200 flex flex-col items-center justify-center pb-24 pt-24">
        <img src={data.imageUrl} alt="painting" class="w-1/2 mx-auto mb-4 shadow-2xl"/>
        <p class="text-xs text-gray-500">I appreciate your support. Thanks, Hiroshi.</p>
    </div>
    <div class="md:w-1/2 p-20">
        <a href="/paintings" class="text-sm">&lt; Back</a>
        <h2 class="text-3xl font-bold mt-16 mb-6">
            {format(data.date, 'MMMM dd, yyyy')}
        </h2>
        <p class="text-sm text-gray-500 mb-4">
            Collection: 9 by 9 paintings<br/>
            Materials: Oil on canvas<br/>
            Size: 9 cm by 9 cm
            {#if data.title}
                <br/>Title : {data.title}
            {/if}
            {#if data.description}
                <br/>Description : {data.description}
            {/if}
        </p>
        <hr class="my-4"/>
        <a href="https://www.etsy.com/shop/hiroshimatsumoto" target="_blank">
            <button class="bg-black text-white py-2 px-4 w-full mt-4 mb-8">Buy on Etsy Shop</button>
        </a>
        <!-- FEATURE: For admin -->
        {#if data.logged && !data.original}
            <div class="flex justify-between">
                <a class="bg-sky-400 text-white py-2 px-4 mr-2 w-1/2"
                   href="/painting/{format(data.date, 'yyyy-MM-dd')}/edit">Edit</a>
                <a class="bg-red-400 text-white py-2 px-4 ml-2 w-1/2"
                   href="/painting/{format(data.date, 'yyyy-MM-dd')}/delete">Delete</a>
            </div>
        {/if}
    </div>
</section>
