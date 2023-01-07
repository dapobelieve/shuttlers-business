<template>
  <div class="flex flex-col h-screen">
    <div class="py-4 bg-black-900 flex justify-center items-center w-full">
      <div class="">
        <img alt="" src="~/assets/images/logo.svg" />
      </div>
    </div>
    <div class="w-full flex justify-center flex-grow">
      <main class="container md:max-w-4xl lg:max-w-full 2xl:max-w-7xl w-full mx-auto pt-16">
        <div class="grid md:grid-cols-2 grid-cols-1">
          <div class="md:flex flex-col md:px-0 px-4 items-center">
            <div class="max-w-lg md:fixed text-center md:text-left">
              <h1 class="text-2xl font-bold mb-1 leading-10">Get started with Shuttlers for Business</h1>
              <p class="text-lg text-gray-400 mb-1">Provide your business details so we can get the best package for your business.</p>
              <small class="text-gray-400 mb-4">Already have an account? <a class="text-green-700 font-bold" href="#">Login</a> </small>
              <div class="my-5">
                <hr />
              </div>
              <div class="w-full select-none mb-6">
                <div class="w-full flex md:block overflow-x-auto relative" @click.stop role="">
                  <div
                    ref="personal"
                    id="1"
                    :class="[menu == 'personal' ? 'active' : '']"
                    class="md:h-11 px-10 text-left transition-all ease-in-out duration-150 border-gray-300 flex items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Personal Information</span>
                  </div>
                  <div
                    ref="business"
                    id="2"
                    :class="[menu == 'business' ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 flex transition-all ease-in-out duration-150 items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Business Information</span>
                  </div>
                  <div
                    ref="security"
                    id="3"
                    :class="[menu == 'security' ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 transition-all ease-in-out duration-150 flex items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Security Information</span>
                  </div>
                  <div
                    ref="office-branch"
                    id="4"
                    :class="[menu == 'office-branch' ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 transition-all ease-in-out duration-150 flex items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Office Branch</span>
                  </div>
                  <div
                    ref="work-shifts"
                    id="5"
                    :class="[menu == 'work-shifts' ? 'active' : '']"
                    class="rounded-b-sm md:h-11 px-10 text-left transition-all ease-in-out duration-150 border-gray-300 flex items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Work Shifts</span>
                  </div>
                  <div ref="indicator" class="indicator top-0 h-10 hidden md:block rounded -left-0 w-[2px] absolute bg-green-700"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="forms md:px-0 px-4">
            <NuxtChild />
          </div>
        </div>
      </main>
    </div>
    <footer class="flex justify-center py-4 px-8">
      <p class="text-sm text-gray-400 text-center font-">
        This site is protected by reCAPTCHA and the Google <a class="text-green-700 font-medium" href="#">Privacy Policy</a> and
        <a href="#" class="text-green-700 font-medium"> Term of Service</a> apply.
      </p>
    </footer>
    <RegistrationCompleteModal />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        const { name } = val;
        const [, ...rest] = name.split("-");
        this.$nextTick(() => {
          const el = this.$refs[`${rest.join("-")}`];
          const indicator = this.$refs.indicator;
          const offsetHeight = el.offsetHeight + "px";
          indicator.style.transform = `translateY(calc(${el.id - 1} * ${offsetHeight}))`;
          el.scrollIntoView();
          indicator.style.height = offsetHeight;
          this.menu = rest.join("-");
        });
      },
    },
  },
  methods: {
    showModal() {
      this.$modal.show("complete-reg-modal");
    },
    switchMenu(e) {
      const el = e.target.closest("div");
      if (el) {
        this.menu = el.id.split("-")[1];
      }
    },
  },
  computed: {
    indicatorPosition() {
      return `translateY(calc(${this.menu - 1} * ${this.offsetHeight}))`;
    },
  },
};
</script>
<style lang="scss">
.indicator {
  transition: transform 150ms cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
}
.active {
  @apply text-green-700;
  font-weight: 500;
}
</style>
