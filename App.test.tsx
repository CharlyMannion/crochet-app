import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("renders Add goal message on the home page", () => {
    const screen = render(<App />);
    expect(screen.getByText("Add goal")).toBeDefined();
  });

  it("adds a crochet goal to the list of goals when the user enters text and clicks add goal", () => {
    const { getByTestId, getByText } = render(<App />);
    const input = getByTestId("textInput");
    const inputedText = "A new crochet goal";

    fireEvent.changeText(input, inputedText);
    fireEvent.press(getByText("Add goal"));

    expect(getByText(inputedText));
  });
});
