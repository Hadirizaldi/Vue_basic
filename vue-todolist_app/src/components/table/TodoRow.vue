<template>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">{{no}}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ todo.task }}</td>
    <td class="whitespace-nowrap px-6 py-4">{{ todo.status }}</td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex gap-2 justify-center">
        <ButtonEdit></ButtonEdit>
        <ButtonDelete></ButtonDelete>
      </div>
    </td>
  </tr>
</template>

<script>
  import ButtonEditVue from "../button/ButtonEdit.vue"
  import ButtonDeleteVue from "../button/ButtonDelete.vue"

  export default {
    components : {
      ButtonEdit : ButtonEditVue,
      ButtonDelete : ButtonDeleteVue
    },

    props : {
      todo : {
        type : Object,
        required : true
      },
      
      no : {
        type : Number,
        required: true
      }
    },
  }
</script>

