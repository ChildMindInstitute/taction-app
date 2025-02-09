import React from "react";
import DrawerParent from "../../../storybook/stories/components/Drawer";
// import { Constants } from "expo";
import { View } from "native-base";
import { Platform, StatusBar } from "react-native";

class ParentDrawerScreen extends React.Component {
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
        <StatusBar barStyle="light-content" backgroundColor="#00466b" />
        <View
          style={{
            flex: 1,
            backgroundColor: "#ccc"
          }}
        >
          <DrawerParent navProps={this.props.screenProps.parentNavigation} />
        </View>
      </View>
    );
  }
}

export default ParentDrawerScreen;
