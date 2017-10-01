import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop: Platform.OS !== "ios" ? Constants.statusBarHeight : 0
  },
  TopSpace: { flex: 3, alignItems: "center", justifyContent: "center" },
  FormSpace: { flex: 9 },
  FormStyle: { flex: 1, marginTop: "10%" },
  SubmitButtonSpace: { flex: 1 },
  MainLogoStyles: { alignSelf: "center" },
  BottomLogoSpace: { flex: 3, justifyContent: "center" },
  SubLogoStyles: { alignSelf: "center" }
});
export default styles;
