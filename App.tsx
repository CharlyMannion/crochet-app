import { useState } from "react";
import { FlatList, View } from "react-native";

import createStyles from "./App.styles";

import CrochetGoalItem from "./components/atoms/CrochetGoalItem/CrochetGoalItem";
import CrochetGoalInput from "./components/molecules/CrochetGoalInput/CrochetGoalInput";

interface CrochetListItem {
  text: string;
  id: string;
}

type CrochetList = CrochetListItem[];

export default function App() {
  const [crochetGoals, setCrochetGoals] = useState<CrochetList>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCrochetGoals(
      (currentCourseGoals): CrochetList => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]
    );
  };

  return (
    <View style={createStyles.appContainer}>
      <CrochetGoalInput onAddGoal={addGoalHandler} />
      <View style={createStyles.goalsContainer}>
        <FlatList
          data={crochetGoals}
          renderItem={(itemData) => {
            return <CrochetGoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}
