<script setup>
import { todoStore } from "@/stores/todo";
import TaskItem from "./TaskItem.vue";

const store = todoStore();
</script>

<template>
  <ul id="tasks-list">
    <TaskItem
      v-for="task in store.curatedTasksList"
      :key="task.id"
      :task="task"
      @activate="(id) => store.activateTask(id)"
      @complete="(id) => store.completeTask(id)"
      @delete="(id) => store.removeTask(id)"
    />
  </ul>
</template>
