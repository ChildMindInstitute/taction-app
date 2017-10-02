import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  LeftEndBar: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    margin: "1%"
  },
  RightEndBar: {
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    margin: "1%"
  },
  MiddleBar: {
    flex: 1,
    margin: "1%"
  },
  CompletedBarColor: {
    backgroundColor: "#eeae30"
  },
  IncompleteBarColor: {
    backgroundColor: "#fff"
  },
  FooterStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  FooterInnerView1Style: {
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
  FooterInnerView2Style: { flex: 2 },
  FooterInnerView2TextStyle: { color: "#0067a0", fontWeight: "bold" }
});

export default styles;
