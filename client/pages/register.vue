<template>
	<div>
		<div class="_2menu">
			<div class="_2menu_con">
				<div class="row align-items-center">
					<div class="col">
						<router-link to="/">
							<h3 class="_menu_logo_text">
								<span class="_menu_logo_symbol">T</span>
								<span class="_menu_logo_text_main">TO-DO</span>
							</h3>
						</router-link>
					</div>

					<div class="col-auto">
						<router-link to="/login">
							<button class="_log_btn _2menu_long" type="button">
								Login
							</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>

		<!-- Banner -->
		<div class="_4banner">
			<div class="_4banner_main">
				<h1 class="_4banner_title">TO-DO APP</h1>
				<p class="_4banner_text">
					Arrange your works like never before
				</p>
			</div>
		</div>
		<!-- Banner -->

		<!-- Form -->
		<div class="_log_form_main">
			<h2 class="_log_form_title">Sign Up</h2>

			<div class="_log_form">
				<div class="_log_input_group">
					<Input
						v-model="form.name"
						placeholder="Name"
						size="large"
						type="text"
					></Input>
				</div>

				<div class="_log_input_group">
					<Input
						v-model="form.email"
						placeholder="Email address"
						size="large"
						type="text"
					></Input>
				</div>
				<div class="_log_input_group">
					<Input
						v-model="form.password"
						placeholder="Password"
						size="large"
						type="password"
						password
					></Input>
				</div>
				<div class="_log_input_group">
					<Input
						v-model="form.address"
						placeholder="address"
						size="large"
						type="text"
						password
					></Input>
				</div>

				<div class="_log_button">
					<Button
						@click.native="register"
						:loading="isLoading"
						:disabled="isLoading"
						type="success"
						size="large"
						long
						>{{ isLoading ? "Please wait..." : "Sign Up" }}</Button
					>
				</div>
			</div>
		</div>
		<!-- Form -->
	</div>
</template>
<script>
export default {
	midleware: "guest",
	data() {
		return {
			form: {
				name: "",
				email: "",
				password: "",
				address: "",
				
			},

			isLoading: false,
		};
	},
	methods: {
		async register() {
			
			if (this.form.name == "") return this.i("Firstname is requied");

			if (this.form.email == "") return this.i("Email is requied");

			if (this.form.password == "") return this.i("Password is requied");
			if (this.form.password.trim().length < 6)
				return this.i("Password must be at least 6 charecters long.");

			if (this.form.adress == "") return this.i("Address is required");
			this.form.email = this.form.email.toLowerCase();
			this.isLoading = true;
			console.log(this.form);
			const res = await this.callApi("post", "/auth/register", this.form);
			if (res.status == 200) {
				this.s(res.data.msg);
				this.clearData();
			}
			this.isLoading = false;
		},

		clearData() {
			this.form = {
				name: "",
				email: "",
				password: "",
				address: "",
				
			};
		},
	},
};
</script>