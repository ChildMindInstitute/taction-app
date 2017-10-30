import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainOuterView: { flex: 1, backgroundColor: "#0067a0" },
  mainView: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  mainLogoStyles: { height: 100, width: 100 },
  bottomLogoStyle: { height: 40, width: 120 },
  topSpace: { flex: 3, alignItems: "center", justifyContent: "center" },

  welcomeTextSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeText: { color: "#fff", fontSize: 30, fontWeight: "400" },
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
  },
  submitButtonStyle: { backgroundColor: "#eeae30", margin: "5%" },
  submitButtonTextStyle: { color: "white", fontWeight: "500" }
});
export default styles;
