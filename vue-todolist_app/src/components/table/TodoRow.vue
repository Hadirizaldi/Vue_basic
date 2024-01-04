<template>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">{{todo.id}}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ todo.task }}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ todo.status }}</td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex gap-2 justify-center">
        <tableButton></tableButton>
      </div>
    </td>
  </tr>
</template>

<script>
import TableButtonVue from '@/components/table/TableButton.vue';
  export default {
    components : {
      tableButton : TableButtonVue
    },

    props : {
      todo : {
        type : Object,
        required : true
      }
    },
  }
</script>