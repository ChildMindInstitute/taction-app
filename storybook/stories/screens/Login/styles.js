import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  TopSpace: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    top: "5%"
  },
  FormSpace: { flex: 4, margin: "2.5%" },
  ErrorSpace: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    flexDirection: "row"
  },
  ErrorText: { color: "white" },
  FormStyle: { flex: 1 },
  ForgotPasswordSpace: { flex: 0.25 },
  SubmitButtonSpace: { flex: 1 },
  RegisterNowSpace: {
    flex: 1,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  MainLogoStyles: { alignSelf: "center", height: 100, width: 100 },
  BottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  SubLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  SubmitButtonStyle: { backgroundColor: "#eeae30", margin: "5%" },
  SubmitButtonTextStyle: { color: "white" }
});
export default styles;
