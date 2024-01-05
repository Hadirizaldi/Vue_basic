<template>
  <router-link :to="{ name: 'edit', params: {id: todo.id} }" >
    <BaseButton
      type="button"
      baseClass="inline-block rounded bg-sky-800/75 hover:bg-sky-500/100 custom-transition px-4 py-1 font-bold uppercase">
      Edit
    </BaseButton>
  </router-link>

</template>

<script>
import BaseButtonVue from './BaseButton.vue';
export default {
  components: {
    BaseButton : BaseButtonVue
  },
  props : {
    todo : {
      type : Object,
      required : true
    }
  }
}
</script>

