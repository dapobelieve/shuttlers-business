<template>
	<ShCard class="">
		<h2 class="text-2xl font-medium select-none">Personal Information</h2>
		<div class="my-3">
			<hr />
		</div>
		<div class="w-full md:flex gap-4 pt-4">
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">First Name</label>
				<ShInput placeholder="Enter first Name" type="text" class="mt-2" />
			</div>
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Last Name</label>
				<ShInput placeholder="Enter last Name" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Work Email Address</label>
				<ShInput placeholder="Enter email" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Corporate Phone Number</label>
				<PhoneNumberComponent class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex mt-4">
			<ShButton disabled class="bg-gray-300 px-8 ml-auto rounded-md text-white text-xs font-semibold py-3"> Continue </ShButton>
		</div>
	</ShCard>
</template>
<script>
export default {};
</script>
