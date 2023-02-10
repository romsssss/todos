<script setup lang="ts">
import TodoApp from "./components/TodoApp.vue";
</script>

<template>
  <header>
    <h1 class="my-4 text-6xl font-sans font-thin text-gray-400 text-center">
      {{ $t("title") }}
    </h1>
  </header>

  <main class="bg-white shadow-2xl text-lg">
    <TodoApp />
  </main>

  <footer class="mt-8 mb-4 text-xs font-thin text-gray-400 text-center">
    <i18n-t keypath="github.view_on">
      <a
        href="https://github.com/romsssss/todos/tree/main/vue-todo"
        target="_blank"
        >{{ $t("github.label") }}</a
      >
    </i18n-t>
  </footer>
</template>
