import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import createStyles from "./App.styles";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [crochetGoals, setCrochetGoals] = useState<string[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCrochetGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={createStyles.appContainer}>
      <View style={createStyles.inputContainer}>
        <TextInput
          style={createStyles.textInput}
          placeholder="Your crochet projects"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={createStyles.goalsContainer}>
        {crochetGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}
