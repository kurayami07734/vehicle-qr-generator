<script lang="ts">
	import { Html5QrcodeScanner } from 'html5-qrcode';
	import { onMount } from 'svelte';
	function onScanSuccess(decodedText, decodedResult) {
		console.log(`Code matched = ${decodedText}`, decodedResult);
	}

	function onScanFailure(error) {
		console.warn(`Code scan error = ${error}`);
	}
	onMount(() => {
		let html5QrcodeScanner = new Html5QrcodeScanner(
			'reader',
			{ fps: 10, qrbox: { width: 250, height: 250 } },
			false
		);
		html5QrcodeScanner.render(onScanSuccess, onScanFailure);
	});
</script>

<div class="container">
	<div id="reader" />
</div>
