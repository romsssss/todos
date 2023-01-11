import { reactive } from "vue";

export const store = reactive({
  tasks: [],
  filter: "all",
  createTask(title) {
    this.tasks.push({
      id: this.tasks.length + 1,
      title: title,
      status: "active",
    });
  },
  removeTask(taskId) {
    var index = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(index, 1);
  },
  completeTask(taskId) {
    this.tasks.find((task) => task.id === taskId).status = "completed";
  },
  activateTask(taskId) {
    this.tasks.find((task) => task.id === taskId).status = "active";
  },
});
