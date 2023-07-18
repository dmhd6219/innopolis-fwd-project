<script>
	import LogoImage from '$lib/logo.png';
</script>

<div class="navbar bg-base-200">
	<div class="flex-1">
		<a href="/" class="flex items-center m-8 ml-14">
			<img src={LogoImage} alt="Logo" class="h-6 w-6 mr-4" />
			<p class="text-xs">HIROSHI MATSUMOTO</p>
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li class="text-xs"><a href="/paintings">PAINTINGS</a></li>
			<li class="text-xs"><a href="/about">ABOUT</a></li>
			<li class="text-xs"><a href="/contact">CONTACT</a></li>
		</ul>
	</div>
</div>
