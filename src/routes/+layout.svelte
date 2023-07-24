<script>
    import '../app.postcss';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
</script>

<body>
<Header/>
<main>
    <slot/>
</main>
<Footer/>
</body>
