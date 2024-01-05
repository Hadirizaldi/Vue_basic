import { useTodoStore } from '@/store/Todo';
import { onMounted, ref } from 'vue';

// import FormComponentVue from "@/components/form/FormComponent.vue"
export default (await import('vue')).defineComponent({
// components: {
//   FormComponent : FormComponentVue
// },
props: {
id: {
type: Number,
required: true
}
},

setup(props) {
const todoStore = useTodoStore;
const editedTodo = ref(null);

onMounted(async () => {
editedTodo.value = await todoStore.GetTodoById(props.id);
}),
        ;
},
});
