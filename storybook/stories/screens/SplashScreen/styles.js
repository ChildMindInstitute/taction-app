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
  LogoSpace: { flex: 2 },
  LodaerSpace: { flex: 1 },
  LoaderStyle: { alignSelf: "center", flex: 1, margin: "10%" },
  BottomLogoSpace: { flex: 1, justifyContent: "flex-end" },
  LogoStyles: { alignSelf: "center" },
  LogoStyles2: { alignSelf: "center", height: 40, width: 120 }
});
export default styles;
