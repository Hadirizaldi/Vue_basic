<template>
  <tbody>
    <TodoRow />
  </tbody>
</template>


<script>
  import TodoRowVue from './TodoRow.vue';

  export default{
    components: {
      TodoRow : TodoRowVue
    }
  }
</script>
