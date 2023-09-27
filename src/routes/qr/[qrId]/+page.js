import { db } from '$lib/firebase';
import { error } from '@sveltejs/kit';
import { getDoc, doc } from 'firebase/firestore/lite';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// console.log(params.qrId)
	const docRef = doc(db, 'qr-codes', params.qrId);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		console.log(docSnap.data());
		return { ...docSnap.data() };
	} else {
		throw error(404, 'QR code not found');
	}
}
