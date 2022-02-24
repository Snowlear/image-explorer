import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ImageViewer from "../../../components/organisms/ImageViewer";
import store from "../../../store";

test("expect to render imageviewer with arrow.png", () => {
const { getByRole} = render(<Provider store={store}><ImageViewer /></Provider>);
  const linkElement = getByRole("img");
  expect(linkElement).toHaveAttribute("src","arrow.png");
});

test("renders ImageViewer component style", () => {
    render(<Provider store={store}><ImageViewer /></Provider>);
    const linkElement = screen.getByTestId("image-viewer");
  
    expect(linkElement).toHaveStyle(`text-align: center;
    margin: 20px auto 20px auto;
    padding:20px;
    background-color: #ece9f9;
    border: 1px solid #d9d6ff;
    height:40%;
    width:40%;`);
  });