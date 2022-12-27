import { render, screen } from "@testing-library/react";
import ItemDetails from "./ItemDetails";

test("render ItemDetails component", async () => {
  render(<ItemDetails />);
  const testId = await screen.findAllByTestId("item-details");
  expect(testId).toBeDefined();
});
