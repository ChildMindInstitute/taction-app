const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#0067a0"
  },
  drawerCover: {
    alignSelf: "stretch",
    // resizeMode: 'cover',
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
  Footer: { marginTop: "50%" }
});

export default styles;
