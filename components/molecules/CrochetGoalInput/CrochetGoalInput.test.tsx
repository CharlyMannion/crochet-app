import React from "react";
import { render } from "@testing-library/react-native";

import CrochetGoalInput from "./CrochetGoalInput";

describe("<CrochetGoalInput />", () => {
  it("renders Add goal message on the home page", () => {
    const component = render(<CrochetGoalInput onAddGoal={() => {}} />);

    expect(component.getByText("Add goal")).toBeDefined();
  });
});
