const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  ContentStyle: { flex: 1, backgroundColor: "#0067a0" },
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
    fontSize: 16,
    marginLeft: 20,
    color: "#fff"
  },
  drawerImage2: {
    alignSelf: "center",
    height: 40,
    width: 120
  },
  Footer: { flex: 2, marginTop: "30%" },
  ListItemStyle: {
    backgroundColor: "#0067a0",
    borderBottomColor: "#005d8f",
    borderBottomWidth: 1
  }
});

export default styles;
