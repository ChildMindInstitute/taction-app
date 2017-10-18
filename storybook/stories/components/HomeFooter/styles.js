import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  leftEndBar: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    margin: "1%"
  },
  rightEndBar: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    margin: "1%"
  },
  middleBar: {
    flex: 1,
    margin: "1%"
  },
  completedBarColor: {
    backgroundColor: "#eeae30"
  },
  incompleteBarColor: {
    backgroundColor: "#fff"
  },
  footerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  footerInnerView1Style: {
    flex: 1,
    borderRadius: 50,
    width: "80%",
    height: "0%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    margin: "5%",
    backgroundColor: "#eee"
  },
  footerInnerView2Style: { flex: 2 },
  footerInnerView2TextStyle: { color: "#0067a0", fontWeight: "bold" }
});

export default styles;
