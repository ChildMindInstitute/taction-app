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
    fontSize: 26,
    fontWeight: "500",
    margin: "5%",
    marginTop: "8%"
  },
  TotalScoreStyle: {
    fontSize: 60,
    fontWeight: "500"
  },
  StarsStyle: {
    width: 160,
    height: 70,
    margin: "5%"
  },
  PlayButtonStyle: {
    backgroundColor: "#eeae30",
    opacity: 1,
    margin: "5%",
    borderRadius: 50,
    height: 55
  },
  LogoStyle: { width: 100, height: 100 },
  PlayButtonTextStyle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  HowToPlayButtonStyle: {
    marginLeft: "15%",
    marginRight: "15%",
    borderRadius: 50
  },
  HowToPlayButtonTextStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default styles;
