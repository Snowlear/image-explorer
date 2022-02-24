import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Index from "../../../components/pages";
import store from "../../../store";

test("renders image text", () => {
  render(<Provider store={store}><Index /></Provider>);
  const linkElement = screen.getByText(/Image Explorer/i);
  expect(linkElement).toBeInTheDocument();
});
