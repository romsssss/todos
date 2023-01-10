import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TasksFooter from "../TasksFooter.vue";

describe("TasksFooter", () => {
  it("renders properly", () => {
    const wrapper = mount(TasksFooter, { });
    expect(wrapper.text()).toContain("X items left");
  });
});
