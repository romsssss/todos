<script>
export default {
  props: ["task"],
  emits: ["activate", "complete", "delete"],
  computed: {
    isCompleted() {
      return this.task.status == "completed";
    },
    classObject() {
      return {
        "line-through": this.isCompleted,
        "text-gray-400": this.isCompleted,
      };
    },
  },
  methods: {
    updateStatus(event) {
      event.target.checked
        ? this.$emit("complete", this.task.id)
        : this.$emit("activate", this.task.id);
    },
  },
};
</script>

<template>
  <li class="flex justify-between border-b pl-3 pr-5 py-4">
    <div class="flex items-center space-x-3">
      <form>
        <input
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-400 focus:ring-2 dark:bg-gray-200 dark:border-gray-300"
          :checked="isCompleted"
          @change="updateStatus"
        />
      </form>
      <div :class="classObject">
        {{ task.title }}
      </div>
    </div>
    <button
      @click="$emit('delete', task.id)"
      class="text-gray-400 destroy-task-button"
    >
      X
    </button>
  </li>
</template>
