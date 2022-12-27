import { render, screen } from "@testing-library/react";
import ListCategories from "./ListCategories";

test("render ListCategories component", async () => {
  const mock = {
    categories: [{ id: 1, name: "mock category", itemType: "CATEGORY" }],
    activeItem: false,
    fetchItems: jest.fn(),
  };

  render(
    <ListCategories
      categories={mock.categories}
      activeItem={mock.activeItem}
      fetchItems={mock.fetchItems}
    />
  );
  const testId = await screen.findAllByTestId("list-categories");
  expect(testId).toBeDefined();
});
