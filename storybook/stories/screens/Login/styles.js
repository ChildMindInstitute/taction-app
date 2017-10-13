import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  MainInnerView: {
    flex: 1,
    margin: "5%"
  },
  TopSpace: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  FormSpace: { flex: 5 },
  ErrorSpace: {
    flex: 2,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  ErrorText: { color: "white" },
  FormStyle: { flex: 1 },
  ForgotPasswordSpace: { flex: 1, marginBottom: "5%", marginTop: "4%" },
  SubmitButtonSpace: { flex: 1 },
  RegisterNowSpace: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  MainLogoStyles: { alignSelf: "center", height: 90, width: 90 },
  BottomLogoSpace: { flex: 3, justifyContent: "flex-end" },
  SubLogoStyles: { alignSelf: "center", height: 40, width: 120 },
  SubmitButtonStyle: {
    backgroundColor: "#eeae30"
  },
  SubmitButtonTextStyle: { color: "white" }
});
export default styles;
