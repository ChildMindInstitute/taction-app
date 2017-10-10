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
  TopSpace: { flex: 3, alignItems: "center", justifyContent: "center" },
  FormSpace: { flex: 9 },
  FormStyle: { flex: 1, marginTop: "10%" },
  SubmitButtonSpace: { flex: 1 },
  MainLogoStyles: { alignSelf: "center" },
  BottomLogoSpace: { flex: 3, justifyContent: "center" },
  SubLogoStyles: { alignSelf: "center" },
  SubmitButtonStyle: { backgroundColor: "#eeae30", margin: "5%" },
  SubmitButtonTextStyle: { color: "white" }
});
export default styles;
