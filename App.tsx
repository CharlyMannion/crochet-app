import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Crochet!</Text>
      <Text style={styles.dummyText}>Some text about this crochet app!</Text>
      <Button title="tap me"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderColor: "red",
    borderWidth: 1,
  },
});
