<script lang="ts">
	import { goto } from '$app/navigation';
	import { Html5QrcodeScanner } from 'html5-qrcode';
	import { onMount } from 'svelte';
	function onScanFailure(error) {
		console.warn(`Code scan error = ${error}`);
	}
	onMount(() => {
		let html5QrcodeScanner = new Html5QrcodeScanner(
			'reader',
			{ fps: 10, qrbox: { width: 250, height: 250 } },
			false
		);
		html5QrcodeScanner.render((text, result) => {
			const link = text.split('/');
			goto(`/qr/${link[2]}`);
			// html5QrcodeScanner.clear();
		}, onScanFailure);
	});
</script>

<div class="container">
	<div id="reader" />
</div>
