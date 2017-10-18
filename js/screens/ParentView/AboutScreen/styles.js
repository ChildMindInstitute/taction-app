import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0067a0"
  },
  container: {
    margin: "5%"
  },
  headerLeftStyle: { color: "white" },
  container: {
    marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#eee"
  },
  bottomLogoStyle: {
    height: 40,
    width: 120
  }
});
export default styles;
