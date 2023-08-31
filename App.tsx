import { Button, Text, TextInput, View } from "react-native";

import createStyles from "./App.styles";
export default function App() {
  return (
    <View style={createStyles.appContainer}>
      <View style={createStyles.inputContainer}>
        <TextInput
          style={createStyles.textInput}
          placeholder="Your crochet projects"
        />
        <Button title="Add project" />
      </View>
      <View>
        <Text>List of crochet projects...</Text>
      </View>
    </View>
  );
}
