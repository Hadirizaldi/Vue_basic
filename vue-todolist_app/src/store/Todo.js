import { defineStore } from "pinia";

export const useTodoStore = defineStore("Todo", {
  state: () => ({
    todos: [
      {
        id: 1,
        task: "Menyelesaikan Website App Todo",
        status: "Belum Selesai",
      },
      {
        id: 2,
        task: "Menyelesaikan Mobile App Todo",
        status: "Belum Selesai",
      },
      { id: 3, task: "Menyelesaikan Algoritma Todo", status: "Selesai" },
      { id: 4, task: "Mencoba menggunakan Pinia", status: "Belum Selesai" },
      {
        id: 5,
        task: "Membuat sistem View dari store pinia",
        status: "Belum Selesai",
      },
    ],
  }),

  getters: {
    getTodos() {
      return this.todos;
    },
  },
  actions: {},
});
