<template>
  <tbody>
    <TodoRow v-for="(todo, index) in getTodos" :key="index" :todo="todo" :no ="index+1"/>
  </tbody>
</template>


<script>
  import TodoRowVue from '@/components/table/TodoRow.vue';
  import { useTodoStore } from '@/store/Todo.js';
  
  export default {
    components: {
      TodoRow : TodoRowVue
    },

    setup() {
      const todoStore = useTodoStore()
      const getTodos = todoStore.getTodos

      return {
        getTodos
      }
    }
  }
</script>
