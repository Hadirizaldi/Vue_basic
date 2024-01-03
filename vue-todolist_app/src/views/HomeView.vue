<template>
  
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <Table></Table>
        </div>
      </div>
    </div>
  </div>
  
</template>

<!-- ======== compositon api versi > 3.2 ======== -->
<!-- <script setup>
import TableVue from './components/Table.vue';
</script> -->

<script>
  import TableVue from '../components/table/TableComponent.vue'

  export default {
    components: {
      Table : TableVue
    }
  }
</script>