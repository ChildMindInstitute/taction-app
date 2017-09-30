import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Home from "../../../../storybook/stories/screens/Home";
class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "WelcomeScreen",
    header: null
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home
        Back={() => {
          this.props.navigation.goBack();
        }}
        TotalPoints={100}
        TimeLeftDenomination={"Min"}
        TimeLeft={"2.07"}
        Image1={require("../../../assets/ball1.jpg")}
        Image2={require("../../../assets/spiderman.jpg")}
        Image3={require("../../../assets/minion.jpg")}
        Image4={require("../../../assets/ball2.jpg")}
        CrossImage={require("../../../assets/star_empty.png")}
        TickImage={require("../../../assets/star_filled.png")}
        CorrectOption={2}
        Pressed={item => {
          console.log(item);
        }}
        LeftImages={3}
        TotalImages={10}
        Question="Tap on The Spider"
      />
    );
  }
}
export default WelcomeScreen;
