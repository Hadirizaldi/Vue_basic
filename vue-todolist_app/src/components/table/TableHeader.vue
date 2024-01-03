<template>
  <thead class="border-b  dark:border-neutral-500">
    <tr>
      <th class="px-6 py-4 font-extrabold" 
          v-for="(title, index) in tableTitles"  
          :scope="title.scope"
          :class="{'text-center': index === tableTitlesLength - 1}"
        >
        {{title.label}}
      </th>
    </tr>
  </thead>
</template>


<!-- ======== compositon api versi > 3.2 ======== -->
<!-- <script setup>
  const tableTitles = [
    { label: 'No', scope: 'col' },
    { label: 'Content', scope: 'col' },
    { label: 'Status', scope: 'col' },
    { label: 'Action', scope: 'col' }
  ]
  const tableTitlesLength = parseInt(tableTitles.length);

</script> -->

<script>
export default {
  setup() {
    const tableTitles = [
        { label: 'No', scope: 'col' },
        { label: 'Content', scope: 'col' },
        { label: 'Status', scope: 'col' },
        { label: 'Action', scope: 'col' }
      ]
    
    const tableTitlesLength = parseInt(tableTitles.length);

    return {
      tableTitles,
      tableTitlesLength
    }
  }
}
</script>



