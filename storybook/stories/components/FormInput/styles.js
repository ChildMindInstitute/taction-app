import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ItemStyle: {
    flex: 1,
    flexDirection: "column",
    borderColor: "transparent"
  },
  LabelStyle: {
    fontSize: 16,
    alignSelf: "flex-start"
  },
  InputStyle: {
    width: "102%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0067a0"
  },
  ErrorViewStyle: {
    position: "absolute",
    top: "30%",
    alignSelf: "flex-end"
  },
  ErrorButtonStyle: {
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  ErrorContentStyle: {
    color: "#EF3350"
  }
});

export default styles;
