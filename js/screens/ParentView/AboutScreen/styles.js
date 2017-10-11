import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0"
  },
  HeaderLeftStyle: { color: "white" },
  container: {
    marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#eee"
  }
});
export default styles;
