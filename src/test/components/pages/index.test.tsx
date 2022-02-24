import { render, screen } from "@testing-library/react";
import Index from "../../../components/pages";

test("renders image text", () => {
  render(<Index />);
  const linkElement = screen.getByText(/Image Explorer/i);
  console.log(linkElement);
  expect(screen.getByRole('div')).toBeInTheDocument();
});
