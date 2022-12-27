import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("render Dashboard page", async () => {
  render(<Dashboard />);
  const testId = await screen.findAllByTestId("dashboard");
  expect(testId).toBeDefined();
});
