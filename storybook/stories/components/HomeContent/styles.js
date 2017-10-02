import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: "column",
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    margin: "5%",
    borderRadius: 5,
    shadowColor: "#aaa",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: "white"
  },
  ImageStyle: {
    height: 100,
    width: 100
  },
  GridView: { left: "-2.7%" },
  GridRowColItem: { alignItems: "center", justifyContent: "center" },
  AfterTouchStyle: {
    position: "absolute",
    height: 145,
    width: 158.5,
    left: "-13.3%",
    top: "-22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.4)"
  },
  AfterTouchResultStyle: { height: 80, width: 80 }
});

export default styles;
