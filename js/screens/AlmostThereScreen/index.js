import React from "react";
import AlmostThere from "../../../storybook/stories/screens/AlmostThere";
import Db from "../../services";

class AlmostThereScreen extends React.Component {
  static navigationOptions = {
    title: "AlmostThereScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    try {
      Db.verifyEmail();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 2000);
    return <AlmostThere StatusBarStyle="light-content" />;
  }
}
export default AlmostThereScreen;
