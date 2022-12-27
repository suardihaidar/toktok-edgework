import { render, screen } from "@testing-library/react";
import ListItems from "./ListItems";

test("render ListItems component", async () => {
  const mock = {
    itemDetails: [],
    items: [{ id: 1, name: "mock item" }],
  };

  render(<ListItems itemDetails={mock.itemDetails} items={mock.items} />);
  const testId = await screen.findAllByTestId("list-items");
  expect(testId).toBeDefined();
});
