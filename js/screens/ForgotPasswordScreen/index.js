import React from "react";
import { Toast } from "native-base";
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
      disabled: true
    };
    if (this.input.email != "") {
      this.setState({ disabled: false });
    }
  }
  render() {
    return (
      <ForgotPassword
        emailChange={event => {
          this.input.email = event.nativeEvent.text;
          if (this.input.email != "") {
            this.setState({ disabled: false });
          } else this.setState({ disabled: true });
        }}
        prevValue={this.input.email}
        labelColor="white"
        inputViewStyle={{ flex: 1 }}
        onPressSubmitButton={() => {
          if (RegExEmail.test(this.input.email)) {
            this.props.dispatch({
              type: "RESET_PASSWORD",
              payload: this.input.email
            });
            Toast.show({
              text: "",
              position: "bottom",
              buttonText: "A password reset mail has been sent!",
              duration: 5000
            });
            this.props.navigation.goBack();
          } else {
            Toast.show({
              text: "Error:",
              position: "bottom",
              buttonText: "Please enter a valid email",
              duration: 5000
            });
          }
        }}
        submitDisabled={this.state.disabled}
        error={this.Error}
        submitted={this.state.submitted}
        hasSubmitError={this.state.hasSubmitError}
        emailHasError={this.state.emailHasError}
        onReturnLoginPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(ForgotPasswordScreen);
