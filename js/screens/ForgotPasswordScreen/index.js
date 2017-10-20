import React from "react";
import { Toast } from "native-base";
import Login from "../../../storybook/stories/screens/Login";
import ForgotPassword from "../../../storybook/stories/screens/ForgotPassword";
import { connect } from "react-redux";
const RegExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: "ForgotPasswordScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.input = {
      email: this.props.navigation.state.params.email
    };
    this.state = {
      emailHasError: false
    };
  }
  render() {
    return (
      <ForgotPassword
        emailChange={event => {
          this.input.email = event.nativeEvent.text;
          if (this.input.email != "" && RegExEmail.test(this.input.email)) {
            this.setState({ emailHasError: false });
          } else this.setState({ emailHasError: true });
        }}
        prevValue={this.input.email}
        labelColor="white"
        inputViewStyle={{ flex: 1 }}
        onPressSubmitButton={() => {
          this.props.dispatch({
            type: "RESET_PASSWORD",
            payload: this.input.email
          });
          Toast.show({
            text: "A password reset mail has been sent!",
            position: "bottom",
            buttonText: "Okay"
          });
          this.props.navigation.goBack();
        }}
        submitDisabled={
          !(this.input.email != "" && RegExEmail.test(this.input.email))
        }
        error={this.Error}
        submitted={this.state.submitted}
        hasSubmitError={this.state.hasSubmitError}
        emailHasError={this.state.emailHasError}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(ForgotPasswordScreen);
