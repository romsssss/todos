<script setup lang="ts">
import { todoStore } from "@/stores/todo";

const store = todoStore();
</script>

<template>
  <div
    id="tasks-footer"
    class="flex justify-around items-center text-xs text-gray-400 py-3"
  >
    <div>
      {{ $t("remaining_active_tasks", store.openTasks.length) }}
    </div>
    <div>
      <a
        @click="store.setFilter('all')"
        :class="{ border: store.filter === 'all' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.all") }}</a
      >
      <a
        @click="store.setFilter('active')"
        :class="{ border: store.filter === 'active' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.active") }}</a
      >
      <a
        @click="store.setFilter('completed')"
        :class="{ border: store.filter === 'completed' }"
        class="hover:border rounded p-1"
        href="#"
        >{{ $t("filter.completed") }}</a
      >
    </div>
  </div>
</template>
