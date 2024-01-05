<template>
  <div>
    <h1>Edit View</h1>
    <p>ID: {{ editedTodo.id }}</p>
    <!-- <label>Task:</label>
    <input v-model="editedTodo.task" required class="text-zinc-950">
    <br>
    <label>Status:</label>
    <input v-model="editedTodo.status" required class="text-zinc-950"> -->
    <!-- <button @click="updateTodo">Update</button> -->
  </div>
</template>

<script>
import { useTodoStore } from '@/store/Todo';
import { onMounted, ref } from 'vue';
// import FormComponentVue from "@/components/form/FormComponent.vue"

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
    const editedTodo = ref(null);
    const todoId = parseInt(props.id , 10)

    onMounted(async() => {
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