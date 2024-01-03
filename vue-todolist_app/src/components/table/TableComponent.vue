<template>
  <table class="min-w-full text-left text-sm text-white font-light table-auto">
    <TableHeader></TableHeader>
    <TableBody></TableBody>
  </table>
</template>

<script>
import TableHeaderVue from './TableHeader.vue'
import TableBodyVue from './TableBody.vue'

export default {
  components : {
    TableHeader : TableHeaderVue,
    TableBody : TableBodyVue
  },
}
</script>
