<script>
	import '@picocss/pico';
</script>

<nav>
	<ul>
		<li>
			<strong> Vehicle QR codes</strong>
		</li>
	</ul>
	<ul class="nav-links">
		<li>Generate</li>
		<li>Scan</li>
		<li><a href="/sign-in">Sign in</a></li>
	</ul>
</nav>

<slot />

<style>
	nav {
		margin: 1rem;
	}
</style>
