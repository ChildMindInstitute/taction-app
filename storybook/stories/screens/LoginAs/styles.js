import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0
  },
  TopSpace: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25%",
    marginTop: "10%"
  },
  SelectChildSpace: {
    flex: 7,
    justifyContent: "center"
  },
  LoginAsTextSpace: { flex: 0.5, marginLeft: "5%" },
  LoginAsText: { color: "white" },
  MainLogoStyles: { alignSelf: "center" },
  BottomLogoSpace: { flex: 3, justifyContent: "center" },
  SubLogoStyles: { alignSelf: "center" }
});
export default styles;
