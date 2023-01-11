<script>
import { store } from "../store.js";
import TaskItem from "./TaskItem.vue";

export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    curatedTasksList() {
      return store.tasks
        .filter((task) =>
          store.filter === "all" ? true : task.status === store.filter
        )
        .sort((a, b) => {
          return b.id - a.id;
        });
    },
  },
  components: {
    TaskItem,
  },
};
</script>

<template>
  <ul id="tasks-list">
    <TaskItem
      v-for="task in curatedTasksList"
      :key="task.id"
      :task="task"
      @activate="(id) => store.activateTask(id)"
      @complete="(id) => store.completeTask(id)"
      @delete="(id) => store.removeTask(id)"
    />
  </ul>
</template>
