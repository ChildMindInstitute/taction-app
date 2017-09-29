import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: { flex: 1, backgroundColor: "#0067ae" },
  TopSpace: { flex: 3, alignItems: "center", justifyContent: "center" },

  WelcomeTextSpace: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  WelcomeText: { color: "#fff", fontSize: 30, fontWeight: "400" },
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
