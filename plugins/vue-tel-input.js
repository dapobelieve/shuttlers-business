import Vue from "vue";
import VueTelInput from "vue-tel-input";

Vue.use(VueTelInput, {
  dynamicPlaceholder: true,
  enabledCountryCode: true,
  enabledFlags: true,
  onlyCountries: ["NG"],
  disabledFetchingCountry: true,
  validCharactersOnly: true,
  inputClasses: "",
  mode: "international",
});
