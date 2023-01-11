import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TasksFooter from "../TasksFooter.vue";
import { createI18n } from "vue-i18n";
import en from "../../locales/en.json";

describe("TasksFooter", () => {
  it("renders properly", () => {
    const i18n = createI18n({
      local: "en",
      messages: {
        en,
      },
    });

    const wrapper = mount(TasksFooter, { global: { plugins: [i18n] } });
    expect(wrapper.text()).toContain("item left");
  });
});
