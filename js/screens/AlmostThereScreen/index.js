import React from "react";
import AlmostThere from "../../../storybook/stories/screens/AlmostThere";
class AlmostThereScreen extends React.Component {
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
