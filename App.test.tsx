import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("renders List of crochet projects... message on the home page", async () => {
    const screen = render(<App />);
    expect(screen.getByText("List of crochet projects...")).toBeDefined();
  });
});
