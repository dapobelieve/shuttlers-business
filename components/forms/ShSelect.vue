<template>
  <div>
    <v-select
      :disabled="disable"
      :value="value"
      @input="$emit('input', $event)"
      :label="labelName"
      :placeholder="placeholder"
      :options="options"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "Select your company",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    value: {},
    labelName: {
      type: String,
      default: "name",
    },
    options: {
      type: Array,
      default: () => [
        { name: "One", value: 1 },
        { name: "Two", value: 2 },
        { name: "Three", value: 2 },
        { name: "Four", value: 4 },
        { name: "Five", value: 5 },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.v-select {
  ::v-deep .vs__dropdown-toggle {
    height: 50px;
    border-radius: 6px;
    border: 0.6px solid #c6c8c7;
  }
  ::v-deep input {
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 1rem;
    color: #6c757d;
  }
  ::v-deep button {
    display: none;
  }
  ::v-deep .vs__actions {
    margin-right: 1rem;
  }
  ::v-deep .vs__selected {
    margin-left: 1rem;
    font-weight: 500;
  }
  ::v-deep ul {
    top: 58px;
    border: 0;
    border-radius: 4px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    padding: 0;
    li {
      padding: 1.25rem 1.4375rem;
      font-size: 0.875rem;
      color: var(--bs-jungle-green);
      font-weight: 500;
      &:hover {
        background-color: #000000;
        color: #fff;
      }
      &:before {
        content: "";
      }
    }
  }
}
</style>
