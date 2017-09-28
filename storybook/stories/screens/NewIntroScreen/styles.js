import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: { flex: 1 },
  TopSpace: { flex: 1 },
  TopViewStyle: {
    flex: 2,
    justifyContent: "flex-end",
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
    width: "30%",
    height: "8%",
    margin: "5%",
    marginBottom: "10%"
  },
  PlayButtonStyle: {
    backgroundColor: "#eeae30",
    opacity: 1,
    margin: "5%",
    borderRadius: 50
  },
  PlayButtonTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  HowToPlayButtonStyle: {
    backgroundColor: "#ffffff",
    opacity: 1,
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
