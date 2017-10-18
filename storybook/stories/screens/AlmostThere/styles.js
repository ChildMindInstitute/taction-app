import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0
  },
  topSpace: { flex: 3, alignItems: "center", justifyContent: "center" },
  bottomLogoStyle: { height: 40, width: 120 },
  mainLogoStyle: {
    height: 100,
    width: 100
  },
  almostThereTextSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  almostThereText: { color: "#fff", fontSize: 30, fontWeight: "300" },
  confirmTextSpace: {
    flex: 3,
    alignItems: "center"
  },
  confirmTextStyle: { color: "#fff", fontSize: 20, fontWeight: "500" },
  bottomLogoSpace: {
    flex: 4,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "5%"
  }
});
export default styles;
