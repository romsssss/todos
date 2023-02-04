import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

type TaskStates = "active" | "completed";
interface Task {
  id: number;
  title: string;
  status: TaskStates;
}

export const todoStore = defineStore("todo", {
  state: () => {
    return {
      tasks: useStorage("vue-todo-tasks", [] as Task[]),
      filter: useStorage("vue-todo-filter", "all"),
    };
  },
  getters: {
    curatedTasksList(state) {
      return state.tasks
        .filter((task: Task) =>
          state.filter === "all" ? true : task.status === state.filter
        )
        .sort((a: Task, b: Task) => {
          return b.id - a.id;
        });
    },
    openTasks(state) {
      return state.tasks.filter((task: Task) => task.status === "active");
    },
  },
  actions: {
    setFilter(filter: string) {
      this.filter = filter;
    },
    createTask(text: string) {
      const newId =
        this.tasks.length > 0
          ? Math.max(...this.tasks.map((task: Task) => task.id))
          : 0;
      this.tasks.push({
        id: newId + 1,
        title: text,
        status: "active",
      });
    },
    removeTask(taskId: number) {
      const index = this.tasks.findIndex((task: Task) => task.id === taskId);
      this.tasks.splice(index, 1);
    },
    completeTask(taskId: number) {
      const task = this.tasks.find((task: Task) => task.id === taskId);
      if (task) {
        task.status = "completed";
      }
    },
    activateTask(taskId: number) {
      const task = this.tasks.find((task: Task) => task.id === taskId);
      if (task) {
        task.status = "active";
      }
    },
  },
});
