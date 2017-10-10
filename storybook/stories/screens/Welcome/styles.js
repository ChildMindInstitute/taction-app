import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainOuterView: { flex: 1, backgroundColor: "#0067a0" },
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0
  },
  TopSpace: { flex: 3, alignItems: "center", justifyContent: "center" },

  WelcomeTextSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  WelcomeText: { color: "#fff", fontSize: 30, fontWeight: "400" },
  ConfirmTextSpace: {
    flex: 3,
    alignItems: "center"
  },
  ConfirmTextStyle: { color: "#fff", fontSize: 20, fontWeight: "500" },
  BottomLogoSpace: {
    flex: 4,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "5%"
  },
  SubmitButtonStyle: { backgroundColor: "#eeae30", margin: "5%" },
  SubmitButtonTextStyle: { color: "white", fontWeight: "500" }
});
export default styles;
