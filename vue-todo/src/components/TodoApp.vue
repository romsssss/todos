<script setup>
import { store } from "../store.js";
import TaskNewForm from "./TaskNewForm.vue";
import TasksList from "./TasksList.vue";
import TasksFooter from "./TasksFooter.vue";
</script>

<template>
  <TaskNewForm @create="(title) => store.createTask(title)" />
  <TasksList />
  <TasksFooter v-if="store.tasks.length > 0" />
</template>
