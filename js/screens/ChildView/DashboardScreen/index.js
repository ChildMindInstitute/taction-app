import React from "react";
import { Text } from "native-base";
import DashboardChild from "../../../../storybook/stories/screens/DashboardChild";
class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashboardChild
        ExcercisesAvailable={[
          {
            Name: "Spider",
            Image: require("../../../assets/spiderman.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: true
          },
          {
            Name: "Basketball",
            Image: require("../../../assets/ball1.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: true
          },
          {
            Name: "FootBall",
            Image: require("../../../assets/ball2.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: false
          },
          {
            Name: "Minion",
            Image: require("../../../assets/minion.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: false
          },
          {
            Name: "FootBall",
            Image: require("../../../assets/ball2.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: false
          },
          {
            Name: "Spider",
            Image: require("../../../assets/spiderman.jpg"),
            Stars: require("../../../assets/all-stars.png"),
            IsPlayed: false
          }
        ]}
        ItemPress={data => {
          //data handler
          this.props.navigation.navigate("GameScreen");
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Choose Folder</Text>
      </DashboardChild>
    );
  }
}
export default WelcomeScreen;
