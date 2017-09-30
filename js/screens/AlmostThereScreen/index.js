import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import AlmostThere from "../../../storybook/stories/screens/AlmostThere";
class AlmostThereScreen extends Component {
  static navigationOptions = {
    title: "AlmostThereScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 3000);
    return <AlmostThere StatusBarStyle="light-content" />;
  }
}
export default AlmostThereScreen;
