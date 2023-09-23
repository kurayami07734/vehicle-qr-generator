import { writable } from 'svelte/store';
interface AuthUser {
	uid: string;
	email: string;
	photoURL: string | null;
	displayName: string | null;
}

const authUser = writable<AuthUser | undefined>(undefined);
export { authUser };
