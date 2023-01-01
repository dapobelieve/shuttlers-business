<template>
	<ShCard class="">
		<h2 class="text-2xl font-medium select-none">Business Information</h2>
		<div class="my-3">
			<hr />
		</div>
		<div class="w-full md:flex gap-4 pt-4">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Company Name</label>
				<ShInput placeholder="Enter company name" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Your role in the company</label>
				<ShSelect class="mt-2" placeholder="Select" />
			</div>
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Staff Strength</label>
				<ShSelect class="mt-2" placeholder="Select" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 pt-4">
			<div class="w-full mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Company location/address</label>
				<ShInput placeholder="Enter Address" type="text" class="mt-2" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Desired shuttle start date</label>
				<ShDatePicker class="mt-2" />
			</div>
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Preferred package type</label>
				<ShSelect class="mt-2" placeholder="Select" />
			</div>
		</div>
		<div class="w-full md:flex gap-4 mt-2">
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Resumption Time</label>
				<ShSelect class="mt-2" placeholder="Select" />
			</div>
			<div class="w-full md:w-1/2 mb-4">
				<label class="text-xs font-medium text-gray-500" for="">Closing Time</label>
				<ShSelect class="mt-2" placeholder="Select" />
			</div>
		</div>
		<div class="w-full md:flex mt-4">
			<ShButton @click="$emit('back')" class="bg-white px-8 rounded-md text-black border text-xs font-semibold py-3"> Back </ShButton>
			<ShButton disabled class="bg-gray-300 px-8 ml-auto rounded-md text-white text-xs font-semibold py-3"> Continue </ShButton>
		</div>
	</ShCard>
</template>
<script>
export default {};
</script>
