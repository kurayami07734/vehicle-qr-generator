<script>
	export let data;
	let svg = data.svg;
	let blob = new Blob([svg], { type: 'image/svg+xml' });
	let url = URL.createObjectURL(blob);
</script>

<div class="container">
	<h1>{data.model}</h1>
	<h2>{data.maker}</h2>
	<h2>{data.color}</h2>
	<img src={url} alt="qrcode" width="300" />
</div>
