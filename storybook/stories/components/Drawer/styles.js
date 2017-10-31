const React = require("react-native");

const { Platform, Dimensions } = React;
// import { Constants } from "expo";
const deviceHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#0067a0" },
  contentStyle: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  listSpace: {
    flex: 12
  },
  drawerCover: {
    flex: 6,
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative"
  },
  drawerImage: {
    top: "25%",
    alignSelf: "center",
    height: 100,
    width: 100
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 18,

    marginLeft: "5%",
    color: "#fff"
  },
  drawerImage2: {
    alignSelf: "center",
    height: 40,
    width: 120
  },
  footer: { flex: 2 },
  listItemStyle: {
    backgroundColor: "#0067a0",
    borderBottomWidth: 0,
    padding: "5%",
    height: 60
  }
});

export default styles;
