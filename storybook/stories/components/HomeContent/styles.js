import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainView: {
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
  imageStyle: {
    height: 100,
    width: 100
  },
  gridView: { left: "-2.7%" },
  gridRowColItem: { alignItems: "center", justifyContent: "center" },
  afterTouchStyle: {
    position: "absolute",
    height: 145,
    width: 158.5,
    left: "-13.3%",
    top: "-22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.4)"
  },
  afterTouchResultStyle: { height: 80, width: 80 }
});

export default styles;
