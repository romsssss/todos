import { describe, it, beforeEach, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { todoStore } from "../todo";

describe("Todo Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("state", () => {
    it("defaults filter to 'all'", () => {
      const store = todoStore();

      expect(store.filter).toBe("all");
    });

    it("does not contains any tasks at initialisation", () => {
      const store = todoStore();

      expect(store.tasks).toHaveLength(0);
    });
  });

  describe("createTask", () => {
    it("adds the task to the store '", () => {
      const store = todoStore();

      expect(store.tasks).toHaveLength(0);
      store.createTask("A new task");
      expect(store.tasks).toHaveLength(1);
    });
  });

  describe("removeTask", () => {
    it("removes the task to the store '", () => {
      const store = todoStore();
      store.createTask("A new task");

      expect(store.tasks).toHaveLength(1);
      store.removeTask(1);
      expect(store.tasks).toHaveLength(0);
    });
  });

  describe("completeTask", () => {
    it("flags the task as completed '", () => {
      const store = todoStore();
      store.createTask("My task");

      expect(store.tasks[0].status).toEqual("active");
      store.completeTask(1);
      expect(store.tasks[0].status).toEqual("completed");
    });
  });

  describe("activateTask", () => {
    it("flags the task as completed '", () => {
      const store = todoStore();
      store.createTask("My task");
      store.completeTask(1);

      expect(store.tasks[0].status).toEqual("completed");
      store.activateTask(1);
      expect(store.tasks[0].status).toEqual("active");
    });
  });
});
