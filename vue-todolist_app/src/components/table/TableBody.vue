<template>
  <tbody>
    <tr class="border-b dark:border-neutral-500">
      <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
      <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Website App Todo</td>
      <td class="whitespace-nowrap px-6 py-4">Belum Selesai</td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="flex gap-2 justify-center">
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
      </div>
      </td>
    </tr>
    <tr class="border-b dark:border-neutral-500">
      <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
      <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Mobile App Todo</td>
      <td class="whitespace-nowrap px-6 py-4">Belum Selesai</td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="flex gap-2 justify-center">
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
      </div>
      </td>
    </tr>
    <tr class="border-b dark:border-neutral-500">
      <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
      <td class="whitespace-nowrap px-6 py-4">Menyelesaikan Algoritma Todo</td>
      <td class="whitespace-nowrap px-6 py-4">Selesai</td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="flex gap-2 justify-center">
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
      </div>
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
  .custom-transition {
    transition-duration: 0.3s; /* Sesuaikan dengan durasi yang diinginkan */
    transition-timing-function: ease-in-out; /* Sesuaikan dengan timing function yang diinginkan */
  }
</style>