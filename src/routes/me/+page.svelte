<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/authStore';
	import { firebaseAuth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
	function logout() {
		signOut(firebaseAuth)
			.then(() => {
				$authUser = undefined;
				goto('/login');
			})
			.catch((e) => {
				console.log(e.toString());
			});
	}
</script>

<div class="container">
	<h1>
		Hello, {$authUser?.displayName || 'Name not found'}
	</h1>

	<img src={$authUser?.photoURL} alt={`photo of {${$authUser?.displayName}}`} />

	<button on:click={() => logout()}> Log out</button>
</div>
