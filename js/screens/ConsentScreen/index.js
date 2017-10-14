import React from "react";
import Consent from "../../../storybook/stories/screens/Consent";
import { connect } from "react-redux";

class ConsentScreen extends React.Component {
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

  setConsent() {
    this.props.dispatch({
      type: "SET_CONSENT",
      payload: {
        Term1: this.state.Term1,
        Term2: this.state.Term2,
        Term3: this.state.Term3
      }
    });
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <Consent
        TopText="This appprovides a convenient adn fun way to engage you or your child in exposure therapy. In this simple game, the player taps on the correct image from among a set of distractor images to get points. You can add your own images or choose existing folders of images, pair the app with a child's app to monitor the childs progress, and add prizes to motivate the player to win more points."
        Term1="I understand that viewing certain images can be uncomfortable while playing the game, and that this is an intentional component of exposure therapy."
        Term2="I will allow the Child Mind Institute to store data from the use of this app on a secure cloud server, and to access this information for clinical and research purposes."
        Term3="I permit the Child Mind Institute to contact me regarding information gathered from this app for clinical or research purposes."
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
        OnPressSubmitButton={() => this.setConsent()}
        StatusBarStyle="light-content"
      />
    );
  }
}

const mapStateToProps = store => {
  return { consent: store.consent };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(ConsentScreen);
