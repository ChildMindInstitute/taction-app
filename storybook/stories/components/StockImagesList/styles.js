import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  listItemStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 0,
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  listItemInnerViewStyle: { flex: 1.6, flexDirection: "column" },
  listItemInnerViewInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    margin: "2%"
  },
  listItemInnerViewInnerViewLeftStyle: {
    flex: 2,
    alignContent: "center",
    justifyContent: "center"
  },
  listItemInnerViewInnerViewLeftInnerView1Style: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  listItemInnerViewInnerViewLeftInnerView1CheckboxStyle: {
    backgroundColor: "#eeae30",
    borderColor: "#eeae30"
  },
  listItemInnerViewInnerViewLeftInnerView2Style: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: "2%"
  },
  listItemInnerViewInnerViewLeftInnerView2ImageStyle: { width: 35, height: 35 },
  listItemInnerViewInnerViewLeftInnerView3Style: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: "5%"
  },
  listItemInnerViewInnerViewLeftInnerView3TextStyle: {
    fontSize: 20,
    color: "#0067a0",
    fontWeight: "bold"
  },
  listItemInnerViewInnerViewBodyInnerViewStyle: {
    alignContent: "center",
    justifyContent: "center"
  },
  listItemInnerViewInnerViewBodyInnerViewBadgeStyle: {
    color: "#0067a0",
    fontSize: 22,
    fontWeight: "400"
  },
  listItemInnerViewInnerViewRightStyle: {
    flexDirection: "column",
    marginTop: "-2%",
    flex: 3
  },
  listItemInnerViewGridOuterViewStyle: {
    flex: 3,
    marginLeft: 0,
    marginRight: "-5%",
    marginBottom: "-3.75%"
  },
  listItemInnerViewGridViewStyle: { flex: 1 },
  listItemInnerViewGridItemImageStyle: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#ccc",
    height: 80,
    width: 40
  }
});

export default styles;
