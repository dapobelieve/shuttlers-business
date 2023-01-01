<template>
  <div>
    <date-picker
      :disabled="disabled"
      :value="value"
      @input="$emit('input', $event)"
      name="uniquename"
      placeholder="Select Date (DD-MM-YY)"
    ></date-picker>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.vdp-datepicker {
  ::v-deep > div {
    &:focus-visible {
      outline-color: none !important;
    }
  }
  ::v-deep input {
    height: 50px;
    border-radius: 6px;
    width: 100%;
    padding-left: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #000;
    border: 0.6px solid #c6c8c7;
    &:focus {
      background-color: transparent;
      border-color: none;
    }
    &:focus-visible {
      outline: none;
    }
  }
}
</style>
