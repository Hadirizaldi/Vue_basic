<template>
  <div>
    <h1>Edit View</h1>
    <p>ID: {{ editedTodo.id }}</p>
    <label>Task:</label>
    <input v-model="editedTodo.task" required class="text-zinc-950">
    <br>
    <label>Status:</label>
    <input v-model="editedTodo.status" required class="text-zinc-950">
    <!-- <button @click="updateTodo">Update</button> -->
  </div>
</template>

<script>
import { useTodoStore } from '@/store/Todo';
import { onBeforeMount, ref } from 'vue';

export default {
  // components: {
  //   FormComponent : FormComponentVue
  // },

  props : {
    id : {
      type : String,
      required : true
    }
  },

  setup(props) {
    const todoStore = useTodoStore();
    const editedTodo = ref({ id: '', task: '', status: '' });
    const todoId = parseInt(props.id , 10)

    onBeforeMount(async() => {
      console.log('Before getTodoById');
      editedTodo.value = await todoStore.getTodoById(todoId);
      console.log('After getTodoById', editedTodo.value);
    });

    return {
      editedTodo
    }
  },

}
</script>