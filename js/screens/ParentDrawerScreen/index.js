import React, { Component } from "react";
import Drawer from "../../../storybook/stories/components/Drawer";
class ParentDrawerScreen extends Component {
  static navigationOptions = {
    title: "ParentDrawerScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <Drawer />;
  }
}
export default ParentDrawerScreen;
