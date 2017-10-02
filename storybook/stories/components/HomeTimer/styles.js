import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  OuterCircle: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#eeae30",
    width: 70,
    height: 70
  },
  InnerCircle: {
    left: 5,
    top: 5,
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#0067a0",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  TimeTextStyle: { color: "white" }
});

export default styles;
