<template>
  <ButtonEdit @click="handleEdit"></ButtonEdit>
  <ButtonDelete @click="handleDelete"></ButtonDelete>
</template>

<style scoped>
  .custom-transition {
    transition-duration: 0.3s; /* Sesuaikan dengan durasi yang diinginkan */
    transition-timing-function: ease-in-out; /* Sesuaikan dengan timing function yang diinginkan */
  }
</style>

<script>
  import ButtonEditVue from "../button/ButtonEdit.vue"
  import ButtonDeleteVue from "../button/ButtonDelete.vue"

  export default {
    components : {
      ButtonEdit : ButtonEditVue,
      ButtonDelete : ButtonDeleteVue
    },

    methods : {
      handleDelete () {
        console.log("Tombol delete")
      },

      handleEdit(){
        console.log("Tombol edit")
      }
    }
  }
</script>