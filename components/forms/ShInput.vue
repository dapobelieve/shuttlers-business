<template>
	<div>
		<input
			:value="value"
			@input="$emit('input', $event.target.value)"
			:type="type"
			class="w-full font-medium focus:outline-none rounded-[6px] h-4 px-4 py-6 h-10"
			:placeholder="placeholder"
		/>
		<!-- <span class="" @click="displayPass = !displayPass" :class="!displayPass ? 'ed-eye' : 'ed-eye-off'"></span> -->
	</div>
</template>
<script>
export default {
	props: ["value", "placeholder", "type"],
	data() {
		return {
			displayPass: false,
		};
	},
};
</script>
<style id="lang">
input {
	border: 0.6px solid #c6c8c7;
	border-radius: 6px;
}
</style>
