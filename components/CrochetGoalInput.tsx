import { useState } from "react";
import { Button, TextInput, View } from "react-native";

import createStyles from "./CrochetGoalInput.styles";

type CrochetGoalInputProps = {
  onAddGoal: (enteredGoalText: string) => void;
};

export default function CrochetGoalItem(props: CrochetGoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={createStyles.inputContainer}>
      <TextInput
        style={createStyles.textInput}
        placeholder="Your crochet projects"
        onChangeText={goalInputHandler}
        testID={"textInput"}
        value={enteredGoalText}
      />
      <Button
        title="Add goal"
        onPress={addGoalHandler}
        testID={"inputButton"}
      />
    </View>
  );
}
