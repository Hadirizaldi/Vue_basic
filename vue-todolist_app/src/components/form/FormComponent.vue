<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-lg w-96">
      <h2 class="text-xl font-semibold mb-4">Edit Todo</h2>

      <!-- Form Edit -->
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <label for="task" class="block text-sm font-medium text-gray-600">Task:</label>
          <input v-model="editedTodo.task" type="text" id="task" name="task" class="mt-1 p-2 border rounded w-full" />
        </div>

        <div class="mb-4">
          <label for="status" class="block text-sm font-medium text-gray-600">Status:</label>
          <select v-model="editedTodo.status" id="status" name="status" class="mt-1 p-2 border rounded w-full">
            <option value="Belum Selesai">Belum Selesai</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <div class="flex justify-end">
          <button type="button" class="mr-2 p-2 text-gray-600" @click="cancelEdit">Cancel</button>
          <button type="submit" class="bg-blue-500 text-white p-2 rounded">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedTodo: { ...this.todo },
    };
  },
  methods: {
    saveChanges() {
      this.$emit('save', this.editedTodo);
    },
    cancelEdit() {
      this.$emit('cancel');
    },
  },
};
</script>