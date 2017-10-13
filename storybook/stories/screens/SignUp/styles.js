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
        : 0,
    margin: "5%"
  },
  TopSpace: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: "5%"
  },
  FormSpace: { flex: 9 },
  FormStyle: { flex: 1 },
  SubmitButtonSpace: { flex: 1, marginTop: "5%" },
  MainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  BottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  SubLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  SubmitButtonStyle: { backgroundColor: "#eeae30" },
  SubmitButtonTextStyle: { color: "white" }
});
export default styles;
