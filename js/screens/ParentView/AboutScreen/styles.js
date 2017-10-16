import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: "#0067a0"
  },
  container: {
    margin: "5%"
  },
  HeaderLeftStyle: { color: "white" },
  container: {
    marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#eee"
  },
  BottomLogoStyle: {
    height: 40,
    width: 120
  }
});
export default styles;
