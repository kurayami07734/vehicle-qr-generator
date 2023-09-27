<<<<<<< HEAD
<h1>Home</h1>
=======
<script>
	import Icon from '@iconify/svelte';
</script>

<div class="container">
	<article>
		<h1>Vehicle QR Codes</h1>
		<p>
			<i>Create QR Codes in a ziffy.<i /></i>
		</p>
	</article>
	<a href="/generate" role="button">Generate QR Code</a>
</div>
<div class="container">
	<article>
		<h4>Watch the Demo Video to know more:</h4>
		<video
			class="ipad tab mobile"
			poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
			src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
			controls
			loop
			muted
			width="640px"
			height="480px"
		/>
	</article>
</div>

<style>
	article {
		text-align: center;
	}
	p {
		text-align: center;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	@media (max-width: 1024px) {
		.ipad {
			width: 25%;
		}
	}

	@media (max-width: 768px) {
		.tab {
			width: 50%;
		}
	}

	@media (max-width: 500px) {
		.mobile {
			width: 100%;
		}
	}
</style>
>>>>>>> de8375b (wrote the generate page with the form contained within)
