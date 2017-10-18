import React from "react";
import DrawerChild from "../../../storybook/stories/components/DrawerChild";
import { Constants } from "expo";
import { View } from "native-base";
import { StatusBar, Platform } from "react-native";

class ChildDrawerScreen extends React.Component {
  static navigationOptions = {
    title: "ChildDrawerScreen",
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
            marginTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight
          }}
        >
          <StatusBar
            backgroundColor="#0067a0"
            translucent={true}
            barStyle="light-content"
          />
          <DrawerChild navProps={this.props.screenProps.parentNavigation} />
        </View>
      </View>
    );
  }
}

export default ChildDrawerScreen;
