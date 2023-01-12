<script setup>
import { computed } from "vue";
import { store } from "../store.js";
import TaskItem from "./TaskItem.vue";

const curatedTasksList = computed(() => {
  return store.tasks
    .filter((task) =>
      store.filter === "all" ? true : task.status === store.filter
    )
    .sort((a, b) => {
      return b.id - a.id;
    });
});
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
