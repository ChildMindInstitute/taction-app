import React from "react";
import SignUp from "../../../storybook/stories/screens/SignUp";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { Toast } from "native-base";

const RegExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "LoginScreen",
    header: null
  };
  constructor(props) {
    super(props);
    this.input = {
      confirmPassword: "",
      password: "",
      email: "",
      username: ""
    };
    this.state = {
      confirmPasswordError: false,
      submitted: false,
      passwordError: false,
      hasToNavigate: false,
      disabled: true
    };
  }
  setDisabled() {
    if (
      this.input.confirmPassword != "" &&
      this.input.password != "" &&
      this.input.email != "" &&
      this.input.username != ""
    ) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  componentDidUpdate() {
    if (this.props.loaded && this.state.submitted) {
      this.setState({ submitted: false, hasToNavigate: true });
      this.props.navigation.navigate("AlmostThere", {
        email: this.input.email
      });
    }

    if (this.props.error && this.state.submitted) {
      Toast.show({
        text: "The email address is already in use by another account.!",
        position: "bottom",
        buttonText: "Ok",
        duration: 1500
      });
      this.props.dispatch({ type: "NO_ERROR_SIGNUP" });
      this.setState({ submitted: false });
    }
  }
  signUp() {
    if (
      this.input.password == this.input.confirmPassword &&
      RegExEmail.test(this.input.email)
    ) {
      this.props.dispatch({
        type: "USER_SIGNUP",
        payload: {
          consent: this.props.consent,
          username: this.input.username,
          email: this.input.email,
          password: this.input.password
        }
      });
    }
    if (!RegExEmail.test(this.input.email)) {
      Toast.show({
        text: "Error: ",
        position: "bottom",
        buttonText: "Email address entered is invalid!",
        duration: 5000
      });
      this.setState({ submitted: false });
    } else if (this.input.password.length < 6) {
      Toast.show({
        text: "",
        position: "bottom",
        buttonText: "Password length should be greater than 5",
        duration: 5000
      });
      this.setState({ submitted: false });
    } else if (this.input.password != this.input.confirmPassword) {
      Toast.show({
        text: "",
        position: "bottom",
        buttonText: "Password and confirm password mismatch!",
        duration: 5000
      });
      this.setState({
        submitted: false,
        passwordError: true,
        confirmPasswordError: true
      });
    }
  }

  render() {
    return (
      <SignUp
        backgroundColor="#0067a0"
        usernameChange={event => {
          this.input.username = event.nativeEvent.text;
          this.setDisabled();
        }}
        inputViewStyle={{
          flex: 1
        }}
        passwordChange={event => {
          this.input.password = event.nativeEvent.text;
          if (this.input.password.length == 1) {
            this.setState({
              passwordError: false,
              confirmPasswordError: false
            });
          }
          this.setDisabled();
        }}
        loginRedirectPress={() =>
          this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: "Login" })]
            })
          )}
        onPressSubmitButton={() => {
          this.setState({ submitted: true });
          this.signUp();
        }}
        submitted={this.state.submitted}
        disabled={this.state.disabled}
        confirmPasswordChange={event => {
          this.input.confirmPassword = event.nativeEvent.text;
          if (this.input.confirmPassword.length == 1) {
            this.setState({
              passwordError: false,
              confirmPasswordError: false
            });
          }
          this.setDisabled();
        }}
        emailChange={event => {
          this.input.email = event.nativeEvent.text;
          this.setDisabled();
        }}
        confirmPasswordError={this.state.confirmPasswordError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    consent: store.consent,
    user: store.user,
    loaded: store.loaded.userLoaded,
    error: store.error.signUpError
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
