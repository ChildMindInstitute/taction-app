import React, { Component } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import Consent from "../../../storybook/stories/screens/Consent";
class ConsentScreen extends Component {
  static navigationOptions = {
    title: "ConsentScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      Term1: false,
      Term2: false,
      Term3: false
    };
  }
  render() {
    return (
      <Consent
        TopText="This appprovides a convenient adn fun way to engage you or your child in exposure therapy. In this simple game, the player taps on the correct image from among a set of distractor images to get points. You can add your own images or choose existing folders of images, pair the app with a child's app to monitor the childs progress, and add prizes to motivate the player to win more points."
        Term1="I understand that viewing certain images can be uncomfortable while playing the game, and that this is an intentional component of exposure therapy."
        Term2="I will allow the Child Mind Institute to store data from the use of this app on a secure cloud server, and to access this information for clinical and research purposes."
        Term3="I permit the Child Mind Institute to contact me regarding information gathered from this app for clinical or research purposes."
        SubmitButtonStyle={{
          backgroundColor:
            this.state.Term1 && this.state.Term2
              ? "rgba(238, 174, 48, 1)"
              : "rgba(238, 174, 48, 0.7)"
        }}
        SubmitButtonTextStyle={{ color: "white" }}
        Disabled={!(this.state.Term1 && this.state.Term2)}
        Checked1={this.state.Term1}
        Checked2={this.state.Term2}
        Checked3={this.state.Term3}
        CheckboxChange1={() => {
          this.setState({ Term1: !this.state.Term1 });
        }}
        CheckboxChange2={() => {
          this.setState({ Term2: !this.state.Term2 });
        }}
        CheckboxChange3={() => {
          this.setState({ Term3: !this.state.Term3 });
        }}
        OnPressSubmitButton={() => this.props.navigation.navigate("SignUp")}
        StatusBarStyle="light-content"
      />
    );
  }
}
export default ConsentScreen;
