import { StyleSheet, Platform } from "react-native";
// import { Constants } from "expo";
const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0",
    margin: 15
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
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
export default styles;
