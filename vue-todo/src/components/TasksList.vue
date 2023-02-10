<script setup lang="ts">
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
      @activate="(id: number) => store.activateTask(id)"
      @complete="(id: number) => store.completeTask(id)"
      @delete="(id: number) => store.removeTask(id)"
    />
  </ul>
</template>
