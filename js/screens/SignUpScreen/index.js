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
      emailError: false,
      usernameError: false,
      hasToNavigate: false
    };
    this.error = {
      confirmPassword: "Must match password",
      password: "Required",
      email: "Invalid email id",
      username: "username already taken"
    };
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
        text: "",
        position: "bottom",
        buttonText: "The email address is already in use by another account!",
        duration: 5000
      });
      this.props.dispatch({ type: "NO_ERROR_SIGNUP" });
      this.setState({ submitted: false });
    }
  }
  signUp() {
    if (
      this.input.password == this.input.confirmPassword &&
      !this.state.emailError
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
  }

  render() {
    return (
      <SignUp
        backgroundColor="#0067a0"
        usernameChange={event => {
          this.input.username = event.nativeEvent.text;
          if (this.input.username == "") {
            this.setState({ usernameError: true });
          } else {
            this.setState({ usernameError: false });
          }
        }}
        inputViewStyle={{
          flex: 1
        }}
        passwordChange={event => {
          this.input.password = event.nativeEvent.text;
          if (this.input.password == "" || this.input.password.length < 6) {
            this.setState({ passwordError: true });
          } else {
            this.setState({ passwordError: false });
            if (this.input.password == this.input.confirmPassword) {
              this.setState({ confirmPasswordError: false });
            } else {
              this.setState({ confirmPasswordError: true });
            }
          }
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
        disabled={
          this.state.confirmPasswordError ||
          this.state.emailError ||
          this.state.passwordError ||
          this.state.usernameError ||
          (this.input.confirmPassword == "" ||
            this.input.email == "" ||
            this.input.password == "" ||
            this.input.username == "") ||
          this.state.submitted
        }
        confirmPasswordChange={event => {
          this.input.confirmPassword = event.nativeEvent.text;
          if (
            this.input.confirmPassword == this.input.password &&
            this.input.password != ""
          ) {
            this.setState({ confirmPasswordError: false });
          } else if (this.input.password == "") {
            this.setState({ confirmPasswordError: true });
            this.setState({ passwordError: true });
          } else {
            this.setState({ confirmPasswordError: true });
          }
        }}
        emailChange={event => {
          this.input.email = event.nativeEvent.text;
          if (RegExEmail.test(this.input.email)) {
            this.setState({ emailError: false });
          } else {
            this.setState({ emailError: true });
          }
        }}
        confirmPasswordError={this.state.confirmPasswordError}
        passwordError={this.state.passwordError}
        emailError={this.state.emailError}
        usernameError={this.state.usernameError}
        error={this.error}
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
