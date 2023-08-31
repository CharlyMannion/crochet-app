import React from "react";
import { render } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("renders Add goal message on the home page", async () => {
    const screen = render(<App />);
    expect(screen.getByText("Add goal")).toBeDefined();
  });
});
