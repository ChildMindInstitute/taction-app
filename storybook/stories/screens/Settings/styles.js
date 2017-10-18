import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0067a0"
  },
  headerLeftStyle: { color: "white" },
  contentStyle: { flex: 1, marginLeft: "-4%" },
  containerStyle: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight
  }
});
export default styles;
