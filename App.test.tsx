import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree?.children.length).toBe(3);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders Hello World message on the home page", async () => {
    const screnn = render(<App />);
    expect(screen.getByText("Crochet!")).toBeDefined();
  });
});
