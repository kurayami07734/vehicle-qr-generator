<script>
	import PersonCard from '../../components/personCard.svelte';
</script>

<div class="container">
	Pythonista is a team of 3 students from <a href="https://www.instagram.com/nit_raipur/?hl=en"
		>National Institute of Technology Raipur</a
	>
	who are pusruing Bachelor of Technology in the domain of <i>Electrical Engineering</i>.<br />
	We have a keen interest in Software Development, Machine Learning and Data Science. Do reach out to
	us if you want to collaborate.
	<div class="responsive-container-block container">
		<p class="text-blk team-head-text">Our Team</p>
		<div class="responsive-container-block">
			<div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
				<PersonCard
					name="Aditya Ghidora"
					position="Senior Year"
					description="NIT Raipur"
					inlink="https://www.linkedin.com/in/aditya-ghidora/"
					github="https://github.com/kurayami07734"
					image="https://avatars.githubusercontent.com/u/60501848?v=4"
				/>
			</div>
			<div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
				<PersonCard
					name="Aditya Kumar Dubey"
					position="Senior Year"
					description="NIT Raipur"
					inlink="https://www.linkedin.com/in/adityush007/"
					github="https://github.com/adityush007"
					image="https://avatars.githubusercontent.com/u/79398033?v=4"
				/>
			</div>
			<div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
				<PersonCard
					name="Saswat Meher"
					position="Senior Year"
					description="NIT Raipur"
					inlink="https://www.linkedin.com/in/saswat-meher-924886192/"
					github="https://github.com/Saswat290401"
					image="https://avatars.githubusercontent.com/u/83302277?v=4"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap');
	div {
		text-align: justify;
	}
	* {
		font-family: Nunito, sans-serif;
	}

	.responsive-cell-block {
		min-height: 75px;
	}

	.responsive-container-block {
		min-height: 75px;
		height: fit-content;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 0px;
		margin-right: auto;
		margin-bottom: 0px;
		margin-left: auto;
		justify-content: space-evenly;
	}

	.team-head-text {
		font-size: 48px;
		font-weight: 900;
		text-align: center;
	}

	.team-head-text {
		line-height: 50px;
		width: 100%;
		margin-top: 0px;
		margin-right: 0px;
		margin-bottom: 50px;
		margin-left: 0px;
	}

	.container {
		max-width: 1380px;
		margin-top: 60px;
		margin-right: auto;
		margin-bottom: 60px;
		margin-left: auto;
		padding-top: 0px;
		padding-right: 30px;
		padding-bottom: 0px;
		padding-left: 30px;
	}

	.card-container {
		width: 280px;
		margin-top: 0px;
		margin-right: 10px;
		margin-bottom: 25px;
		margin-left: 10px;
	}

	@media (max-width: 500px) {
		.card-container {
			width: 100%;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 25px;
			margin-left: 0px;
		}
	}

	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.wk-desk-3 {
		width: 25%;
	}

	@media (max-width: 1024px) {
		.wk-ipadp-3 {
			width: 25%;
		}
	}

	@media (max-width: 768px) {
		.wk-tab-6 {
			width: 50%;
		}
	}

	@media (max-width: 500px) {
		.wk-mobile-12 {
			width: 100%;
		}
	}
</style>
