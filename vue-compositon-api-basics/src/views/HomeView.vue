<template>
  <main>
    <div class="home">
      <div class="content">
        <button class="btn" @click="reduceCounter">-</button>
        <span class="counter">{{counter}}</span>
        <button class="btn" @click="addCounter">+</button>
      </div>
    </div>
  </main>
</template>

<!-- ========= Compostion Api ========== -->

<!-- ======== version 3.2 ++ ========= -->
<script setup>
  import {ref, onMounted} from 'vue'

  const counter = ref(0)

  function addCounter() {
    counter.value++
  }
  function reduceCounter() {
    counter.value--
  }

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<!-- ========= versoion 3.2 -- ========== -->
<!-- <script>
  import {onMounted, ref} from 'vue'

  export default {
    setup() {
      const counter = ref(0)
      
      function addCounter() {
        counter.value++
      }
      function reduceCounter() {
        counter.value--
      }

      onMounted(()=> {
        console.log(`Initial counter is ${counter.value}`)
      })

      return {
        counter,
        addCounter,
        reduceCounter
      }
    }
  }
</script> -->


<!-- ========= Option Api ========== -->
<!-- <script>
  export default {
    data() {
      return {
        counter : 0
      }
    },

    methods: {
      addCounter() {
        this.counter++
      },
      reduceCounter() {
        this.counter--
      }

    }
  }
</script> -->


<style scoped>
  .home {
    width: 100%;
  }
  .content {
    display: flex;
    justify-content: center;
    
    margin-block-start: 2rem;
    gap: 1.5rem;
  }

  .btn, .counter {
    font-size: 2.5rem;
    padding: 1rem;
  }

</style>