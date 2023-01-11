import { test, expect } from "@playwright/test";

test("visits the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("TODO");
});

test("creates a new task", async ({ page }) => {
  await page.goto("/");

  await page.locator("[name=new-task]").fill("Buy more flour");
  await page.keyboard.press("Enter");

  await expect(page.locator("#tasks-list")).toContainText("Buy more flour");
  await expect(page.locator("#tasks-footer")).toContainText("1 item left");
});

test("complete a task", async ({ page }) => {
  await page.goto("/");
  await createTask(page, "My task to complete");

  await expect(page.locator("#tasks-list")).toContainText(
    "My task to complete"
  );
  await expect(page.locator("#tasks-footer")).toContainText("1 item left");

  await page.getByRole("checkbox").first().check();

  await expect(page.locator("#tasks-footer")).toContainText("0 item left");
});

test("uncomplete a task", async ({ page }) => {
  await page.goto("/");
  await createTask(page, "My task to uncomplete");
  await page.getByRole("checkbox").first().check();

  await expect(page.locator("#tasks-list")).toContainText(
    "My task to uncomplete"
  );
  await expect(page.locator("#tasks-footer")).toContainText("0 item left");

  await page.getByRole("checkbox").first().uncheck();
  await expect(page.locator("#tasks-footer")).toContainText("1 item left");
});

test("destroy a task", async ({ page }) => {
  await page.goto("/");
  await createTask(page, "My task to keep");
  await createTask(page, "My task to destroy");

  await expect(page.locator("#tasks-list")).toContainText("My task to keep");
  await expect(page.locator("#tasks-list")).toContainText("My task to destroy");
  await expect(page.locator("#tasks-footer")).toContainText("2 items left");

  await page.locator(".destroy-task-button").first().click();

  await expect(page.locator("#tasks-list")).toContainText("My task to keep");
  await expect(page.locator("#tasks-list")).not.toContainText(
    "My task to destroy"
  );
  await expect(page.locator("#tasks-footer")).toContainText("1 item left");
});

test("filter tasks", async ({ page }) => {
  await page.goto("/");
  await createTask(page, "Active task 1");
  await createTask(page, "Active task 2");
  await createTask(page, "Completed task 3", "completed");

  await expect(page.locator("#tasks-list")).toContainText("Active task 1");
  await expect(page.locator("#tasks-list")).toContainText("Active task 2");
  await expect(page.locator("#tasks-list")).toContainText("Completed task 3");

  await page.getByRole("link", { name: "Active" }).click();
  await expect(page.locator("#tasks-list")).toContainText("Active task 1");
  await expect(page.locator("#tasks-list")).toContainText("Active task 2");
  await expect(page.locator("#tasks-list")).not.toContainText(
    "Completed task 3"
  );

  await page.getByRole("link", { name: "Completed" }).click();
  await expect(page.locator("#tasks-list")).not.toContainText("Active task 1");
  await expect(page.locator("#tasks-list")).not.toContainText("Active task 2");
  await expect(page.locator("#tasks-list")).toContainText("Completed task 3");

  await page.getByRole("link", { name: "All" }).click();
  await expect(page.locator("#tasks-list")).toContainText("Active task 1");
  await expect(page.locator("#tasks-list")).toContainText("Active task 2");
  await expect(page.locator("#tasks-list")).toContainText("Completed task 3");
});

async function createTask(page, title, status = "active") {
  await page.locator("[name=new-task]").fill(title);
  await page.keyboard.press("Enter");
  if (status === "completed") {
    await page.getByRole("checkbox").first().check();
  }
}
