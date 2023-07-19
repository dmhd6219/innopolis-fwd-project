<script>
	import LogoImage from '$lib/logo.png';
</script>

<header class="navbar bg-base-200 flex flex-col md:flex-row">
	<div class="flex-1">
		<a href="/" class="flex items-center m-8 md:ml-14">
			<img src={LogoImage} alt="Logo" class="h-6 w-6 mr-4" />
			<h1 class="text-xs">HIROSHI MATSUMOTO</h1>
		</a>
	</div>
	<nav class="flex-none md:flex md:items-center">
		<ul class="menu menu-horizontal px-1 md:flex md:gap-4">
			<li class="text-xs"><a href="/paintings">PAINTINGS</a></li>
			<li class="text-xs"><a href="/about">ABOUT</a></li>
			<li class="text-xs"><a href="/contact">CONTACT</a></li>
		</ul>
	</nav>
</header>
