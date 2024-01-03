<template>
    <button 
    type="button"
    class="inline-block rounded bg-sky-800/75 hover:bg-sky-500/100 custom-transition px-4 py-1 font-bold uppercase">
    Edit
  </button>
  <button 
    type="button"
    class="inline-block rounded bg-red-800/60 hover:bg-red-500/100 custom-transition px-4 py-1 font-bold uppercase">
    Delete
  </button>
</template>

<style scoped>
  .custom-transition {
    transition-duration: 0.3s; /* Sesuaikan dengan durasi yang diinginkan */
    transition-timing-function: ease-in-out; /* Sesuaikan dengan timing function yang diinginkan */
  }
</style>