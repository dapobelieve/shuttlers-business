<template>
  <div>
    <div class="py-4 bg-black-900 flex justify-center items-center w-full">
      <div class="">
        <img alt="" src="~/assets/images/logo.svg" />
      </div>
    </div>
    <div class="w-full flex justify-center">
      <main class="container md:max-w-4xl lg:max-w-full 2xl:max-w-7xl w-full mx-auto h-screen border pt-16">
        <div class="grid grid-cols-2">
          <div class="flex flex-col items-center">
            <div class="max-w-lg">
              <h1 class="text-2xl font-bold mb-1 leading-10">Get started with Shuttlers for Business</h1>
              <p class="text-lg text-gray-400 mb-1">Provide your business details so we can get the best package for your business.</p>
              <small class="text-gray-400 mb-4">Already have an account? <a class="text-green-700 font-bold" href="#">Login</a> </small>
              <div class="my-5">
                <hr />
              </div>
              <div class="w-full">
                <div class="w-full relative h-96" @click.stop="switchMenu" role="">
                  <button
                    id="tab-1"
                    role="tab"
                    :class="[menu == 1 ? 'active' : '']"
                    class="flex h-11 px-10 text-left transition-all ease-in-out duration-150 border-gray-300 items-center bg-transparent w-1/2 border-l-2 rounded-tl-sm block"
                  >
                    <span>Personal Information</span>
                  </button>
                  <button
                    id="tab-2"
                    role="tab"
                    :class="[menu == 2 ? 'active' : '']"
                    class="flex h-11 px-10 text-left border-gray-300 items-center bg-transparent w-1/2 border-l-2 block"
                  >
                    <span>Business Information</span>
                  </button>
                  <button
                    id="tab-3"
                    role="tab"
                    :class="[menu == 3 ? 'active' : '']"
                    class="flex h-11 px-10 text-left border-gray-300 items-center bg-transparent w-1/2 border-l-2 block"
                  >
                    <span>Security Information</span>
                  </button>
                  <button
                    id="tab-4"
                    role="tab"
                    :class="[menu == 4 ? 'active' : '']"
                    class="flex h-11 px-10 text-left border-gray-300 items-center bg-transparent w-1/2 border-l-2 block"
                  >
                    <span>Office Branch</span>
                  </button>
                  <button
                    id="tab-5"
                    role="tab"
                    :class="[menu == 5 ? 'active' : '']"
                    class="flex rounded-b-sm h-11 px-10 text-left border-gray-300 items-center bg-transparent w-1/2 border-l-2 block"
                  >
                    <span>Work Shifts</span>
                  </button>
                  <div ref="indicator" class="indicator top-0 h-10 rounded -left-0 w-[2px] absolute bg-green-700"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card flex flex-col items-center justify-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio, iure aliquam quae, quas esse repudiandae, assumenda facere
              tempore commodi at, veritatis dolorum. Eum ratione, esse enim perferendis natus similique sequi in quaerat, itaque doloremque hic
              ducimus porro error eos voluptate tempora! Repudiandae enim voluptatibus voluptates repellendus eum totam, suscipit.
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer></footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: 1,
    };
  },
  methods: {
    switchMenu(e) {
      const el = e.target.closest("button");
      if (el) {
        const indicator = this.$refs.indicator;
        const offsetHeight = el.offsetHeight + "px";
        indicator.style.transform = `translateY(calc(${el.id.split("-")[1] - 1} * ${offsetHeight}))`;
        indicator.style.height = offsetHeight;
        this.menu = el.id.split("-")[1];
      }
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
