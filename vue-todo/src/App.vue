<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  components: {
    TodoApp,
  },
};
</script>

<template>
  <header>
    <h1 class="my-4 text-6xl font-sans font-thin text-gray-400 text-center">
      TODO
    </h1>
  </header>

  <main class="bg-white shadow-2xl text-lg">
    <TodoApp />
  </main>

  <footer class="mt-8 mb-4 text-xs font-thin text-gray-400 text-center">
    View on
    <a href="https://github.com/romsssss/todos/tree/main/vue-todo">Github</a>
  </footer>
</template>
