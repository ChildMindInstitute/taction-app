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
    this.Input = {
      ConfirmPassword: "",
      Password: "",
      Email: "",
      Username: ""
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
      confirmPassword: "Must Match Password",
      password: "Required",
      email: "Invalid Email ID",
      username: "Username Already Taken"
    };
  }
  componentDidUpdate() {
    if (this.props.loaded && this.state.submitted) {
      this.setState({ submitted: false, hasToNavigate: true });
      this.props.navigation.navigate("AlmostThere");
    }

    if (this.props.error && this.state.submitted) {
      Toast.show({
        text: "The email address is already in use by another account.!",
        position: "bottom",
        buttonText: "Ok"
      });
      this.props.dispatch({ type: "NO_ERROR_SIGNUP" });
      this.setState({ submitted: false });
    }
  }
  signUp() {
    if (
      this.Input.password == this.Input.confirmPassword &&
      !this.state.emailError
    ) {
      this.props.dispatch({
        type: "USER_SIGNUP",
        payload: {
          consent: this.props.consent,
          username: this.Input.Username,
          email: this.Input.Email,
          password: this.Input.Password
        }
      });
    }
  }

  render() {
    return (
      <SignUp
        backgroundColor="#0067a0"
        usernameChange={event => {
          this.Input.uername = event.nativeEvent.text;
          if (this.Input.username == "") {
            this.setState({ usernameError: true });
          } else {
            this.setState({ usernameError: false });
          }
        }}
        inputViewStyle={{
          flex: 1
        }}
        passwordChange={event => {
          this.Input.password = event.nativeEvent.text;
          if (this.Input.password == "" || this.Input.password.length < 6) {
            this.setState({ PasswordError: true });
          } else {
            this.setState({ PasswordError: false });
            if (this.Input.password == this.Input.confirmPassword) {
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
          (this.Input.confirmPassword == "" ||
            this.Input.email == "" ||
            this.Input.password == "" ||
            this.Input.username == "")
        }
        confirmPasswordChange={event => {
          this.Input.ConfirmPassword = event.nativeEvent.text;
          if (
            this.Input.confirmPassword == this.Input.password &&
            this.Input.password != ""
          ) {
            this.setState({ confirmPasswordError: false });
          } else if (this.Input.password == "") {
            this.setState({ confirmPasswordError: true });
            this.setState({ PasswordError: true });
          } else {
            this.setState({ confirmPasswordError: true });
          }
        }}
        emailChange={event => {
          this.Input.email = event.nativeEvent.text;
          if (RegExEmail.test(this.Input.email)) {
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
