import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextArea from "../../../components/atoms/TextArea";

test("renders TextArea component with text", () => {
  render(<TextArea>Test</TextArea>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
