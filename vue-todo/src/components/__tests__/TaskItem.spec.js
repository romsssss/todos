import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TaskItem from "../TaskItem.vue";

describe("TaskItem", () => {
  it("renders properly", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: {
          id: 1,
          title: "My first task !",
          status: "active",
        },
      },
    });
    expect(wrapper.text()).toContain("My first task !");
  });
});
