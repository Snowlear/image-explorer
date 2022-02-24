import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ApprovedWidget from "../../../components/organisms/ApprovedWidget";
import store from "../../../store";

test("expect to render ApprovedWidget style", () => {
render(<Provider store={store}><ApprovedWidget /></Provider>);
const linkElement = screen.getByTestId("approved-images-div");
expect(linkElement).toHaveStyle(`border-bottom: 1px solid #e5e5e5;`);
});

test("ApprovedWidget should show approved image count", () => {
    render(<Provider store={store}><ApprovedWidget /></Provider>);
    const linkElement = screen.getByTestId("approved-images-text");
  
    expect(linkElement).toContainHTML("Approved Images (0)");
  });