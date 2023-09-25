<script lang="ts">
	import { modalStore } from '$lib/modalStore';
</script>

<dialog open>
	<article>
		<header>
			<a
				href="#close"
				aria-label="Close"
				class="close"
				on:click={() => modalStore.set(undefined)}
			/>
			{$modalStore?.title}
		</header>
		<p>
			{$modalStore?.content}
		</p>
		<footer>
			<button on:click={() => $modalStore?.callbackFunction()}>callback</button>
		</footer>
	</article>
</dialog>
