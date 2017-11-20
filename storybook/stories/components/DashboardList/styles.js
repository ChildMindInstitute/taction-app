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
  listItemBodyImageStyle: { width: 50, height: 25 },
  listItemRightStyle: { flexDirection: "row" },
  listItemRightViewStyle: { alignItems: "center", flexDirection: "row" },
  listItemRightViewInnerViewStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  listItemGridViewStyle: {
    flex: 3,
    paddingLeft: 17
  },
  listItemGridItemStyle: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#ccc",
    height: "100%",
    width: "100%"
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
  listItemGridItemInnerViewTextStyle: {
    top: 0,
    color: "red",
    fontSize: 16,
    paddingBottom: 2
  },
  listItemGridItemInnerViewText2Style: {
    top: 0,
    color: "green",
    fontSize: 16
  }
});
export default styles;
