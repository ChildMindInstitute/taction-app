import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    marginTop: Platform.OS !== "ios" ? Constants.statusBarHeight : 0
  },
  LogoSpace: { flex: 2 },
  LodaerSpace: { flex: 1 },
  LoaderStyle: { alignSelf: "center", flex: 1, margin: "10%" },
  BottomLogoSpace: { flex: 1 },
  LogoStyles: { alignSelf: "center" }
});
export default styles;
