import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Box from "../../../components/atoms/Box";

test("renders Box component with text", () => {
  render(<Box><p>Test</p></Box>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
