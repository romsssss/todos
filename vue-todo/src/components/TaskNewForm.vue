<template>
  <form class="border-b-2" action="#">
    <div class="flex items-stretch flex-grow">
      <label class="sr-only" for="task_title">Title</label>
      <input
        required="true"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus="true"
        class="block w-full border-none focus:ring-0 focus:ring-offset-0 py-4"
        type="text"
        name="task[title]"
        id="task_title"
      />
    </div>
  </form>
</template>
