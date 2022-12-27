import { render, screen } from "@testing-library/react";
import SkeletonItems from "./SkeletonItems";

test("render SkeletonItems component", async () => {
  render(<SkeletonItems />);
  const testId = await screen.findAllByTestId("skeleton-item");
  expect(testId).toBeDefined();
});
