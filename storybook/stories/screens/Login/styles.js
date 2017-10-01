import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop: Platform.OS !== "ios" ? Constants.statusBarHeight : 0
  },
  TopSpace: { flex: 5, alignItems: "center", justifyContent: "center" },
  FormSpace: { flex: 4.5 },
  ErrorSpace: { flex: 0.5, top: "5%", alignItems: "center" },
  ErrorText: { color: "red" },
  FormStyle: { flex: 1, marginTop: "10%" },
  ForgotPasswordSpace: { flex: 0.25 },
  SubmitButtonSpace: { flex: 1 },
  RegisterNowSpace: {
    flex: 1,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  MainLogoStyles: { alignSelf: "center" },
  BottomLogoSpace: { flex: 3, justifyContent: "center" },
  SubLogoStyles: { alignSelf: "center" }
});
export default styles;
