<script setup>
import { ref } from "vue";

const emit = defineEmits(["create"]);

const input = ref(null);

const submit = (event) => {
  if (event.target.value) {
    emit("create", event.target.value);
    input.value.value = null;
  }
};
</script>

<template>
  <form class="border-b-2" action="#" @submit.prevent>
    <div class="flex items-stretch flex-grow">
      <label class="sr-only" for="task_title">{{ $t("new_task.label") }}</label>
      <input
        ref="input"
        name="new-task"
        required="true"
        :placeholder="$t('new_task.placeholder')"
        autocomplete="off"
        autofocus="true"
        class="block w-full border-none focus:ring-0 focus:ring-offset-0 p-4"
        type="text"
        @keyup.enter="submit"
      />
    </div>
  </form>
</template>
