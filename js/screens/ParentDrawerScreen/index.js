import React, { Component } from "react";
import DrawerParent from "../../../storybook/stories/components/Drawer";
class ParentDrawerScreen extends Component {
  static navigationOptions = {
    title: "ParentDrawerScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <DrawerParent NavProps={this.props.screenProps.parentNavigation} />;
  }
}
export default ParentDrawerScreen;
