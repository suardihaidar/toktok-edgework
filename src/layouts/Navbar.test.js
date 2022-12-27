import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("render Navbar layout", async () => {
  render(<Navbar />);
  const testId = await screen.findAllByTestId("navbar");
  expect(testId).toBeDefined();
});
