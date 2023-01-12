import { describe, it, vi, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import TasksFooter from "../TasksFooter.vue";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

describe("TasksFooter", () => {
  it("renders properly", () => {
    const i18n = createI18n({
      locale: "en",
      messages,
    });

    const wrapper = mount(TasksFooter, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });

    expect(wrapper.text()).toContain("1 item left");
  });
});
