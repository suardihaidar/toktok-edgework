import { render, screen } from "@testing-library/react";
import SkeletonCategories from "./SkeletonCategories";

test("render SkeletonCategories component", async () => {
  render(<SkeletonCategories />);
  const testId = await screen.findAllByTestId("skeleton-categories");
  expect(testId).toBeDefined();
});
