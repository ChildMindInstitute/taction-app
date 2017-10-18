import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainView: { flex: 1, margin: "5%", alignContent: "center" },
  gridStyle: { flex: 1 },
  gridItemButtonStyle: {
    height: 160,
    width: 110,
    marginLeft: "1%",
    marginBottom: "3%"
  },
  cardView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "15%",
    height: 100
  },
  cardImage: { width: 50, height: 50 },
  cardText: { fontSize: 14 },
  cardStarImage: { width: 50, height: 15 }
});
export default styles;
