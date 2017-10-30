import { StyleSheet, Platform, Dimensions } from "react-native";
// import { Constants } from "expo";
let { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  mainOuterView: {
    backgroundColor: "#0067a0"
  },
  mainView: {
    backgroundColor: "#0067a0",
    width: width - 30,
    height: height - 30,
    margin: 15
  },
  topSpace: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  selectChildSpace: {
    flex: 7,
    justifyContent: "center"
  },
  loginAsTextSpace: { flex: 0.5, marginTop: "5%", marginBottom: "5%" },
  loginAsText: { color: "white" },
  mainLogoStyles: { alignSelf: "center", height: 100, width: 100 },
  bottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  subLogoStyles: { alignSelf: "center", height: 40, width: 120 }
});
export default styles;
