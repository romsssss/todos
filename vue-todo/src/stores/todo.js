import { defineStore } from "pinia";

export const todoStore = defineStore("todo", {
  state: () => {
    return {
      tasks: [],
      filter: "all",
    };
  },
  getters: {
    curatedTasksList(state) {
      return state.tasks
        .filter((task) =>
          state.filter === "all" ? true : task.status === state.filter
        )
        .sort((a, b) => {
          return b.id - a.id;
        });
    },
    openTasks(state) {
      return state.tasks.filter((task) => task.status === "active");
    },
  },
  actions: {
    setFilter(filter) {
      this.filter = filter;
    },
    createTask(text) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: text,
        status: "active",
      });
    },
    removeTask(taskId) {
      let index = this.tasks.findIndex((task) => task.id === taskId);
      this.tasks.splice(index, 1);
    },
    completeTask(taskId) {
      this.tasks.find((task) => task.id === taskId).status = "completed";
    },
    activateTask(taskId) {
      this.tasks.find((task) => task.id === taskId).status = "active";
    },
  },
});