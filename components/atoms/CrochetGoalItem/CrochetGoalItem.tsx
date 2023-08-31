import { Text, View } from "react-native";

import createStyles from "./CrochetGoalItem.styles";

type CrochetGoalItemProps = {
  text: string;
};

export default function CrochetGoalItem(props: CrochetGoalItemProps) {
  return (
    <View style={createStyles.goalItem}>
      <Text style={createStyles.goalText}>{props.text}</Text>
    </View>
  );
}
