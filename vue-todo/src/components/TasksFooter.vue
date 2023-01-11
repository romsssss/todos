<script setup>
import { computed } from "vue";
import { store } from "../store.js";

const numberOfOpenTasks = computed(() => {
  return store.tasks.filter((task) => task.status === "active").length;
});

const filterBy = (filter) => {
  store.filter = filter;
};
</script>

<template>
  <div
    id="tasks-footer"
    class="flex justify-around items-center text-xs text-gray-400 py-3"
  >
    <div>
      {{ $tc("remaining_active_tasks", numberOfOpenTasks) }}
    </div>
    <div>
      <a
        @click="filterBy('all')"
        :class="{ border: store.filter === 'all' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.all") }}</a
      >
      <a
        @click="filterBy('active')"
        :class="{ border: store.filter === 'active' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.active") }}</a
      >
      <a
        @click="filterBy('completed')"
        :class="{ border: store.filter === 'completed' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.completed") }}</a
      >
    </div>
  </div>
</template>
