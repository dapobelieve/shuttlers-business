<template>
	<ShCard class="">
		<h2 class="text-2xl font-medium select-none">Create Password</h2>
		<div class="my-3">
			<hr />
		</div>
		<div class="w-full md:flex gap-4 pt-4">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Password</label>
				<ShPassword v-model="password" placeholder="Enter password" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Confirm Password</label>
				<ShPassword v-model="confirmPassword" placeholder="Confirm Password" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full flex mt-4">
			<ShButton @click="$emit('back')" class="bg-white px-8 rounded-md text-black border text-xs font-semibold py-3"> Back </ShButton>
			<ShButton @click="$emit('complete')" class="bg-black-900 px-8 ml-auto rounded-md text-white text-xs font-semibold py-3"> Continue </ShButton>
		</div>
	</ShCard>
</template>
<script>
export default {
	data() {
		return {
			password: "",
			confirmPassword: "",
		};
	},
};
</script>
