import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: { flex: 1 },
  TopSpace: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25%",
    marginTop: "10%"
  },
  SelectChildSpace: {
    flex: 7,
    justifyContent: "center"
  },
  LoginAsTextSpace: { flex: 0.5, marginLeft: "5%" },
  LoginAsText: { color: "white" },
  MainLogoStyles: { alignSelf: "center" },
  BottomLogoSpace: { flex: 3, justifyContent: "center" },
  SubLogoStyles: { alignSelf: "center" }
});
export default styles;
