import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
const styles = StyleSheet.create({
  BackgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  MainOuterView: { flex: 1, backgroundColor: "#0067a0" },
  MainView: {
    flex: 1,
    marginTop:
      Platform.OS !== "ios"
        ? Platform.OS == "ios" ? 0 : Constants.statusBarHeight
        : 0
  },
  TopSpace: { flex: 1 },
  TopViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  BottomViewSpace: {
    flex: 5,
    alignItems: "center"
  },
  TotalScoreTextStyle: {
    color: "#eeae30",
    fontSize: 20,
    fontWeight: "bold",
    margin: "5%"
  },
  TotalScoreStyle: {
    fontSize: 42,
    fontWeight: "bold"
  },
  StarsStyle: {
    width: 160,
    height: 70,
    margin: "5%",
    marginBottom: "10%"
  },
  PlayButtonStyle: {
    backgroundColor: "#eeae30",
    opacity: 1,
    margin: "5%",
    borderRadius: 50
  },
  LogoStyle: { width: 100, height: 100 },
  PlayButtonTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  HowToPlayButtonStyle: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#eee",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 50
  },
  HowToPlayButtonTextStyle: {
    color: "#eeae30",
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
