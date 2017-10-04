import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  TopSpace: { flex: 5, alignItems: "center", justifyContent: "center" },
  FormSpace: { flex: 5.3, margin: "2.5%" },
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
  SubLogoStyles: { alignSelf: "center" },
  SubmitButtonStyle: { backgroundColor: "#eeae30", margin: "5%" },
  SubmitButtonTextStyle: { color: "white" }
});
export default styles;
