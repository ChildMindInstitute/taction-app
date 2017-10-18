import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    margin: "5%",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? "5%" : Constants.statusBarHeight
        : 0
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
