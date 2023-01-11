<script>
export default {
  emits: ["create"],
  methods: {
    submit(event) {
      if (event.target.value) {
        this.$emit("create", event.target.value);
        this.$refs.input.value = null;
      }
    },
  },
};
</script>

<template>
  <form class="border-b-2" action="#" @submit.prevent>
    <div class="flex items-stretch flex-grow">
      <label class="sr-only" for="task_title">Title</label>
      <input
        ref="input"
        name="new-task"
        required="true"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus="true"
        class="block w-full border-none focus:ring-0 focus:ring-offset-0 p-4"
        type="text"
        @keyup.enter="submit"
      />
    </div>
  </form>
</template>
