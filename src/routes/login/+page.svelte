<script>
	import { firebaseAuth } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/authStore';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import Icon from '@iconify/svelte';
	function loginWithGoogle() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(firebaseAuth, provider)
			.then((userCredential) => {
				$authUser = {
					displayName: userCredential.user.displayName,
					photoURL: userCredential.user.photoURL,
					uid: userCredential.user.uid,
					email: userCredential.user.uid
				};
				goto(`/me`);
			})
			.catch((e) => {
				console.log(e.toString());
			});
		goto('/');
	}
</script>

<div class="container">
	<button on:click={() => loginWithGoogle()}>
		<Icon icon="bi:google" style="font-size:2rem;" /> Continue with Google</button
	>
	<button><Icon icon="ic:baseline-phone" style="font-size:2rem;" /> Login with Phone & OTP</button>
</div>
