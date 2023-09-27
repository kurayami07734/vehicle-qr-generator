<script>
	import { db } from '$lib/firebase';
	import { authUser } from '$lib/authStore';
	import { setDoc, doc } from 'firebase/firestore/lite';
	import { createForm } from 'svelte-forms-lib';
	import { goto } from '$app/navigation';
	import * as yup from 'yup';

	async function qr(regNo) {
		const url = `https://vehicle-qr-generator.vercel.app/qr/${regNo}`;
		const res = await fetch(`/make-qr/?url=${url}`);
		let json = await res.json();
		return json['svg'];
	}
	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			registrationNumber: '',
			color: '',
			ownerName: '',
			makerName: '',
			model: '',
			class: '',
			registrationDate: '',
			validityEndDate: ''
		},
		validationSchema: yup.object().shape({
			registrationNumber: yup
				.string()
				.min(10, 'Must be 10 Characters Long!')
				.max(10, 'Must be 10 Characters Long!')
				.required('Registration Number is Required!'),
			ownerName: yup.string().required(),
			color: yup.string().required(),
			makerName: yup.string().required()
		}),
		onSubmit: async (values) => {
			alert(JSON.stringify(values));
			setDoc(doc(db, 'qr-codes', values.registrationNumber.toUpperCase()), {
				color: values.color,
				ownerName: $authUser?.displayName,
				ownerUid: $authUser?.uid,
				model: values.model,
				registrationDate: values.registrationDate,
				validityEndDate: values.validityEndDate,
				class: values.class,
				maker: values.makerName,
				svg: await qr(values.registrationNumber)
			}).catch((e) => alert(e.toString()));
			goto(`/qr/${values.registrationNumber}`);
		}
	});
</script>

<div class="container">
	<h3>Enter the Details of Vehicle</h3>
	<form on:submit|preventDefault={handleSubmit}>
		<div class="grid">
			<label for="registration-number">
				Registration Number
				<input
					type="text"
					name="registration-number"
					bind:value={$form.registrationNumber}
					placeholder="Registration number of vehicle"
					on:change={handleChange}
				/>
				{#if $errors.registrationNumber}
					<small>{$errors.registrationNumber}</small>
				{/if}
			</label>
			<label for="color">
				Color of Vehicle
				<input
					type="text"
					name="color"
					placeholder="Color of vehicle"
					bind:value={$form.color}
					on:change={handleChange}
				/>
				{#if $errors.color}
					<small>{"Vehicle's Color is Required!"}</small>
				{/if}
			</label>
		</div>
		<div class="grid">
			<label for="owner">
				Owner's Name
				<input
					type="text"
					name="owner"
					placeholder="Owner's Name"
					bind:value={$form.ownerName}
					on:change={handleChange}
				/>
				{#if $errors.ownerName}
					<small>{"Owner's Name is Required!"}</small>
				{/if}
			</label>
			<label for="make">
				Maker of Vehicle
				<input
					type="text"
					name="make"
					placeholder="Maker of vehicle"
					bind:value={$form.makerName}
					on:change={handleChange}
				/>
				{#if $errors.makerName}
					<small>{"Manufacturer's Name is Required!"}</small>
				{/if}
			</label>
		</div>
		<div class="grid">
			<label for="model">
				Model of Vehicle
				<input
					type="text"
					name="model"
					placeholder="Model of vehicle"
					bind:value={$form.model}
					on:change={handleChange}
				/>
			</label>
			<label for="vehicle-class">
				Class of Vehicle
				<select
					name="vehicle-class"
					id="vehicle-class"
					bind:value={$form.class}
					on:change={handleChange}
				>
					<option value="MCWOG">Motorcycle without gears (Scooters and Mopeds)</option>
					<option value="MCWG">Motorcycle with gears </option>
					<option value="LMV">Light Motor Vehicle (Cars and SUVs)</option>
				</select>
			</label>
		</div>
		<div class="grid">
			<label for="date"
				>Registration Date
				<input
					type="date"
					id="date"
					name="reg-date"
					bind:value={$form.registrationDate}
					on:change={handleChange}
				/>
			</label>
			<label for="date"
				>Registration Validity
				<input
					type="date"
					id="date"
					name="valid-end-date"
					bind:value={$form.validityEndDate}
					on:change={handleChange}
				/>
			</label>
		</div>
		<!-- <div class="grid">
			<label for="date"
				>Date
				<input type="date" id="date" name="date" />
			</label>
		</div>
		<label for="chassis-number">
			Chassis Number
			<input type="text" name="chassis-number" placeholder="Chassis number of vehicle" />
		</label> -->
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	/* img {
		width: 300px;
	} */
</style>
