<template>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
    <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Website App Todo</td>
    <td class="whitespace-nowrap px-6 py-4">Belum Selesai</td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex gap-2 justify-center">
        <tableButton></tableButton>
      </div>
    </td>
  </tr>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
    <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Mobile App Todo</td>
    <td class="whitespace-nowrap px-6 py-4">Belum Selesai</td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex gap-2 justify-center">
        <tableButton></tableButton>
      </div>
    </td>
  </tr>
  <tr class="border-b dark:border-neutral-500">
    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
    <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Algoritma Todo</td>
    <td class="whitespace-nowrap px-6 py-4">Selesai</td>
    <td class="whitespace-nowrap px-6 py-4">
      <div class="flex gap-2 justify-center">
        <tableButton></tableButton>
      </div>
    </td>
  </tr>
</template>

<script>
import TableButtonVue from './TableButton.vue';
  export default{
    components : {
      tableButton : TableButtonVue
    }
  }
</script>