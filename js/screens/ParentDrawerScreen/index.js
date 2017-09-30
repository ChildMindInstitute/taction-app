import React, { Component } from "react";
import DrawerParent from "../../../storybook/stories/components/Drawer";
import { Constants } from "expo";
import { View } from "native-base";
import { StatusBar } from "react-native";
class ParentDrawerScreen extends Component {
  static navigationOptions = {
    title: "ParentDrawerScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0067a0"
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#ccc",
            marginTop: Constants.statusBarHeight
          }}
        >
          <StatusBar
            backgroundColor="#0067a0"
            translucent={true}
            barStyle="light-content"
          />
          <DrawerParent NavProps={this.props.screenProps.parentNavigation} />
        </View>
      </View>
    );
  }
}
export default ParentDrawerScreen;
