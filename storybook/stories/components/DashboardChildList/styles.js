import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  MainView: { flex: 1, margin: "5%", alignContent: "center" },
  GridStyle: { flex: 1 },
  GridItemButtonStyle: {
    height: 160,
    width: 110,
    marginLeft: "1%",
    marginBottom: "3%"
  },
  CardView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "15%",
    height: 100
  },
  CardImage: { width: 50, height: 50 },
  CardText: { fontSize: 14 },
  CardStarImage: { width: 50, height: 15 }
});
export default styles;
