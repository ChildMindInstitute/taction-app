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
      disabled: true,
      invalidEmail: false,
      loading: false
    };
    if (this.input.email != "") {
      this.setState({ disabled: false });
    }
  }
  componentWillMount() {
    this.props.dispatch({ type: "FORGOT_PASSWORD_LOADING" });
  }
  componentDidUpdate() {
    if (this.props.loaded && !this.state.loading) {
      if (this.props.error && !this.state.invalidEmail) {
        Toast.show({
          text: "Error:",
          position: "bottom",
          buttonText: "This email address does not exists",
          duration: 5000
        });
        this.setState({ invalidEmail: true });
      } else {
        Toast.show({
          text: "",
          position: "bottom",
          buttonText: "A password reset mail has been sent!",
          duration: 5000
        });
        this.props.navigation.goBack();
      }
      this.setState({ loading: true });
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
          this.setState({ invalidEmail: false, loading: false });
          if (RegExEmail.test(this.input.email)) {
            this.props.dispatch({
              type: "RESET_PASSWORD",
              payload: this.input.email
            });
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

const mapStateToProps = store => {
  return {
    error: store.error.invalidEmailError,
    loaded: store.loaded.forgotPasswordLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  ForgotPasswordScreen
);
