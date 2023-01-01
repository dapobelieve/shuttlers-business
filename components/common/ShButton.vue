<template>
	<button :disabled="disabled" @click="$emit('click', $event)">
		<ShLoader v-if="loading" class="ms-1" />
		<slot v-else></slot>
	</button>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped></style>
