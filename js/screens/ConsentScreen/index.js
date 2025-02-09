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
      term1: false,
      term2: false,
      term3: false
    };
  }

  setConsent() {
    this.props.dispatch({
      type: "SET_CONSENT",
      payload: {
        term1: this.state.term1,
        term2: this.state.term2,
        term3: this.state.term3
      }
    });
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <Consent
        topText="This appprovides a convenient adn fun way to engage you or your child in exposure therapy. In this simple game, the player taps on the correct image from among a set of distractor images to get points. You can add your own images or choose existing folders of images, pair the app with a child's app to monitor the childs progress, and add prizes to motivate the player to win more points."
        term1="I understand that viewing certain images can be uncomfortable while playing the game, and that this is an intentional component of exposure therapy."
        term2="I will allow the Child Mind Institute to store data from the use of this app on a secure cloud server, and to access this information for clinical and research purposes."
        term3="I permit the Child Mind Institute to contact me regarding information gathered from this app for clinical or research purposes."
        submitButtonTextStyle={{ color: "white" }}
        disabled={!(this.state.term1 && this.state.term2)}
        checked1={this.state.term1}
        checked2={this.state.term2}
        checked3={this.state.term3}
        checkboxChange1={() => {
          this.setState({ term1: !this.state.term1 });
        }}
        checkboxChange2={() => {
          this.setState({ term2: !this.state.term2 });
        }}
        checkboxChange3={() => {
          this.setState({ term3: !this.state.term3 });
        }}
        onPressSubmitButton={() => this.setConsent()}
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
