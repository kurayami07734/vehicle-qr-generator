<script>
	import '@picocss/pico';
	import '../app.css';
	import { authUser } from '$lib/authStore';
</script>

<nav>
	<ul>
		<li>
			<strong><a href="/"> Vehicle QR codes</a></strong>
		</li>
	</ul>
	<ul class="nav-links">
		<li><a href="/aboutus">About Us</a></li>
		<li><a href="/scan">Scan</a></li>
		{#if $authUser !== undefined}
			<li>
				<a href="/me">
					<img src={$authUser.photoURL} alt={`photo of ${$authUser.displayName}`} />
				</a>
			</li>
		{:else}
			<li><a href="/login">Sign in</a></li>
		{/if}
	</ul>
</nav>

<slot />

<style>
	nav {
		padding-left: 1rem;
		padding-right: 1rem;
		position: sticky;
		position: -webkit-sticky;
		z-index: 100;
		top: 0;
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		box-shadow: 0px 1px;
	}
	img {
		width: 30px;
		border-radius: 30px;
	}
</style>
