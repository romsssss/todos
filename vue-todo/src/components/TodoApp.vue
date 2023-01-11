<script>
import { store } from "../store.js";
import TaskNewForm from "./TaskNewForm.vue";
import TasksList from "./TasksList.vue";
import TasksFooter from "./TasksFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    TaskNewForm,
    TasksList,
    TasksFooter,
  },
};
</script>

<template>
  <TaskNewForm @create="(title) => store.createTask(title)" />
  <TasksList />
  <TasksFooter v-if="store.tasks.length > 0" />
</template>
