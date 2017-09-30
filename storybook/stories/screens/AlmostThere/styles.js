import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop: Platform.OS !== "ios" ? Constants.statusBarHeight : 0
  },
  TopSpace: { flex: 3, alignItems: "center", justifyContent: "center" },

  AlmostThereTextSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  AlmostThereText: { color: "#fff", fontSize: 30, fontWeight: "300" },
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
  }
});
export default styles;
