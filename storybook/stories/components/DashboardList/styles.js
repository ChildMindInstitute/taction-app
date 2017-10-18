import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  listItemStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 0,
    padding: "2%"
  },
  listItem1stViewStyle: { flex: 1, flexDirection: "column" },
  listItem2ndViewStyle: { flex: 1, flexDirection: "row" },
  listItemLeftStyle: { flex: 1, flexDirection: "row" },
  listItemLeft1stViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  listItemLeftImageStyle: { width: 35, height: 35 },
  listItemLeft2ndViewStyle: {
    flex: 3,
    alignItems: "center"
  },
  listItemLeft2ndViewTextStyle: {
    fontSize: 20,
    color: "#0067a0",
    marginTop: "5%"
  },
  listItemBodyStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  listItemBodyTextStyle: { fontSize: 20, color: "black" },
  listItemBodyImageStyle: { width: 60, height: 20 },
  listItemRightStyle: { flexDirection: "row" },
  listItemRightViewStyle: { alignItems: "center", flexDirection: "row" },
  listItemRightViewInnerViewStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  listItemGridViewStyle: {
    flex: 3,
    marginLeft: 0,
    marginRight: "-5%",
    marginBottom: "-3.75%"
  },
  listItemGrid: { flex: 1 },
  listItemGridItemStyle: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#ccc",
    height: 80,
    width: 40
  },
  listItemGridItemInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
    marginTop: "63%"
  },
  listItemGridItemInnerViewInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  tickCrossImageDimenstions: { width: 20, height: 20 },
  listItemGridItemInnerViewTextStyle: {
    color: "red",
    fontSize: 14,
    margin: "2%"
  },
  listItemGridItemInnerViewText2Style: {
    color: "green",
    fontSize: 14,
    margin: "2%"
  }
});
export default styles;
