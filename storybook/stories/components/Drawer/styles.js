const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ListSpace: {
    flex: 12
  },
  drawerCover: {
    flex: 3,
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative"
  },
  drawerImage: {
    top: "25%",
    alignSelf: "center"
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20,
    color: "#fff"
  },
  drawerImage2: {
    alignSelf: "center",
    height: 22,
    width: 100
  },
  Footer: { flex: 2, marginTop: "30%" }
});

export default styles;
