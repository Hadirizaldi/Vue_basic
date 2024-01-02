<template>
  <main>
    <div class="home">
      <h3> {{counterData.title}} :</h3>
  
      <div class="content">
        <button class="btn" @click="reduceCounter">-</button>
        <span class="counter">{{counterData.counter}}</span>
        <button class="btn" @click="addCounter">+</button>
      </div>
      
      <div class="edit">
        <h4>Edit counter title:</h4>
        <input type="text" v-model="counterData.title">
      </div>
    </div>
  </main>
</template>

<!-- ========= Compostion Api ========== -->

<!-- ======== version 3.2 ++ ========= -->
<script setup>
  import {reactive} from 'vue'

  // const counter = ref(0),
  //       counterTitle = ref('My Counter')

  let counterData = reactive({
    counter: 0,
    title: "My Counter",
  })

  function addCounter() {
    // counter.value++
    counterData.counter++
  }
  function reduceCounter() {
    // counter.value--
    counterData.counter--
  }

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

  h3{
    text-align: center;
    margin-block-start: 2rem;
    font-size: 2.5rem;
  }

  .content {
    display: flex;
    justify-content: center;
    
    margin-block-start: 2rem;
    gap: 1.5rem;
  }

  .btn, .counter {
    font-size: 2rem;
    padding: 1rem;
  }

  .edit{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .3rem;

    margin-block-start: 2rem;
  }

  .edit input{
    font-size: 1.2rem;
  }
</style>