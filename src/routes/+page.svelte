<script>
    export let data;

</script>

<section class="flex flex-col items-center justify-center w-4/5 max-w-xl mx-auto mt-16 mb-16">
    <a href="/painting/{data.formattedDate}"><img class="w-full mb-4" src={data.url} alt="Today's painting"/></a>
    <div class="text-xl font-bold mb-4 text-center">Original Abstract Oil Paintings by Hiroshi Matsumoto</div>
    <button class="btn"><a href="./paintings">Explore</a></button>
</section>
