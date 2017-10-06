import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ListItemStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 0
  },
  ListItem1stViewStyle: { flex: 1, flexDirection: "column" },
  ListItem2ndViewStyle: { flex: 1, flexDirection: "row" },
  ListItemLeftStyle: { flex: 1, flexDirection: "row" },
  ListItemLeft1stViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ListItemLeftImageStyle: { width: 35, height: 35 },
  ListItemLeft2ndViewStyle: {
    flex: 3,
    alignItems: "center"
  },
  ListItemLeft2ndViewTextStyle: {
    fontSize: 20,
    color: "#0067a0",
    marginTop: "5%"
  },
  ListItemBodyStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  ListItemBodyTextStyle: { fontSize: 20, color: "black" },
  ListItemBodyImageStyle: { width: 35, height: 12 },
  ListItemRightStyle: { flexDirection: "row" },
  ListItemRightViewStyle: { alignItems: "center", flexDirection: "row" },
  ListItemRightViewInnerViewStyle: {
    flexDirection: "row",
    marginTop: "3%"
  },
  ListItemGridViewStyle: {
    flex: 3,
    marginLeft: 0,
    marginRight: "-5%",
    marginBottom: "-3.75%"
  },
  ListItemGrid: { flex: 1 },
  ListItemGridItemStyle: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#ccc",
    height: 80,
    width: 40
  },
  ListItemGridItemInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    marginTop: "63%"
  },
  ListItemGridItemInnerViewInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  TickCrossImageDimenstions: { width: 20, height: 20 },
  ListItemGridItemInnerViewTextStyle: {
    color: "red",
    fontSize: 14,
    margin: "2%"
  },
  ListItemGridItemInnerViewText2Style: {
    color: "green",
    fontSize: 14,
    margin: "2%"
  }
});
export default styles;
