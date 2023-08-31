import React from "react";
import { render } from "@testing-library/react-native";

import CrochetGoalItem from "./CrochetGoalItem";

describe("<CrochetGoalItem />", () => {
  it("renders Add goal message on the home page", () => {
    const inputText = "A crochet goal";
    const component = render(<CrochetGoalItem text={inputText} />);

    expect(component.getByText(inputText)).toBeDefined();
  });
});
