import { writable } from 'svelte/store';
interface ModalProps {
	isVisible: boolean;
	title: string;
	content: string;
	callbackFunction: Function;
}
export const modalStore = writable<ModalProps | undefined>(undefined);
