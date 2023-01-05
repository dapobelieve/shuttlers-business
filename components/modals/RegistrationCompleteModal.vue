<template>
  <modal name="complete-reg-modal" height="auto" :width="408" :clickToClose="false" :adaptive="true">
    <div class="">
      <div class="px-5 py-4 flex flex-col items-center">
        <div class="mb-5 mt-2">
          <img src="~/assets/images/check-green.svg" alt="" />
        </div>
        <div class="text-center">
          You have completed the registration process and your account has been submitted for verification, we will notify you once your account has
          been verified.
        </div>
        <div class="w-full md:flex mt-10 mb-5">
          <ShButton
            @click="$modal.hide('complete-reg-modal')"
            class="bg-black-900 px-8 ml-auto w-full rounded-md text-white text-xs font-semibold py-3"
          >
            Go to Dashboard
          </ShButton>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
