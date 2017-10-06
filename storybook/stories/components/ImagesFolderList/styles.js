import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ListItemStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 0
  },
  ListItemInnerViewStyle: { flex: 1, flexDirection: "column" },
  ListItemInnerViewInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    margin: "2%"
  },
  ListItemInnerViewInnerViewLeftStyle: { flex: 2, flexDirection: "row" },
  ListItemInnerViewInnerViewLeftInnerView1Style: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center"
  },
  ListItemInnerViewInnerViewLeftInnerView1CheckboxStyle: {
    backgroundColor: "#eeae30",
    borderColor: "#eeae30"
  },
  ListItemInnerViewInnerViewLeftInnerView2Style: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    marginTop: "-5%"
  },
  ListItemInnerViewInnerViewLeftInnerView2ImageStyle: { width: 35, height: 35 },
  ListItemInnerViewInnerViewLeftInnerView3Style: {
    flex: 4,
    alignContent: "center"
  },
  ListItemInnerViewInnerViewLeftInnerView3TextStyle: {
    fontSize: 20,
    color: "#0067a0",
    fontWeight: "bold"
  },
  ListItemInnerViewInnerViewBodyInnerViewStyle: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: "-5%"
  },
  ListItemInnerViewInnerViewBodyInnerViewBadgeStyle: {
    color: "#0067a0",
    fontSize: 20,
    fontWeight: "400"
  },
  ListItemInnerViewInnerViewRightStyle: {
    flexDirection: "column",
    marginTop: "-2%"
  },
  ListItemInnerViewGridOuterViewStyle: {
    flex: 3,
    marginLeft: 0,
    marginRight: "-5%",
    marginBottom: "-3.75%"
  },
  ListItemInnerViewGridViewStyle: { flex: 1 },
  ListItemInnerViewGridItemImageStyle: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "#ccc",
    height: 80,
    width: 40
  }
});

export default styles;
