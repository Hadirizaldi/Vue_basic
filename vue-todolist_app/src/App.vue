<template>
  <RouterView></RouterView>
</template>

<!-- ======== compositon api versi > 3.2 ======== -->
<!-- <script setup>
  import HomeVue from './views/HomeView.vue'

  const Home = HomeVue
</script> -->

<script>
  import HomeVue from './views/HomeView.vue'

  export default{
    components: {
      Home : HomeVue
    }
  }
</script>