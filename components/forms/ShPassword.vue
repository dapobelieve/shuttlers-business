<template>
	<div class="relative flex">
		<input
			:value="value"
			@input="$emit('input', $event.target.value)"
			:type="displayPass ? 'text' : 'password'"
			class="w-full font-medium focus:outline-none rounded-[6px] h-4 px-4 py-6 h-10"
			:placeholder="placeholder"
		/>
		<span @click="displayPass = !displayPass">
			<img class="absolute cursor-pointer right-4 bottom-4" src="~/assets/images/eye.svg" alt="eye-icon" />
		</span>
	</div>
</template>
<script>
export default {
	props: ["value", "placeholder"],
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
