<template>
	<div class="location">
		<small class="font-medium text-gray-500">{{ location.locationName }}</small>
		<div class="flex items-center rounded-lg px-3 py-2 border">
			<div class="whitespace-nowrap md:max-w-lg w-[12rem] overflow-hidden">
				<p class="font-medium">{{ location.locationAdd }}</p>
			</div>
			<div class="ml-auto shrink-0 mt-1">
				<button class="mr-2"><img src="~/assets/images/edit.svg" alt="" /></button>
				<button @click.stop="$emit('delete-location', location)"><img src="~/assets/images/trash.svg" alt="" /></button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["location"],
};
</script>
