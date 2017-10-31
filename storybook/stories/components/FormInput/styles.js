import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    flexDirection: "column",
    borderColor: "transparent"
  },
  labelStyle: {
    fontSize: 16,
    alignSelf: "flex-start",
    paddingBottom: 5
  },
  inputStyle: {
    width: "102%",
    backgroundColor: "white",
    borderWidth: 1,
    height: 40,
    borderColor: "#0067a0"
  },
  errorContentStyle: {
    color: "#EF3350",
    alignSelf: "flex-end",
    position: "absolute",
    top: 2.5,
    right: 8
  }
});

export default styles;
