<template>
  <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.loader {
  border: 3px solid #f3f3f3;
  border-top: 3px solid black;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  animation: spin 900ms linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
