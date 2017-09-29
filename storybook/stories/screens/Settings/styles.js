import { StyleSheet } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0"
  },
  HeaderLeftStyle: { color: "white" },
  ContentStyle: { flex: 1, marginLeft: "-4%" },
  ContainerStyle: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: Constants.statusBarHeight
  }
});
export default styles;
