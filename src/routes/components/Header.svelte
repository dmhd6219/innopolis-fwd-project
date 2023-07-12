<script>
	import LogoImage from '$lib/logo.png';
</script>

<div class="navbar bg-base-200">
	<div class="flex-1">
	  <div class="flex items-center">
	    <img src={LogoImage} alt="Logo" class="h-8 w-8 m-4">
	    <a href="/" class="normal-case text-l">Hiroshi Matsumoto</a>
	  </div>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="/paintings">Paintings</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
	  </ul>
	</div>
  </div>