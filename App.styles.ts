import { StyleSheet } from "react-native";

const createStyles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    height: 40,
    borderColor: "red ",
    borderWidth: 1,
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});

export default createStyles;
