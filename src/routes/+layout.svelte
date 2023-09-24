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
		margin: 1rem;
	}
	img {
		width: 30px;
		border-radius: 30px;
	}
</style>
