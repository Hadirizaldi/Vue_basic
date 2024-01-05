<template>
  <button
    type="button"
    :class="[baseClass]"
  >
  <slot/>
  </button>
</template>

<script>
  export default {
    props : {
      baseClass : {
        type : String,
        default : ""
      }
    }
  }
</script>

<style scoped>
  .custom-transition {
    transition-duration: 0.3s; /* Sesuaikan dengan durasi yang diinginkan */
    transition-timing-function: ease-in-out; /* Sesuaikan dengan timing function yang diinginkan */
  }
</style>