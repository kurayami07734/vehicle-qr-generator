// // import { goto } from '$app/navigation';
// // import { db } from '$lib/firebase.js';
// import { redirect } from '@sveltejs/kit';
// export const ssr = false;
// async function qr(url) {
// 	const res = await fetch(`/make-qr/?url=${link}`);
// 	let json = await res.json();
// 	return;
// }

// export const actions = {
// 	create: async ({ cookies, request }) => {
// 		const formData = await request.formData();
// 		const data = {
// 			registrationNumber: formData.get('registration-number'),
// 			color: formData.get('color'),
// 			ownerName: formData.get('ownerName'),
// 			make: formData.get('make'),
// 			model: formData.get('model'),
// 			vehicleClass: formData.get('vehicle-class'),
// 			registrationDate: formData.get('reg-date'),
// 			validityEndDate: formData.get('valid-end-date')
// 		};
// 		console.log(data);
// 	},

// 	delete: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		// db.deleteTodo(cookies.get('userid'), data.get('id'));
// 	}
// };

import { authUser } from '$lib/authStore';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	const unsubscribe = authUser.subscribe((user) => {
		if (!user) {
			throw redirect(302, '/login');
		}
	});
	unsubscribe();
	return {};
};
