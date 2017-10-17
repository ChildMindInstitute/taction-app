import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ListItemStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 0,
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  ListItemInnerViewStyle: { flex: 1.6, flexDirection: "column" },
  ListItemInnerViewInnerViewStyle: {
    flex: 1,
    flexDirection: "row",
    margin: "2%"
  },
  ListItemInnerViewInnerViewLeftStyle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  ListItemInnerViewInnerViewLeftInnerView1Style: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  ListItemInnerViewInnerViewLeftInnerView1CheckboxStyle: {
    backgroundColor: "#eeae30",
    borderColor: "#eeae30"
  },
  ListItemInnerViewInnerViewLeftInnerView2Style: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: "2%"
  },
  ListItemInnerViewInnerViewLeftInnerView2ImageStyle: { width: 35, height: 35 },
  ListItemInnerViewInnerViewLeftInnerView3Style: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: "5%"
  },
  ListItemInnerViewInnerViewLeftInnerView3TextStyle: {
    fontSize: 20,
    color: "#0067a0",
    fontWeight: "bold"
  },
  ListItemInnerViewInnerViewBodyInnerViewStyle: {
    alignContent: "center",
    justifyContent: "center"
  },
  ListItemInnerViewInnerViewBodyInnerViewBadgeStyle: {
    color: "#0067a0",
    fontSize: 22,
    fontWeight: "400"
  },
  ListItemInnerViewInnerViewRightStyle: {
    flexDirection: "column",
    marginTop: "-2%",
    flex: 3
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
