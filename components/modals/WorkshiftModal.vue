<template>
  <modal name="workshift-modal" height="auto" :width="408" :clickToClose="false" :adaptive="true">
    <div class="">
      <div class="mx-5 my-5">
        <div class="flex">
          <h2 class="text-lg font-medium select-none">Add new workshift</h2>
          <button @click="closeModal" class="ml-auto">
            <img src="~/assets/images/remove.svg" alt="" />
          </button>
        </div>
      </div>
      <hr />
      <div class="flex justify-between items-center mb-4">
        <button type="button" @click="$modal.hide('change-password-modal')">
          <i class="fi-rr-cross text-lg text-blue-500"></i>
        </button>
      </div>
      <div class="px-5 pb-4">
        <div class="w-full mb-4">
          <label class="text-xs font-medium text-gray-500" for="">Start time</label>
          <time-picker class="mt-2" v-model="openingTime" format="hh:mm A"></time-picker>
        </div>
        <div class="w-full mb-4">
          <label class="text-xs font-medium text-gray-500" for="">Closing time</label>
          <time-picker class="mt-2" v-model="closingTime" format="hh:mm A"></time-picker>
        </div>
        <div class="w-full md:flex mt-10 mb-5">
          <ShButton :disabled="!disabled" @click="submit" class="bg-black-900 px-8 ml-auto w-full rounded-md text-white text-xs font-semibold py-3">
            Add work shift
          </ShButton>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      openingTime: "",
      closingTime: "",
    };
  },
  computed: {
    disabled() {
      return !!(this.closingTime && this.openingTime);
    },
  },
  methods: {
    submit() {
      if (this.openingTime && this.closingTime) {
        this.$emit("workshift-added", { ...this.$data });
        this.closeModal();
      }
    },
    closeModal() {
      this.openingTime = "";
      this.closingTime = "";
      this.$modal.hide("workshift-modal");
    },
  },
};
</script>
