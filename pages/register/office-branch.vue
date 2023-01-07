<template>
	<ShCard class="">
		<h2 class="text-2xl font-medium select-none">Add Office Branches</h2>
		<div class="my-3">
			<hr />
		</div>
		<div class="w-full py-6">
			<div class="mb-4">
				<Location class="mb-5" @delete-location="deleteLocation" :key="index" v-for="(location, index) in locations" :location="location" />
			</div>
			<div class="flex justify-center">
				<button @click="$modal.show('location-modal')" class="text-green-700 font-medium">+ Click to add office branch</button>
			</div>
		</div>
		<div class="w-full flex mt-4">
			<ShButton @click="$router.go(-1)" class="bg-white px-8 rounded-md text-black border text-xs font-semibold py-3"> Back </ShButton>
			<ShButton
				@click="$router.push({ name: 'register-work-shifts' })"
				class="bg-black-900 px-8 ml-auto rounded-md text-white text-xs font-semibold py-3"
			>
				Continue
			</ShButton>
		</div>
		<LocationModal @location-added="addLocation" />
	</ShCard>
</template>
<script>
export default {
	data() {
		return {
			locations: [],
		};
	},
	methods: {
		addLocation(data) {
			this.locations.push(data);
		},
		deleteLocation(data) {
			console.log("deleting...");
			this.locations.splice(this.locations.indexOf(data), 1);
		},
	},
};
</script>
