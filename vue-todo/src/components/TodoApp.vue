<script setup>
import { todoStore } from "@/stores/todo";
import TaskNewForm from "./TaskNewForm.vue";
import TasksList from "./TasksList.vue";
import TasksFooter from "./TasksFooter.vue";

const store = todoStore();
</script>

<template>
  <TaskNewForm @create="(title) => store.createTask(title)" />
  <TasksList />
  <TasksFooter v-if="store.tasks.length > 0" />
</template>
