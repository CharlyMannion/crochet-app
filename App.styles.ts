import { StyleSheet } from "react-native";

const createStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "blue",
  },
  textInput: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});

export default createStyles;
