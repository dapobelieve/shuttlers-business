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
                  <button
                    ref="tab-1"
                    :class="[menu == 1 ? 'active' : '']"
                    class="md:h-11 px-10 text-left transition-all ease-in-out duration-150 border-gray-300 items-center bg-transparent w-full md:border-l-2 rounded-tl-sm block"
                  >
                    <span>Personal Information</span>
                  </button>
                  <button
                    ref="tab-2"
                    :class="[menu == 2 ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Business Information</span>
                  </button>
                  <button
                    ref="tab-3"
                    :class="[menu == 3 ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Security Information</span>
                  </button>
                  <button
                    ref="tab-4"
                    :class="[menu == 4 ? 'active' : '']"
                    class="md:h-11 px-10 text-left border-gray-300 items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Office Branch</span>
                  </button>
                  <button
                    ref="tab-5"
                    :class="[menu == 5 ? 'active' : '']"
                    class="rounded-b-sm md:h-11 px-10 text-left border-gray-300 items-center bg-transparent w-full md:border-l-2 block"
                  >
                    <span>Work Shifts</span>
                  </button>
                  <div ref="indicator" class="indicator top-0 h-10 hidden md:block rounded -left-0 w-[2px] absolute bg-green-700"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="forms md:px-0 px-4">
            <keep-alive>
              <Personal v-if="menu == 1" @complete="menu = 2" />
            </keep-alive>
            <keep-alive>
              <Business v-if="menu == 2" @complete="menu = 3" @back="menu = --menu" />
            </keep-alive>
            <keep-alive>
              <Security v-if="menu == 3" @complete="menu = 4" @back="menu = --menu" />
            </keep-alive>
            <keep-alive>
              <OfficeBranch v-if="menu == 4" @complete="menu = 5" @back="menu = --menu" />
            </keep-alive>
            <keep-alive>
              <Workshift v-if="menu == 5" @complete="showModal" @back="menu = --menu" />
            </keep-alive>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: 1,
    };
  },
  watch: {
    menu: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          const el = this.$refs[`tab-${val}`];
          const indicator = this.$refs.indicator;
          const offsetHeight = el.offsetHeight + "px";
          indicator.style.transform = `translateY(calc(${val - 1} * ${offsetHeight}))`;
          el.scrollIntoView();
          indicator.style.height = offsetHeight;
        });
      },
    },
  },
  methods: {
    showModal() {
      this.$modal.show("complete-reg-modal");
    },
    switchMenu(e) {
      const el = e.target.closest("button");
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
