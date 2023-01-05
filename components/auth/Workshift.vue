<template>
	<ShCard class="">
		<h2 class="text-2xl font-medium select-none">Setup work shifts</h2>
		<div class="my-3">
			<hr />
		</div>
		<div class="w-full py-6">
			<div class="mb-4">
				<WorkShifts class="mb-5" @delete-location="deleteLocation" :key="index" v-for="(shift, index) in shifts" :location="shift" />
			</div>
			<div class="flex justify-center">
				<button @click="$modal.show('workshift-modal')" class="text-green-700 font-medium">+ Click to add work shift</button>
			</div>
		</div>
		<div class="w-full flex mt-4">
			<ShButton @click="$emit('back')" class="bg-white px-8 rounded-md text-black border text-xs font-semibold py-3"> Back </ShButton>
			<ShButton @click="$emit('complete')" class="bg-black-900 px-8 ml-auto rounded-md text-white text-xs font-semibold py-3"> Continue </ShButton>
		</div>
		<WorkshiftModal @workshift-added="" />
	</ShCard>
</template>
<script>
export default {
	data() {
		return {
			shifts: [],
		};
	},
	mounted() {
		// this.$modal.show("workshift-modal");
	},
	methods: {
		addWorkshift(data) {
			this.shifts.push(data);
		},
		deleteLocation(data) {
			console.log("deleting...");
			this.shifts.splice(this.shifts.indexOf(data), 1);
		},
	},
};
</script>
